// Seleciona o botão do menu e o menu mobile
const toggleBtn = document.querySelector('.navbar_toggle');
const mobileMenu = document.getElementById('mobileMenu');

// Ao clicar, adiciona/remove a classe "active"
toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');

// Troca o ícone do botão
  const icon = toggleBtn.querySelector('ion-icon');
  if (mobileMenu.classList.contains('active')) {
    icon.setAttribute('name', 'close-outline');// ícone de fechar
  } else {
    icon.setAttribute('name', 'menu-outline'); // ícone de abrir
  }
});