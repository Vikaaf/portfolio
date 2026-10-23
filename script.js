// ================= данные =================
// quiz без адаптива, поэтому у него только вид «Компьютер».
const PROJECTS = [
  {
    id: 'pizza2', cls: 'c1', title: { ru: 'Пиццерия', en: 'Pizzeria' },
    url: 'https://vikaaf.github.io/pizza2/',
    desc: {
      ru: 'Лендинг пиццерии: анимации при прокрутке, параллакс, всплывающие окна и форма с маской телефона.',
      en: 'Pizzeria landing page: scroll animations, parallax, popups and a form with a phone mask.'
    },
    stack: ['HTML', 'CSS', 'jQuery', 'WOW.js', 'Parallax', 'Magnific Popup', 'Inputmask', 'ADAPTIVE'],
    adaptive: true
  },
  {
    id: 'auto_mod6', cls: 'c2', title: { ru: 'Аренда авто', en: 'Car rental' },
    url: 'https://vikaaf.github.io/auto_mod6/',
    desc: {
      ru: 'Многосекционный сайт аренды автомобилей: слайдер, модальные окна, анимации и адаптивная вёрстка.',
      en: 'Multi-section car rental website: slider, modal windows, animations and responsive layout.'
    },
    stack: ['HTML', 'CSS', 'jQuery', 'Slick', 'Magnific Popup', 'Animate.css', 'ADAPTIVE'],
    adaptive: true
  },
  {
    id: 'quiz', cls: 'c3', title: { ru: 'JS Quiz', en: 'JS Quiz' },
    url: 'https://vikaaf.github.io/quiz/',
    desc: {
      ru: 'Квиз по JavaScript из нескольких страниц: выбор теста, прохождение, результат и разбор ответов.',
      en: 'Multi-page JavaScript quiz: topic choice, taking the test, result and answer review.'
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM', 'MULTIPAGE'],
    adaptive: false
  },
  {
    id: 'velodom', cls: 'c4', title: { ru: 'Велодом', en: 'Velodom' },
    url: 'https://velodom.onrender.com/',
    desc: {
      ru: 'Интернет-магазин велосипедов: шапка и подвал, страница товара, фронтенд на HTML, CSS и JS, бэкенд на Express.',
      en: 'Bicycle online store: header and footer, product page, frontend in HTML, CSS and JS, backend on Express.'
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'ADAPTIVE', 'Express'],
    adaptive: true, slow: true
  }
];

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'jQuery',
  { ru: 'Адаптивная вёрстка', en: 'Responsive layout' },
  'Slick', 'Magnific Popup', 'Animate.css', 'Express',
  { ru: 'Git и GitHub', en: 'Git and GitHub' }
];

const STACK_WORDS = {
  ADAPTIVE: { ru: 'Адаптив', en: 'Responsive' },
  MULTIPAGE: { ru: 'Многостраничность', en: 'Multi-page' }
};
const MARQUEE = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WOW.js', 'Slick', 'Magnific Popup', 'Animate.css', 'Inputmask', 'Express', 'ADAPTIVE'];

const I18N = {
  ru: {
    nav_projects: 'Проекты', nav_about: 'Обо мне', nav_skills: 'Навыки', nav_diploma: 'Диплом', nav_contacts: 'Контакты',
    write: 'Написать',
    tagline: '<strong>Фронтенд-разработчица.</strong><br>Верстаю сайты на HTML, CSS и JavaScript.<br>Студентка 4 курса МПУ.',
    search_ph: 'Поиск по проектам и технологиям', search_btn: 'Поиск /',
    eyebrow_projects: 'Проекты · нажми на карточку',
    empty: 'Ничего не найдено. Попробуй «jQuery» или «адаптив».',
    eyebrow_stack: 'Технологии в моих проектах',
    eyebrow_about: 'Обо мне',
    about_h: 'Делаю сайты на <mark>HTML, CSS и JavaScript</mark>, от вёрстки до живого результата.',
    about_p: 'Учусь на 4 курсе МПУ по направлению «информационные технологии». Собираю лендинги, многостраничные сайты и небольшие интерактивные приложения, подключаю библиотеки, учусь делать вёрстку адаптивной. Сейчас работаю над дипломным проектом: сайтом сервисного центра.',
    eyebrow_skills: 'Навыки',
    eyebrow_diploma: 'Дипломный проект', soon: 'Скоро', diploma_cap: 'Сайт сервисного центра · в работе',
    eyebrow_contacts: 'Контакты', contact_h: 'Есть идея или вопрос? Напиши мне.',
    close: 'Закрыть ✕',
    dev_desktop: 'Компьютер', dev_tablet: 'Планшет', dev_phone: 'Телефон',
    open_new: 'Открыть в новой вкладке ↗',
    wait: 'Сервер может просыпаться: если окно пустое, подожди до минуты.',
    project: 'Проект', desktop_only: 'только десктоп'
  },
  en: {
    nav_projects: 'Projects', nav_about: 'About', nav_skills: 'Skills', nav_diploma: 'Thesis', nav_contacts: 'Contact',
    write: 'Write me',
    tagline: '<strong>Frontend developer.</strong><br>I build websites with HTML, CSS and JavaScript.<br>4th-year university student.',
    search_ph: 'Search projects and technologies', search_btn: 'Search /',
    eyebrow_projects: 'Projects · click a card',
    empty: 'Nothing found. Try “jQuery” or “responsive”.',
    eyebrow_stack: 'Technologies in my projects',
    eyebrow_about: 'About me',
    about_h: 'I build websites with <mark>HTML, CSS and JavaScript</mark>, from layout to a living result.',
    about_p: 'I am a 4th-year student of information technologies at Moscow Polytech. I build landing pages, multi-page websites and small interactive apps, work with libraries and practise responsive layout. Right now I am working on my thesis project: a website for a service center.',
    eyebrow_skills: 'Skills',
    eyebrow_diploma: 'Thesis project', soon: 'Soon', diploma_cap: 'Service center website · in progress',
    eyebrow_contacts: 'Contact', contact_h: 'Got an idea or a question? Write to me.',
    close: 'Close ✕',
    dev_desktop: 'Desktop', dev_tablet: 'Tablet', dev_phone: 'Phone',
    open_new: 'Open in a new tab ↗',
    wait: 'The server may be waking up: if the window is empty, wait up to a minute.',
    project: 'Project', desktop_only: 'desktop only'
  }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = window.matchMedia('(hover: none)').matches;

// ================= язык =================
let lang = 'ru';
try {
  const saved = localStorage.getItem('flim-lang');
  if (saved === 'en' || saved === 'ru') lang = saved;
  else if ((navigator.language || '').toLowerCase().indexOf('ru') !== 0) lang = 'en';
} catch (e) { /* без хранилища работаем в памяти */ }

const t = (k) => I18N[lang][k];
const word = (w) => (STACK_WORDS[w] ? STACK_WORDS[w][lang] : w);
const pick = (v) => (typeof v === 'string' ? v : v[lang]);

function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$('#lang button').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  // карточки
  PROJECTS.forEach((p, i) => {
    const cap = document.querySelector(`.card[data-id="${p.id}"] figcaption`);
    if (cap) cap.innerHTML = `<span class="num">0${i + 1}</span>${p.title[lang]} · ${p.stack.slice(0, 3).map(word).join(' ')}`;
    const card = document.querySelector(`.card[data-id="${p.id}"]`);
    if (card) {
      card.dataset.search = (p.title.ru + ' ' + p.title.en + ' ' + p.stack.map((s) => s + ' ' + word(s)).join(' ')).toLowerCase();
      card.setAttribute('aria-label', `${t('project')}: ${p.title[lang]}`);
    }
  });
  $('#skillList').innerHTML = SKILLS.map((s) => `<li>${pick(s)}</li>`).join('');
  const half = MARQUEE.map((w) => `<span>${word(w)}</span>`).join('');
  $('#run').innerHTML = half + half;
  if (current) fillModal(current);
  // новые узлы с маркером, если блок уже показан
  $$('.reveal.in mark').forEach((m) => m.classList.add('in'));
}
$('#lang').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem('flim-lang', lang); } catch (err) {}
  applyLang();
});

// ================= карточки =================
const cards = $('#cards');
PROJECTS.forEach((p) => {
  const fig = document.createElement('figure');
  fig.className = `card reveal ${p.cls}`;
  fig.dataset.id = p.id;
  fig.tabIndex = 0;
  fig.setAttribute('role', 'button');
  fig.style.transitionDelay = `${PROJECTS.indexOf(p) * 90}ms`;
  fig.innerHTML = `
    <div class="float">
      <div class="thumb"><iframe src="${p.url}" title="" loading="lazy" tabindex="-1" aria-hidden="true"></iframe></div>
      <figcaption></figcaption>
    </div>`;
  cards.appendChild(fig);
});

// масштаб миниатюр: окно 1440x900 вписывается в карточку
const DESKTOP_W = 1440;
const DESKTOP_H = 900;
function fitThumbs() {
  $$('.thumb iframe').forEach((f) => {
    const w = f.parentElement.clientWidth;
    if (w) f.style.transform = `scale(${w / DESKTOP_W})`;
  });
}
window.addEventListener('resize', fitThumbs);

// наклон карточки за курсором
if (!coarse && !reduced) {
  cards.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const card = e.target.closest('.card');
    if (!card) return;
    const thumb = card.querySelector('.thumb');
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    thumb.style.transform = `perspective(800px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) rotate(${px * 1.6}deg)`;
  });
  cards.addEventListener('pointerout', (e) => {
    const card = e.target.closest('.card');
    if (card && !card.contains(e.relatedTarget)) card.querySelector('.thumb').style.transform = '';
  });
}

// ================= поиск =================
const search = $('#search');
search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  let shown = 0;
  $$('#cards .card').forEach((c) => {
    const ok = !q || c.dataset.search.includes(q);
    c.classList.toggle('hidden', !ok);
    if (ok) shown++;
  });
  $('#empty').hidden = shown > 0;
  fitThumbs();
});
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== search && $('#modal').hidden) {
    e.preventDefault();
    search.focus();
  }
});

// ================= окно проекта =================
let current = null;
let device = '100%';

function fillModal(p) {
  const i = PROJECTS.indexOf(p);
  $('#mTag').textContent = `${t('project')} 0${i + 1}` + (p.adaptive ? '' : ` · ${t('desktop_only')}`);
  $('#mTitle').textContent = p.title[lang];
  $('#mDesc').textContent = p.desc[lang];
  $('#mStack').innerHTML = p.stack.map((s) => `<li>${word(s)}</li>`).join('');
}

function layoutFrame() {
  const frame = $('#mFrame');
  const wrap = document.querySelector('.frame-wrap');
  if (device === '100%') {
    // «Компьютер»: окно 1440px, уменьшенное под размер модалки
    const k = Math.min(1, wrap.clientWidth / DESKTOP_W);
    frame.style.width = DESKTOP_W + 'px';
    frame.style.maxWidth = 'none';
    frame.style.transition = 'none';
    frame.style.height = DESKTOP_H + 'px';
    frame.style.minHeight = '0';
    frame.style.transform = `scale(${k})`;
    frame.style.transformOrigin = 'top left';
    wrap.style.display = 'block';
    wrap.style.overflow = 'hidden';
    wrap.style.height = Math.round(DESKTOP_H * k) + 'px';
  } else {
    ['maxWidth', 'transition', 'height', 'minHeight', 'transform', 'transformOrigin'].forEach((p) => { frame.style[p] = ''; });
    wrap.style.display = '';
    wrap.style.overflow = '';
    wrap.style.height = '';
    frame.style.width = device;
  }
}

function setDevice(width) {
  device = width;
  $$('.dev').forEach((b) => b.classList.toggle('active', b.dataset.w === width));
  layoutFrame();
}

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  current = p;
  fillModal(p);
  $('#mOpen').href = p.url;
  $('#mWait').hidden = !p.slow;
  $('#devices').hidden = !p.adaptive;
  $('#mFrame').src = p.url;
  $('#modal').hidden = false;
  document.body.style.overflow = 'hidden';
  setDevice('100%');
}

function closeModal() {
  $('#modal').hidden = true;
  $('#mFrame').src = 'about:blank';
  document.body.style.overflow = '';
  current = null;
}

cards.addEventListener('click', (e) => {
  const c = e.target.closest('.card');
  if (c) openProject(c.dataset.id);
});
cards.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    openProject(e.target.dataset.id);
  }
});
$('#devices').addEventListener('click', (e) => {
  const b = e.target.closest('.dev');
  if (b) setDevice(b.dataset.w);
});
$('#mClose').addEventListener('click', closeModal);
$('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });
window.addEventListener('resize', () => { if (!$('#modal').hidden) layoutFrame(); });

// ================= печать заголовка =================
function typeWordmark() {
  const full = 'Portfolio\nby Viktoriia';
  const el = $('#typed');
  if (reduced) { el.textContent = full; return; }
  let i = 0;
  el.classList.add('typing');
  const timer = setInterval(() => {
    i++;
    el.textContent = full.slice(0, i);
    if (i >= full.length) {
      clearInterval(timer);
      setTimeout(() => el.classList.remove('typing'), 900);
    }
  }, 65);
}

// ================= появление блоков при скролле =================
function setupReveal() {
  const items = $$('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        en.target.querySelectorAll('mark').forEach((m) => m.classList.add('in'));
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => io.observe(el));
}

// ================= жёлтый маркер за курсором =================
function setupTrail() {
  if (reduced || coarse) { $('#trail').remove(); return; }
  const cv = $('#trail');
  const ctx = cv.getContext('2d');
  let pts = [];
  let running = false;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function size() {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener('resize', size);

  const LIFE = 900;
  function draw(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pts = pts.filter((p) => now - p.t < LIFE);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#fecc33';
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const life = Math.max(0, 1 - (now - b.t) / LIFE);
      ctx.lineWidth = 3 + 21 * life;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    if (pts.length > 1) requestAnimationFrame(draw);
    else { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (!running) { running = true; requestAnimationFrame(draw); }
  }, { passive: true });
}

// ================= меню: подсветка текущего раздела =================
function setupScrollSpy() {
  const pairs = [...$$('.nav a')]
    .map((a) => [a, document.querySelector(a.getAttribute('href'))])
    .filter((p) => p[1]);
  let busy = false;
  function update() {
    busy = false;
    let active = null;
    pairs.forEach(([a, sec]) => { if (sec.getBoundingClientRect().top <= innerHeight * 0.4) active = a; });
    // в самом низу страницы подсвечиваем последний раздел
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) active = pairs[pairs.length - 1][0];
    pairs.forEach(([a]) => a.classList.toggle('active', a === active));
  }
  window.addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

// ================= запуск =================
applyLang();
fitThumbs();
setupReveal();
typeWordmark();
setupTrail();
setupScrollSpy();
