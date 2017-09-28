const boxes = [document.getElementById('1'),
              document.getElementById('2'),
              document.getElementById('3'),
              document.getElementById('4'),
              document.getElementById('5'),
              document.getElementById('6'),
              document.getElementById('7'),
              document.getElementById('8'),
              document.getElementById('9')]

const markers = [document.getElementById('mark1'),
              document.getElementById('mark2'),
              document.getElementById('mark3'),
              document.getElementById('mark4'),
              document.getElementById('mark5'),
              document.getElementById('mark6'),
              document.getElementById('mark7'),
              document.getElementById('mark8'),
              document.getElementById('mark9')]

var jugardorActual = 1;
function inicarJuego() {
  boxes[0].addEventListener('click',handler);
  boxes[1].addEventListener('click',handler);
  boxes[2].addEventListener('click',handler);
  boxes[3].addEventListener('click',handler);
  boxes[4].addEventListener('click',handler);
  boxes[5].addEventListener('click',handler);
  boxes[6].addEventListener('click',handler);
  boxes[7].addEventListener('click',handler);
  boxes[8].addEventListener('click',handler);
}

var handler = function putMark(e) {
  console.log(e);
  if (jugardorActual===1)
    markers[e.target.id-1].classList.toggle('icon-cross')
  else
    markers[e.target.id-1].classList.toggle('icon-radio-unchecked')

  boxes[e.target.id-1].removeEventListener('click', handler)
  jugardorActual = jugardorActual===1 ? 2 : 1
  console.log(jugardorActual);
}

inicarJuego()
