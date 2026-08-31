document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var menuBtn = document.querySelector('.menu-btn');
  var hasHero = document.querySelector('.hero, .page-banner');

  if (document.querySelector('.hero')) header.classList.add('is-home');

  function updateSolid() {
    if (!hasHero) { header.classList.add('is-solid'); return; }
    if (window.scrollY > 40) header.classList.add('is-solid');
    else header.classList.remove('is-solid');
  }
  updateSolid();
  window.addEventListener('scroll', updateSolid, { passive: true });

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      header.classList.toggle('is-open');
    });
  }

  var heroH1 = document.querySelector('.hero .reveal-h1');
  var heroSub = document.querySelector('.hero .reveal-sub');
  var heroCta = document.querySelector('.hero .reveal-cta');
  var scrollCue = document.querySelector('.hero-scroll');

  if (heroH1 && heroSub && heroCta) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        heroH1.classList.add('is-visible');
        setTimeout(function () {
          heroSub.classList.add('is-visible');
          setTimeout(function () {
            heroCta.classList.add('is-visible');
            setTimeout(function () {
              if (scrollCue) scrollCue.classList.add('is-visible');
            }, 1500);
          }, 2000);
        }, 1500);
      }, 500);
    });
  }

  if (scrollCue) {
    scrollCue.addEventListener('click', function () {
      var next = document.querySelector('.hero').nextElementSibling;
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });
  }

  var scrollReveals = document.querySelectorAll('.reveal-on-scroll');
  if (scrollReveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
      scrollReveals.forEach(function (el) { io.observe(el); });
    } else {
      scrollReveals.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }
});
