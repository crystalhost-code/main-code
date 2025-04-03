const scrollLinks = document.querySelectorAll('.scroll');
          scrollLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
              event.preventDefault();
              const target = document.querySelector(link.getAttribute('href'));
              const offsetTop = target.offsetTop;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            });
          });