document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Función para alternar menú
  const toggleMenu = () => {
    const isActive = navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    // Accesibilidad
    hamburger.setAttribute('aria-expanded', isActive);
  };

  // Función para cerrar menú
  const closeMenu = () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', false);
  };

  // Evento para abrir/cerrar
  hamburger.addEventListener('click', toggleMenu);

  // Delegación para cerrar al hacer clic en un enlace
  navLinks.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
});

