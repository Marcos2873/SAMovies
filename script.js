let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  const offset = -100 * slideIndex;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${offset}%)`;
    if (i === slideIndex) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    } else {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    }
  });
}

function currentSlide(index) {
  slideIndex = index - 1;
  showSlide(slideIndex);
}

// Mostrar la primera imagen al cargar la página
showSlide(slideIndex);

// Carrusel automático
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000); // Cambia la imagen cada 3 segundos