const slides = document.querySelectorAll('.slide');
const contentSections = document.querySelectorAll('.content');
const body = document.body;

AOS.init({
  duration: 1000, 
  once: false,    
  
});

let currentSlide = 0;

document.getElementById('prev').addEventListener('click', () => {
  changeSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

function changeSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  // Change slide
  const offset = index * -100;
  document.getElementById('slides').style.transform = `translateX(${offset}%)`;

  // Change background
  const bgClass = slides[index].getAttribute('data-bg');
  body.className = bgClass;

  // Update content visibility
  contentSections.forEach((content, idx) => {
    content.classList.toggle('hidden', idx !== index);
  });

  currentSlide = index;
  AOS.refresh();
}

// Initialize first slide
changeSlide(0);

// video

const videoPopup = document.getElementById('videoPopup');
const popupVideo = document.getElementById('popupVideo');
const videoSource = document.getElementById('videoSource');
const closePopup = document.getElementById('closePopup');
const buttons = document.querySelectorAll('[data-video]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.getAttribute('data-video');
    videoSource.src = videoSrc;
    popupVideo.load();
    videoPopup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Disable scrolling
  });
});

closePopup.addEventListener('click', () => {
  videoPopup.classList.add('hidden');
  popupVideo.pause();
  document.body.classList.remove('overflow-hidden');
});

videoPopup.addEventListener('click', (e) => {
  if (e.target === videoPopup) {
    videoPopup.classList.add('hidden');
    popupVideo.pause();
    document.body.classList.remove('overflow-hidden');
  }
});

window.addEventListener('resize', handleResize);
        function scrollToContent() {
            const contentSection = document.getElementById('content');
            contentSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
