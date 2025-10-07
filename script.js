// Reveal animation on scroll
const reveals=document.querySelectorAll('.reveal');
function revealOnScroll(){
  const windowHeight=window.innerHeight;
  reveals.forEach(r=>{
    const top=r.getBoundingClientRect().top;
    if(top<windowHeight-80)r.classList.add('visible');
  });
}
window.addEventListener('scroll',revealOnScroll);
revealOnScroll();

// Dark mode toggle
const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});
console.log('Enhanced portfolio loaded!');
