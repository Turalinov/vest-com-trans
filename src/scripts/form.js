(function() {
  console.log('contacts form');

  const form = document.querySelector('.form__elem');

  if( form ) {
  form.addEventListener('submit', function(e) {
    //отменяем действие по умолчанию
    e.preventDefault();


    //получаем кнопку
    let btn = form.querySelector('.form__btn'),
        error = form.querySelector('.form__error')

    //получаем данные
    let inputs = form.elements;

    let obj = {};

    for (let i = 0; i < inputs.length; i++) {

      let input = inputs.item(i);
      let label = input?.previousElementSibling?.textContent;
      let name  = input.name;
      let value = String(input.value).trim()
      let tagName = input.tagName.toLowerCase();
      let type = input.type;

      //прописать условие о пользовательском соглашении

      if ( type == "checkbox") {
          continue;
      }

      if (tagName == 'button') {
          continue;
      }

      if (value == "")  {
        error.textContent = `Заполните поле "${label}"`;
        error.classList.add('_active')
        return false;
      } else {
        error.textContent = '';
        error.classList.remove('_active')
        obj[name] = [value, label];
      }

      // console.log(obj);

        // company_name: "dsds"
        // cubature: "dsdsd"
        // departure_date: "sdsds"
        // departure_station: "dsds"
        // destination_station: "dsd"
        // name: "dsdsd"
        // phone: "sdsd"
        // tonnage: "dsds"
    }



    async function postData(url = '', data = {}) {

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });


      if(response.ok) {
        let json = await response.json();
        console.log(json);
        return json;
      } else {
        alert('Ошибка HTTP: ' + response.status + 'Попробуйте еще раз позднее.');
      }
    }
    // /wp-content/themes/{theme}/action-form.php
    postData('action-form.php', {obj})
    .then((data) => {
      if(data.status) {
        this.reset();
        alert('Thank you for contacting us, we will definitely contact you');
      }
    });

    console.log('форма отправлена');
  })

  }

})()
