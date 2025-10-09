// Section Switching with Smooth Transition
const navItems = document.querySelectorAll('.nav ul li');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.getAttribute('data-target');

    // Update active nav
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Switch section visibility
    sections.forEach(sec => {
      if (sec.id === target) {
        sec.classList.add('active');
        sec.scrollTop = 0;
      } else {
        sec.classList.remove('active');
      }
    });
  });
});
