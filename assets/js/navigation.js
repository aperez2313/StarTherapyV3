// Native details provides a keyboard-operable menu without script dependency.
const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu?.addEventListener('click', (event) => {
  if (event.target.closest('a')) mobileMenu.open = false;
});
mobileMenu?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

const root = document.documentElement;
const header = document.querySelector('.site-header');
const contactBar = document.querySelector('.mobile-actions');
function updateOcclusionSizes() {
  root.style.setProperty('--header-height', `${header?.offsetHeight ?? 0}px`);
  root.style.setProperty('--contact-bar-height', `${contactBar?.offsetHeight ?? 0}px`);
}
const sizeObserver = new ResizeObserver(updateOcclusionSizes);
if (header) sizeObserver.observe(header);
if (contactBar) sizeObserver.observe(contactBar);
updateOcclusionSizes();
