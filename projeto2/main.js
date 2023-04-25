const buttons = document.querySelectorAll('.tecla');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let sound = 'som_' + this.classList[1];

    document.getElementById(sound).play();
  });
}