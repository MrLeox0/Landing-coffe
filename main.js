document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  // Cerrar menú al hacer clic en un enlace
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
});
