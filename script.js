(
echo // Smooth scrolling
echo document.querySelectorAll('a[href^="#"]').forEach(link=>{
echo   link.addEventListener('click',e=>{
echo     e.preventDefault();
echo     document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
echo   });
echo });
) > script.js
