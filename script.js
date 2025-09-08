// Wait until the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Find the hamburger icon and the menu
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');

  // If both exist, add a click event to toggle menu
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      // Toggle the 'menu-open' class to show/hide menu
      menu.classList.toggle('menu-open');
    });
  }
});
