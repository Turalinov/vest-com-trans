(function() {

  const menuToggle = document.querySelector('.menu__toggle');

  if (menuToggle) {

    const menu = document.querySelector('.menu');
    const body = document.querySelector('body')

    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('menu--opened')
      body.classList.toggle('body--locked')
    })




  const menuLinks = document.querySelectorAll('.menu__link');

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {


      let blockId = menuLink.getAttribute('href')

      if (blockId.indexOf('#') === 0) {
        e.preventDefault();


        const el = document.querySelector(blockId);

        if(el) {
          el.scrollIntoView({
          behavior: 'smooth',
        })

        }
      } else {

      }


      if (menu.classList.contains('menu--opened')) {
            menu.classList.remove('menu--opened')
            body.classList.remove('body--locked')
      }
    })
  })





  }





})();
