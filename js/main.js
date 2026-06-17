document.addEventListener('DOMContentLoaded', () => {
  // PAGE LOADER
  const loader = document.querySelector('.pageloader');
  if (loader) { setTimeout(() => loader.classList.add('loaded'), 400); }

  // MOBILE NAV
  const toggles = document.querySelectorAll('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  toggles.forEach(t => t.addEventListener('click', () => {
    if (mobileMenu) { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }));
  const mc = document.getElementById('mobile-close');
  if (mc) mc.addEventListener('click', close);
  if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  function close() { if (mobileMenu) mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }

  // SCROLL HIDE/SHOW NAV (mobile)
  let lastScroll = 0;
  const headerSmall = document.querySelector('.header-small');
  if (headerSmall) {
    headerSmall.style.transition = 'transform 0.3s ease';
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        headerSmall.style.transform = 'translateY(-100%)';
      } else {
        headerSmall.style.transform = 'translateY(0)';
      }
      lastScroll = current <= 0 ? 0 : current;
    }, { passive: true });
  }

  // PARALLAX (light)
  if (window.innerWidth > 991) {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.image-cover-parallax').forEach(img => {
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        const o = (p - 0.5) * 20;
        img.style.transform = `translate3d(0, ${o}%, 0) scale3d(1.05, 1.05, 1)`;
      });
    }, { passive: true });
  }
});
