function move(x) {
    document.getElementById("scroll").scrollBy({
        top: 0,
        right: x,
        behavior: "smooth"
    })
}

function move(x) {
    document.getElementById("scroll").scrollBy({
        top: 0,
        left: x,
        behavior: "smooth"
    })
}

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menuItems = document.querySelector('.menu-item');

    hamburger.addEventListener('click', function() {
      closeIcon.style.display = 'block';
      hamburger.style.display = 'none';
      menuItems.style.display = 'block'
    });

    closeIcon.addEventListener('click', function() {
      closeIcon.style.display = 'none';
      hamburger.style.display = 'block';
      menuItems.style.display = 'none'
    });
  });

