const menuActive = document.querySelector('.burger_menu-active');
const burger = document.querySelector('.item-menu_burger')
const menuClose = document.querySelector('.burger_menu-close')

function toggleMenu() {
  menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu)
menuClose.addEventListener('click', toggleMenu)