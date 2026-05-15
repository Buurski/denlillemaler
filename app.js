// =====================================================
// Den Lille Maler — interactions
// =====================================================
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // --- Header scroll shadow ---
  const header = $('#site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile menu ---
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');
  const toggleMenu = (force) => {
    const open = force ?? !menuBtn.classList.contains('open');
    menuBtn.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => toggleMenu());
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  // --- Reveal-on-scroll for sections below the fold ---
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
  $$('.section-head, .svc, .quote, .ap-frame, .awards li, .area-list li, .gal-item')
    .forEach(el => { el.classList.add('io-pending'); io.observe(el); });

  // --- Gallery lightbox ---
  const lightbox = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbClose = $('#lbClose');
  $$('.gal-item').forEach(btn => {
    if(!btn.dataset.src) return;
    btn.addEventListener('click', () => {
      lbImg.src = btn.dataset.src;
      const im = btn.querySelector('img');
      lbImg.alt = im ? im.alt : '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
  const closeLb = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  lbClose.addEventListener('click', closeLb);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){ closeLb(); toggleMenu(false); }
  });

  // --- Smooth scroll offset (sticky header) ---
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href').slice(1);
    if(!id) return;
    const t = document.getElementById(id);
    if(!t) return;
    e.preventDefault();
    const top = t.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  // --- Marquee pause on hover ---
  const m = $('.marquee-track');
  if(m){
    m.parentElement.addEventListener('mouseenter', () => m.style.animationPlayState = 'paused');
    m.parentElement.addEventListener('mouseleave', () => m.style.animationPlayState = 'running');
  }
})();
