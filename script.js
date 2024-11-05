document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  const background = document.querySelector('.background');
  const backgrounds = [
    'images/Sunset.jpg',
    'images/Spring.jpg',
    'images/Winter.jpg',
    'images/Sunset.jpg'
  ];

  let currentIndex = 1;

  document.querySelector('.rotate-next').addEventListener('click', () => {
    rotateSlides(1);
  });

  document.querySelector('.rotate-prev').addEventListener('click', () => {
    rotateSlides(-1);
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      updateSlider(index);
    });
  });

  function rotateSlides(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlider(currentIndex);
  }

  function updateSlider(index) {
    currentIndex = index;

    slides.forEach(slide => {
      slide.classList.remove('left', 'center', 'right');
      slide.querySelector('.center-text').style.display = 'none'; // Hide all texts first
    });

    slides[(currentIndex - 1 + slides.length) % slides.length].classList.add('left');
    slides[currentIndex].classList.add('center');
    slides[(currentIndex + 1) % slides.length].classList.add('right');

    background.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;

    slides[currentIndex].querySelector('.center-text').style.display = 'block'; // Show text for center slide

    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    thumbnails[currentIndex].classList.add('active');
  }

  rotateSlides(0);
});
