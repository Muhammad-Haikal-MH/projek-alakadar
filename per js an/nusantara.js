AOS.init({
  once: false,
  duration: 1000,
});


function handleNavbarScroll() {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleNavbarScroll);

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeMenuButton = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.menu-item');

function tutupMenu() {
menu.classList.add('translate-x-full');
menu.classList.remove('translate-x-0');
}

burger.addEventListener('click', () => {
menu.classList.toggle('translate-x-full');
menu.classList.toggle('translate-x-0');
});

closeMenuButton.addEventListener('click', tutupMenu);

menuItems.forEach(item => {
item.addEventListener('click', tutupMenu);
});

document.addEventListener('click', (e) => {
if (!menu.contains(e.target) && !burger.contains(e.target)) {
  tutupMenu();
}
});