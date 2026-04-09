/* ══════════════════════════════════════════
   SUPPORT / INVOLVEMENT SECTION — support.js
══════════════════════════════════════════ */

// ── Modal helpers ──────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function backdropClose(e, el) {
  if (e.target === el) closeModal(el.id);
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach(function (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// ── Copy account number ────────────────────
function copyAcct() {
  var num = document.getElementById('acct-number').textContent.trim();
  navigator.clipboard.writeText(num).then(function () {
    var btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(function () {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fas fa-copy"></i> Copy Account Number';
    }, 2500);
  });
}

// ── Partners carousel pause on hover ──────
document.addEventListener('DOMContentLoaded', function () {
  var partnersTrack    = document.getElementById('partnersTrack');
  var partnersCarousel = document.querySelector('.partners-carousel');

  if (partnersCarousel && partnersTrack) {
    partnersCarousel.addEventListener('mouseenter', function () {
      partnersTrack.style.animationPlayState = 'paused';
    });
    partnersCarousel.addEventListener('mouseleave', function () {
      partnersTrack.style.animationPlayState = 'running';
    });
  }

  // ── Intersection observer for fade-in elements ──
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // ── Smooth scroll for anchor links ────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      }
    });
  });
});