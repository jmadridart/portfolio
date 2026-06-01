// ============================================
// JOSH MADRID — MAIN JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // PAGE LOADER
  const loader = document.querySelector('.pageloader');
  if (loader) {
    // Show loader briefly then slide away
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 400);
  }

  // MOBILE MENU TOGGLE (works with both navbar variants)
  const toggles = document.querySelectorAll('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const mobileClose = document.getElementById('mobile-close');
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // NAVBAR ITEM LINE HOVER ANIMATION (native CSS transition handles width,
  // but we also need to wire up the Webflow-style line for any dynamically needed cases)

  // SCROLL-BASED PARALLAX (lightweight version of Webflow's parallax)
  const parallaxImages = document.querySelectorAll('.image-cover-parallax');
  if (parallaxImages.length && window.innerWidth > 991) {
    window.addEventListener('scroll', () => {
      parallaxImages.forEach(img => {
        const wrapper = img.parentElement;
        const rect = wrapper.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (rect.bottom < 0 || rect.top > viewH) return;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const offset = (progress - 0.5) * 20; // -10% to +10%
        img.style.transform = `translate3d(0, ${offset}%, 0) scale3d(1.05, 1.05, 1)`;
      });
    }, { passive: true });
  }

  // SCROLL FADE-IN for section tops
  const fadeEls = document.querySelectorAll('.section-top-heading, .main-wrapper > section');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    obs.observe(el);
  });

});
