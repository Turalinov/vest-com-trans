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
  const header = document.querySelector('.header');

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {


      let blockId = menuLink.getAttribute('href')

      if (blockId.indexOf('#') === 0) {
        e.preventDefault();

        const element = document.querySelector(blockId);


        if(element != null ) {

          const offset = header.clientHeight;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementReact = element.getBoundingClientRect().top;
          const elementPosition = elementReact - bodyRect;
          const offsetPositon = elementPosition - offset;

          window.scrollTo({
            top: offsetPositon,
            behavior: 'smooth',
          })

        } else {

          transition(blockId)

          function transition(blockId){
            localStorage.setItem('blockId', blockId)
            document.location.href = window.location.origin;
          }

        }
      }


      if (menu.classList.contains('menu--opened')) {
            menu.classList.remove('menu--opened')
            body.classList.remove('body--locked')
      }
    })
  })





  }


  document.addEventListener("DOMContentLoaded", ready);

  function ready() {
    console.log('ready dom');
    let blockId = localStorage.getItem('blockId')

    if (blockId != null) {
    const header = document.querySelector('.header');

        const element = document.querySelector(blockId);


        if(element != null ) {

          const offset = header.clientHeight;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementReact = element.getBoundingClientRect().top;
          const elementPosition = elementReact - bodyRect;
          const offsetPositon = elementPosition - offset;

          window.scrollTo({
            top: offsetPositon,
            behavior: 'smooth',
          })

        }
    }

    setTimeout(() => {
      localStorage.removeItem('blockId')
    }, 1000);
  }




})();
