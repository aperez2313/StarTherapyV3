// Full-page screenshots of every page at 1440px (desktop) and 390px (phone) using Microsoft Edge.
// Usage: node tools/capture-screenshots.mjs "<path to msedge.exe>" <output folder> https://aperez2313.github.io/StarTherapyV3/
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const [edge, outDir, base] = process.argv.slice(2);
const profile = join(outDir, '..', 'edge-profile-cdp');
mkdirSync(outDir, { recursive: true });
const pages = [['01-home', ''], ['02-speech-therapy', 'speech-therapy/'], ['03-occupational-therapy', 'occupational-therapy/'], ['04-physical-therapy', 'physical-therapy/'], ['05-locations', 'locations/'], ['06-getting-started', 'getting-started/'], ['07-insurance-funding', 'insurance-funding/'], ['08-about', 'about/'], ['09-contact', 'contact/'], ['10-privacy', 'privacy/']];
const views = [['desktop', 1440, false], ['phone', 390, true]];

const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${profile}`, '--remote-debugging-port=9333', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let wsUrl;
for (let i = 0; i < 50 && !wsUrl; i++) {
  await sleep(200);
  try { const t = await (await fetch('http://127.0.0.1:9333/json/list')).json(); wsUrl = t.find(x => x.type === 'page')?.webSocketDebuggerUrl; } catch {}
}
if (!wsUrl) { proc.kill(); throw new Error('Edge DevTools not reachable'); }

const ws = new WebSocket(wsUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));
let id = 0; const pending = new Map(); const events = [];
ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method) events.push(m.method); });
const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result)); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Page.enable');
await send('Network.enable');
await send('Network.setCacheDisabled', { cacheDisabled: true });
for (const [name, path] of pages) {
  for (const [kind, width, mobile] of views) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile });
    events.length = 0;
    await send('Page.navigate', { url: base + path });
    for (let i = 0; i < 100 && !events.includes('Page.loadEventFired'); i++) await sleep(100);
    // Load lazy images by scrolling through, then return to top.
    await send('Runtime.evaluate', { expression: `(async()=>{document.documentElement.style.scrollBehavior='auto';await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}scrollTo(0,0);await Promise.race([Promise.all([...document.images].map(i=>i.complete?0:new Promise(r=>{i.onload=i.onerror=r}))),new Promise(r=>setTimeout(r,4000))]);})()`, awaitPromise: true });
    const { result } = await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true });
    const height = result.value;
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
    await sleep(400);
    const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width, height, scale: 1 }, captureBeyondViewport: true });
    const file = join(outDir, `${name}-${kind}.png`);
    writeFileSync(file, Buffer.from(shot.data, 'base64'));
    console.log(`${name}-${kind}.png ${width}x${height}`);
  }
}
ws.close(); proc.kill();
