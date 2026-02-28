/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

/* ── TYPED EFFECT ── */
const words = ['Developer', 'UI/Ux Designer', 'Fullstack Dev', 'Freelancer'];
let wi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const word = words[wi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

/* ── SCROLL REVEAL + SKILL BARS ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

/* ── CONTACT FORM ── */
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent      = '✓ Message envoyé !';
  btn.style.background = '#2a7a3b';
  setTimeout(() => {
    btn.textContent      = original;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}