const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Clicar no botão hamburguer ativa o menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Clicar em qualquer link do menu fecha o menu
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
