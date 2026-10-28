(() => {
  const gallery = document.querySelector('.hero-gallery');
  if (!gallery) return;
  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const dots = [...gallery.querySelectorAll('.gallery-dot')];
  const toggle = gallery.querySelector('.gallery-toggle');
  const status = gallery.querySelector('.gallery-status');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, timer, paused = reducedMotion.matches, hovered = false, focused = false, touchStart = null, request = 0;


  const labels = {
    en: {gallery:'Mini Lavka food gallery',choose:'Choose photo',photo:'Show photo',prev:'Previous photo',next:'Next photo',play:'Play slideshow',pause:'Pause slideshow',close:'Close',images:['Signature pizza with olives and vegetables','Fresh kebab wrap with vegetables','Pepperoni pizza, fresh from the oven','Kebab box with fries and vegetables','Four cheese pizza','Hawaiian pizza','Mushroom pizza','Pizza finished with sauce']},
    lv: {gallery:'Mini Lavka ēdienu galerija',choose:'Izvēlēties foto',photo:'Rādīt foto',prev:'Iepriekšējais foto',next:'Nākamais foto',play:'Sākt slaidrādi',pause:'Apturēt slaidrādi',close:'Aizvērt',images:['Pica ar olīvām un dārzeņiem','Svaigs kebaba lavašs ar dārzeņiem','Svaigi cepta peperoni pica','Kebaba bokss ar frī un dārzeņiem','Četru sieru pica','Havaju pica','Sēņu pica','Pica ar mērci']},
    ru: {gallery:'Галерея блюд Mini Lavka',choose:'Выбрать фото',photo:'Показать фото',prev:'Предыдущее фото',next:'Следующее фото',play:'Включить слайд-шоу',pause:'Остановить слайд-шоу',close:'Закрыть',images:['Пицца с оливками и овощами','Свежий лаваш с кебабом и овощами','Пепперони из печи','Кебаб-бокс с картофелем фри и овощами','Пицца четыре сыра','Гавайская пицца','Грибная пицца','Пицца с соусом']}
  };
  const text = () => labels[document.documentElement.lang] || labels.en;
  function translateGallery() {
    const t=text();
    gallery.setAttribute('aria-label',t.gallery);
    gallery.querySelector('.gallery-dots').setAttribute('aria-label',t.choose);
    gallery.querySelector('.gallery-prev').setAttribute('aria-label',t.prev);
    gallery.querySelector('.gallery-next').setAttribute('aria-label',t.next);
    dots.forEach((dot,i)=>dot.setAttribute('aria-label',`${t.photo} ${i+1}`));
    slides.forEach((slide,i)=>slide.alt=t.images[i] || t.gallery);
    const close=document.querySelector('.x');if(close)close.setAttribute('aria-label',t.close);
    status.textContent='';
    updatePause();
  }
  document.addEventListener('languagechange',translateGallery);

  function schedule() {
    clearTimeout(timer);
    if (!paused && !hovered && !focused && !document.hidden && slides.length > 1) {
      timer = setTimeout(() => show(current + 1, false), 6000);
    }
  }

  async function show(index, announce = true) {
    clearTimeout(timer);
    const target = (index + slides.length) % slides.length;
    const ticket = ++request;
    const image = slides[target];
    image.loading = 'eager';
    try { await image.decode(); } catch (_) { schedule(); return; }
    if (ticket !== request) return;
    current = target;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      dots[i].classList.toggle('is-active', i === current);
      dots[i].setAttribute('aria-pressed', String(i === current));
    });
    if (announce) status.textContent = `${current + 1} / ${slides.length}: ${image.alt}`;
    slides[(current + 1) % slides.length].loading = 'eager';
    schedule();
  }

  function updatePause() {
    toggle.textContent = paused ? '▶' : 'Ⅱ';
    toggle.setAttribute('aria-label', paused ? text().play : text().pause);
    toggle.setAttribute('aria-pressed', String(paused));
    schedule();
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  gallery.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
  toggle.addEventListener('click', () => { paused = !paused; updatePause(); });
  gallery.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  gallery.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  gallery.addEventListener('focusin', () => { focused = true; schedule(); });
  gallery.addEventListener('focusout', event => { focused = gallery.contains(event.relatedTarget); schedule(); });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  gallery.addEventListener('touchstart', event => { touchStart = [event.touches[0].clientX, event.touches[0].clientY]; clearTimeout(timer); }, { passive: true });
  gallery.addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart[0];
    const dy = event.changedTouches[0].clientY - touchStart[1];
    touchStart = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
    else schedule();
  }, { passive: true });
  gallery.addEventListener('touchcancel', () => { touchStart = null; schedule(); }, { passive: true });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updatePause(); });
  translateGallery();
})();
