
// hambuerger
    // const hamburger = document.getElementById('hamburger');
    // const mobileMenu = document.getElementById('mobile-menu');
    // hamburger.addEventListener('click', () => {
    //   mobileMenu.classList.toggle('hidden');
    // });

    
 
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


    function handleNavbarScroll() {
        if (window.scrollY > 50) {
          mainNav.classList.add('scrolled');
        } else {
          mainNav.classList.remove('scrolled');
        }
    }

// Add scroll event listener
window.addEventListener('scroll', handleNavbarScroll);


  
    // Fungsi untuk membuka modal
    function openModal(title, description, image) {
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerText = "Lokasi: " + description;
      document.getElementById('modalImage').src = image;
      document.getElementById('modal').classList.remove('hidden');
    }

    // Fungsi untuk menutup modal
    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
    }

    // Fungsi untuk menutup modal saat overlay diklik
    function closeModalOverlay(event) {
      if (event.target.id === 'modal') {
        closeModal();
      }
    }

    
    AOS.init({
      duration: 1000,
      once: false,
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  function handleResize() {
      if (window.innerWidth >= 768) {
          mobileMenu.classList.add('hidden');
      }
  }

  window.addEventListener('resize', handleResize);
  function scrollToContent() {
      const contentSection = document.getElementById('konten');
      contentSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
      });
  }


  const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
  navbar.classList.add('bg-white', 'shadow-md');
  navbar.classList.remove('bg-transparent');
  navbar.querySelectorAll('a').forEach(link => link.classList.replace('text-white', 'text-gray-900'));
} else {
  navbar.classList.remove('bg-white', 'shadow-md');
  navbar.classList.add('bg-transparent');
  navbar.querySelectorAll('a').forEach(link => link.classList.replace('text-gray-900', 'text-white'));
}
});