window.addEventListener('scroll', function() {
    var navbar = document.querySelector('ul'); // replace 'ul' with the selector for your navbar
    if (window.pageYOffset === 0) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });