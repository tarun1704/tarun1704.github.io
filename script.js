// Smooth scrolling
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Active state
    document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Close mobile nav
    const navUL = document.querySelector('.nav-menu ul');
    if(navUL.classList.contains('show')) navUL.classList.remove('show');
  });
});

// Mobile nav toggle
document.querySelector('.mobile-nav-toggle').addEventListener('click', ()=>{
  document.querySelector('.nav-menu ul').classList.toggle('show');
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', ()=>{
  const scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    if(scrollY >= top && scrollY <= bottom) sec.classList.add('visible');
  });
});

// Animate skill bars when in viewport
const skills = document.querySelectorAll('.bar-fill');
const skillSection = document.querySelector('#skills');
window.addEventListener('scroll', () => {
  const pos = skillSection.getBoundingClientRect().top;
  if(pos < window.innerHeight - 50){
    skills.forEach(skill => skill.style.width = skill.dataset.width);
  }
});
