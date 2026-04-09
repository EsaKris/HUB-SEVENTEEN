/* ============================================================
   SDG Hero Carousel — Complete JS
   17 UN Sustainable Development Goals
   ============================================================ */

const SDGs = [
  {
    n: 1,
    title: "No Poverty",
    desc: "End poverty in all its forms everywhere. Implement social protection systems, ensure equal rights to economic resources, and build resilience for the most vulnerable communities.",
    color: "#E5243B",
    icon: "🏘️",
    cta: "End Poverty Now",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 2,
    title: "Zero Hunger",
    desc: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture for all people in all communities across the world.",
    color: "#DDA63A",
    icon: "🌾",
    cta: "Support Food Security",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 3,
    title: "Good Health & Well-Being",
    desc: "Ensure healthy lives and promote well-being for all at all ages through universal healthcare, disease prevention, and access to safe medicines.",
    color: "#4C9F38",
    icon: "💊",
    cta: "Advance Good Health",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 4,
    title: "Quality Education",
    desc: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all people regardless of gender, ethnicity, or economic status.",
    color: "#C5192D",
    icon: "📚",
    cta: "Champion Education",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 5,
    title: "Gender Equality",
    desc: "Achieve gender equality and empower all women and girls by eliminating all forms of discrimination, violence, and harmful practices worldwide.",
    color: "#FF3A21",
    icon: "⚡",
    cta: "Empower Women",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 6,
    title: "Clean Water & Sanitation",
    desc: "Ensure availability and sustainable management of water and sanitation for all, protecting water quality and restoring water-related ecosystems.",
    color: "#26BDE2",
    icon: "💧",
    cta: "Protect Water Access",
    img: "https://17globalgoals.com/wp-content/uploads/2019/11/clean-water1.jpg"
  },
  {
    n: 7,
    title: "Affordable & Clean Energy",
    desc: "Ensure access to affordable, reliable, sustainable, and modern energy for all through expanded renewable energy infrastructure and investment.",
    color: "#FCC30B",
    icon: "☀️",
    cta: "Explore Clean Energy",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 8,
    title: "Decent Work & Economic Growth",
    desc: "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all people everywhere.",
    color: "#A21942",
    icon: "💼",
    cta: "Grow Economies",
    img: "https://res.cloudinary.com/drt2tlz1j/images/c_scale,w_448,h_236,dpr_2/f_auto,q_auto/v1675869108/fn1/SustainableDevelopment8_1/SustainableDevelopment8_1.jpg?_i=AA"
  },
  {
    n: 9,
    title: "Industry, Innovation & Infrastructure",
    desc: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation for long-term economic growth.",
    color: "#FD6925",
    icon: "🏗️",
    cta: "Build Infrastructure",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 10,
    title: "Reduced Inequalities",
    desc: "Reduce inequality within and among countries by promoting social, economic, and political inclusion for all people regardless of age, disability, or origin.",
    color: "#DD1367",
    icon: "⚖️",
    cta: "Reduce Inequality",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 11,
    title: "Sustainable Cities & Communities",
    desc: "Make cities and human settlements inclusive, safe, resilient, and sustainable through better urban planning and community participation.",
    color: "#FD9D24",
    icon: "🏙️",
    cta: "Build Better Cities",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 12,
    title: "Responsible Consumption & Production",
    desc: "Ensure sustainable consumption and production patterns to reduce waste, minimize pollution, and manage natural resources efficiently.",
    color: "#BF8B2E",
    icon: "♻️",
    cta: "Consume Responsibly",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 13,
    title: "Climate Action",
    desc: "Take urgent action to combat climate change and its impacts through meaningful emission reductions, renewable energy, and community adaptation strategies.",
    color: "#3F7E44",
    icon: "🌍",
    cta: "Act on Climate",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 14,
    title: "Life Below Water",
    desc: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development and to protect marine biodiversity.",
    color: "#0A97D9",
    icon: "🌊",
    cta: "Protect Our Oceans",
    img: "https://i0.wp.com/bilt.online/wp-content/uploads/2022/09/School-of-fish-underwater.jpg?ssl=1"
  },
  {
    n: 15,
    title: "Life on Land",
    desc: "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, and halt biodiversity loss worldwide.",
    color: "#56C02B",
    icon: "🌳",
    cta: "Protect Biodiversity",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 16,
    title: "Peace, Justice & Strong Institutions",
    desc: "Promote peaceful and inclusive societies, provide access to justice for all, and build accountable, effective institutions at all levels.",
    color: "#00689D",
    icon: "🕊️",
    cta: "Build Peace",
    img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=1600&q=85&auto=format&fit=crop"
  },
  {
    n: 17,
    title: "Partnerships for the Goals",
    desc: "Strengthen the means of implementation and revitalize the global partnership for sustainable development through finance, technology, and capacity-building.",
    color: "#19486A",
    icon: "🤝",
    cta: "Join the Partnership",
    img: "https://thecsrjournal.in/wp-content/uploads/2023/05/Partnership.jpgp"
  }
];

/* ============================================================
   STATE
   ============================================================ */
let current = 0;
let isPlaying = true;
let rotateTimer = null;
let progressTimer = null;
let progressWidth = 0;
const ROTATE_MS = 14000;
const TOTAL = SDGs.length;

/* ============================================================
   HELPERS
   ============================================================ */
function pad(n) {
  return n.toString().padStart(2, '0');
}

/* ============================================================
   BUILD SLIDES
   ============================================================ */
function buildSlides() {
  const container = document.getElementById('carouselSlides');
  SDGs.forEach((sdg, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${sdg.img}')`;

    slide.innerHTML = `
      <div class="slide-overlay"></div>
      <div class="slide-color-bar" style="background:${sdg.color}"></div>
      <div class="sdg-number-display">${pad(sdg.n)}</div>
      <div class="slide-content">
        <div class="sdg-badge" style="background:${sdg.color}cc; border: 1.5px solid ${sdg.color};">
          <div class="sdg-badge-icon">${sdg.icon}</div>
          SDG ${pad(sdg.n)}
        </div>
        <div class="slide-text-wrap">
          <h2>${sdg.title}</h2>
          <p>${sdg.desc}</p>
          <a class="cta-button" href="#" style="border-color: ${sdg.color}88; --hover-bg: ${sdg.color};">${sdg.cta} &rarr;</a>
        </div>
      </div>
    `;
    container.appendChild(slide);
  });
}

/* ============================================================
   BUILD CIRCULAR NAV (17 dots around a circle)
   ============================================================ */
function buildCircularNav() {
  const wrap = document.getElementById('navDotsWrap');
  const navRadius = 138; // px from center — match ring-svg r="148" minus a bit

  SDGs.forEach((sdg, i) => {
    // Evenly spread 17 items; start from top (-90 deg offset)
    const angleDeg = (i / TOTAL) * 360 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const tx = Math.round(navRadius * Math.cos(angleRad));
    const ty = Math.round(navRadius * Math.sin(angleRad));

    const dot = document.createElement('button');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('data-index', i);
    dot.setAttribute('data-label', `SDG ${sdg.n}: ${sdg.title}`);
    dot.setAttribute('aria-label', `Go to SDG ${sdg.n}: ${sdg.title}`);
    dot.style.setProperty('--sdg-color', sdg.color);
    dot.style.setProperty('--dot-pos', `translate(${tx}px, ${ty}px)`);
    dot.style.transform = `translate(${tx}px, ${ty}px)`;
    dot.textContent = pad(sdg.n);

    dot.addEventListener('click', () => goToSlide(i));
    wrap.appendChild(dot);
  });
}

/* ============================================================
   UPDATE UI
   ============================================================ */
function updateUI() {
  const sdg = SDGs[current];

  // Slides
  document.querySelectorAll('.slide').forEach((s, i) =>
    s.classList.toggle('active', i === current)
  );

  // Nav dots
  document.querySelectorAll('.nav-dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );

  // Counters
  const padCur = pad(current + 1);
  document.getElementById('centerCur').textContent = padCur;
  document.getElementById('counterCur').textContent = padCur;

  // Center icon
  document.getElementById('centerIcon').textContent = sdg.icon;

  // Center display border color
  document.querySelector('.center-display').style.borderColor = sdg.color + '88';

  // Active ring color
  document.getElementById('activeRing').style.stroke = sdg.color;

  // Progress bar color
  document.getElementById('progressBar').style.backgroundColor = sdg.color;

  // Reset progress
  resetProgress();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function goToSlide(index) {
  current = ((index % TOTAL) + TOTAL) % TOTAL;
  updateUI();
  if (isPlaying) restartTimers();
}

function nextSlide() { goToSlide(current + 1); }
function prevSlide() { goToSlide(current - 1); }

/* ============================================================
   TIMERS & PROGRESS
   ============================================================ */
function resetProgress() {
  clearInterval(progressTimer);
  progressWidth = 0;
  const bar = document.getElementById('progressBar');
  bar.style.width = '0%';
}

function startProgress() {
  const bar = document.getElementById('progressBar');
  const increment = 100 / (ROTATE_MS / 100);
  progressTimer = setInterval(() => {
    progressWidth += increment;
    if (progressWidth >= 100) {
      progressWidth = 100;
      clearInterval(progressTimer);
    }
    bar.style.width = progressWidth + '%';
  }, 100);
}

function startAutoRotate() {
  clearInterval(rotateTimer);
  clearInterval(progressTimer);
  rotateTimer = setInterval(nextSlide, ROTATE_MS);
  startProgress();
}

function restartTimers() {
  clearInterval(rotateTimer);
  clearInterval(progressTimer);
  if (isPlaying) startAutoRotate();
}

function togglePlayPause() {
  isPlaying = !isPlaying;
  const btn = document.getElementById('pauseBtn');
  btn.innerHTML = isPlaying ? '&#9646;&#9646;' : '&#9654;';
  if (isPlaying) {
    startAutoRotate();
  } else {
    clearInterval(rotateTimer);
    clearInterval(progressTimer);
  }
}

/* ============================================================
   EVENTS
   ============================================================ */
function bindEvents() {
  document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    restartTimers();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    restartTimers();
  });

  document.getElementById('pauseBtn').addEventListener('click', togglePlayPause);

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { nextSlide(); restartTimers(); }
    if (e.key === 'ArrowLeft')  { prevSlide(); restartTimers(); }
    if (e.key === ' ') { e.preventDefault(); togglePlayPause(); }
  });

  // Touch/swipe
  let touchStartX = 0;
  const hero = document.getElementById('heroSection');

  hero.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) nextSlide(); else prevSlide();
      restartTimers();
    }
  }, { passive: true });

  // Pause on circular nav hover
  const nav = document.getElementById('circularNav');
  if (nav) {
    nav.addEventListener('mouseenter', () => {
      if (isPlaying) {
        clearInterval(rotateTimer);
        clearInterval(progressTimer);
      }
    });
    nav.addEventListener('mouseleave', () => {
      if (isPlaying) startAutoRotate();
    });
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildSlides();
  buildCircularNav();
  updateUI();
  startAutoRotate();
  bindEvents();
});