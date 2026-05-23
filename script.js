/* ============================================= */
/*   GUILHERME SWERTS — PORTFOLIO JAVASCRIPT     */
/* ============================================= */

/* ── Cursor personalizado ── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .soft-item, .exp-tag').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    follower.style.width = '48px';
    follower.style.height = '48px';
    follower.style.borderColor = 'rgba(0,212,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    follower.style.width = '32px';
    follower.style.height = '32px';
    follower.style.borderColor = 'rgba(0,212,255,0.5)';
  });
});

/* ── Particles Canvas ── */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 80;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.6 + 0.1;
    this.color = Math.random() > 0.5 ? '0,212,255' : '124,58,237';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  updateActiveNav();
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Active nav link ── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollPos >= top && scrollPos < bottom) link.classList.add('active');
      else link.classList.remove('active');
    }
  });
}

/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Trigger skill bars and education progress
      if (entry.target.classList.contains('skill-category') || entry.target.closest('.skill-category')) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
      }
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// Trigger skill bars on skill-category reveal
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
        entry.target.querySelectorAll('.edu-progress-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
      }, 300);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category, .edu-card').forEach(el => skillObserver.observe(el));

/* ── Typed Title ── */
const titles = [
  'Full Stack Developer',
  'React.js Specialist',
  '.NET Expert',
  'AWS Developer',
  'TypeScript Dev'
];
let titleIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typed-title');

function typeEffect() {
  const current = titles[titleIdx];
  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 80);
}
setTimeout(typeEffect, 800);

/* ── Counter animation ── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
    else el.textContent = Math.floor(current);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ── Soft skills stagger animation ── */
const softObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.soft-item');
      items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.transition = 'all 0.4s cubic-bezier(0.2,0.8,0.3,1)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 60);
      });
      softObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const softGrid = document.querySelector('.soft-grid');
if (softGrid) softObserver.observe(softGrid);

/* ── Contact Form ── */
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<span>Enviando...</span>';
    btn.disabled = true;
    setTimeout(() => {
      successMsg.style.display = 'block';
      form.reset();
      btn.innerHTML = '<span>Enviar Mensagem</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.disabled = false;
    }, 1200);
  });
}

/* ── Parallax hero ── */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bg-image');
  if (hero) {
    const scrollY = window.scrollY;
    hero.style.transform = `translateY(${scrollY * 0.4}px)`;
  }
});

/* ── Smooth entrance on load ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
    setTimeout(() => el.classList.add('revealed'), 100);
  });
});

// Also trigger immediately after full load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
    el.classList.add('revealed');
  });
});
