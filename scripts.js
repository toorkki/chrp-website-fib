// scripts.js
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});
