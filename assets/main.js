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

  // Header and Mobile Header Script - Start 

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    document.querySelector('.sidebar-close').addEventListener('click', function() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    // Desktop dropdown - show on hover
    document.querySelectorAll('.nav-link').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
          dropdown.style.opacity = '1';
          dropdown.style.visibility = 'visible';
        }
      });

      item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
          dropdown.style.opacity = '0';
          dropdown.style.visibility = 'hidden';
        }
      });
    });
    // Mobile dropdown toggle
    document.querySelectorAll('.sidebar-links .has-dropdown > a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('active');
        this.querySelector('.arrow').textContent = 
          dropdown.classList.contains('active') ? '▲' : '▼';
      });
    });
// Header and Mobile Header Script - End 