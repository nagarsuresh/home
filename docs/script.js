(function() {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = primaryNav.querySelectorAll('a');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('active');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinksArray = Array.from(navLinks);

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksArray.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Handle top of page
    if (scrollY < 100) {
      navLinksArray.forEach(link => link.classList.remove('active'));
    }
  }

  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial call
  updateActiveNav();

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = primaryNav.contains(e.target);
      const isClickOnToggle = navToggle.contains(e.target);
      
      if (!isClickInsideNav && !isClickOnToggle && primaryNav.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards and timeline items
  document.querySelectorAll('.card, .timeline-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

})();

