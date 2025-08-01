//Testimonal Script Homepage - Start
// Testimonial Slider Logic
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.testimonial-dots button');

  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
      dots[i].setAttribute('aria-selected', i === index ? 'true' : 'false');
      dots[i].tabIndex = i === index ? 0 : -1;
    });
    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
    dot.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight') {
        e.preventDefault();
        let nextIndex = (index + 1) % dots.length;
        dots[nextIndex].focus();
        showTestimonial(nextIndex);
      } else if(e.key === 'ArrowLeft') {
        e.preventDefault();
        let prevIndex = (index - 1 + dots.length) % dots.length;
        dots[prevIndex].focus();
        showTestimonial(prevIndex);
      }
    });
  });

  // Auto rotate every 8 seconds
  setInterval(() => {
    let next = (currentIndex + 1) % testimonials.length;
    showTestimonial(next);
  }, 3000);

  //Testimonal Script Homepage - End
