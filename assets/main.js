// Popup Script - Start

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('ageVerificationPopup');
    const exitBtn = document.getElementById('exitBtn');
    const enterBtn = document.getElementById('enterBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mainContent = document.getElementById('mainContent');
    
    // Store the verification status in localStorage
    const isVerified = localStorage.getItem('ageVerified') === 'true';
    
    if (isVerified) {
        popup.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        popup.style.display = 'flex';
    }

    // Exit button redirects to a safe site
    exitBtn.addEventListener('click', function() {
        window.location.href = 'https://cwglobalpartners.com/';
    });
    
    // Enter button hides the popup and shows content
    enterBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        mainContent.style.display = 'block';
        localStorage.setItem('ageVerified', 'true');
    });
    
    // Close button works only to acknowledge (can't dismiss without choice)
    closeBtn.addEventListener('click', function() {
        // We could animate the close or add sound here
    });
    
    // Prevent closing with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            // Optional: Add a warning that this popup must be answered
        }
    });
});

// Popup Script - End

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

// Scroll to top button functionality
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'inline-block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // Simple form submission handler - will just show a success message and reset the form
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Basic validation
    if(!form.fullname.value.trim() || !form.email.value.trim()) {
      status.style.color = 'red';
      status.style.display = 'block';
      status.textContent = 'Please fill in all required fields (Full Name and Email).';
      return;
    }
    status.style.color = '#065f46'; // Green shade color
    status.style.display = 'block';
    status.textContent = 'Thank you for your message! We will get back to you soon.';
    form.reset();
  });