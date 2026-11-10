// Local preview server that mimics GitHub Pages' /StarTherapyV3/ path.
// Usage, from the repo root: node tools/serve.mjs . 8123   then open http://localhost:8123/StarTherapyV3/
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize, resolve } from 'node:path';

const root = resolve(process.argv[2]);
const port = Number(process.argv[3] || 8123);
const base = '/StarTherapyV3/';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain' };

createServer(async (req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') { res.writeHead(302, { Location: base }); return res.end(); }
  if (!url.startsWith(base)) { res.writeHead(404); return res.end(); }
  let file = normalize(join(root, url.slice(base.length)));
  if (!file.startsWith(normalize(root))) { res.writeHead(403); return res.end(); }
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    const body = await readFile(join(root, '404.html')).catch(() => 'Not found');
    res.writeHead(404, { 'Content-Type': types['.html'] });
    res.end(body);
  }
}).listen(port, () => console.log(`serving ${root} at http://localhost:${port}${base}`));
