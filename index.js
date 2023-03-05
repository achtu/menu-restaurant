const buttons = [...document.querySelectorAll('.btn')];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.btn.active').classList.remove('active');
    button.classList.add('active');
  })
})
function openInfo(infoName) {
    var i;
    var x = document.getElementsByClassName("info");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(infoName).style.display = "block";
  }