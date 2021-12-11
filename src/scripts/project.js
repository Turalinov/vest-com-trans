;(function(){
  console.log('prompt');

  const promptBtn = document.querySelector('.project__prompt-btn');
  const prompt = document.querySelector('.project__prompt');

  promptBtn.addEventListener('click', function(e) {
    prompt.classList.toggle('_active')

    if(prompt.classList.contains('_active')) {
      promptBtn.textContent = 'x';
    } else {
      promptBtn.textContent = '?';
    }
  })



})();
