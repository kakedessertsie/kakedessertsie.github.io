const menuBtn   = document.getElementById('menu-btn');
const navLinks  = document.getElementById('nav-links');

// toggle both the button animation and the panel
function toggleMenu() {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);

// close menu when any nav link is tapped
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) toggleMenu();
  })
);
