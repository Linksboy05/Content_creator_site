// JavaScript Document

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle.addEventListener('change', () => {
    if (navToggle.checked) mainNav.style.display = 'flex';
    else mainNav.style.display = '';
  });

  // Smooth scroll
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection){
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      if(navToggle.checked) {
        navToggle.checked = false;
        mainNav.style.display = '';
      }
    });
  });

  // Footer year
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Highlight active nav link
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 70;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.main-nav a[href="#${id}"]`);
      if(section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos){
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });

  // Fade-in sections
  const fadeSections = document.querySelectorAll('.section, .hero');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, { threshold: 0.1 });
  fadeSections.forEach(section => observer.observe(section));

  // VOD hover
  const vodCards = document.querySelectorAll('.vod.card');
  vodCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('vod-hover'));
    card.addEventListener('mouseleave', () => card.classList.remove('vod-hover'));
  });

  // Donation button pulse
  const donationBtns = document.querySelectorAll('.donation-buttons .btn');
  donationBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('pulse'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('pulse'));
  });

  // Particle background
  const particleContainer = document.getElementById('particles');
  const numParticles = 80;
  for(let i = 0; i < numParticles; i++){
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animationDuration = 5 + Math.random() * 5 + 's';
    particle.style.width = 2 + Math.random() * 4 + 'px';
    particle.style.height = particle.style.width;
    particleContainer.appendChild(particle);
  }
});
