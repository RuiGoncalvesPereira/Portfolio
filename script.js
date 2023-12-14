window.addEventListener('scroll', function() {
    var navbar = document.querySelector('ul'); // replace 'ul' with the selector for your navbar
    if (window.pageYOffset === 0) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });

  window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer'); // replace 'footer' with the selector for your footer
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) { // 50 is the threshold
      footer.classList.add('transparent');
    } else {
      footer.classList.remove('transparent');
    }
  });