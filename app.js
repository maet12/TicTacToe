const boxes = [document.getElementById('box1'),
              document.getElementById('box2'),
              document.getElementById('box3'),
              document.getElementById('box4'),
              document.getElementById('box5'),
              document.getElementById('box6'),
              document.getElementById('box7'),
              document.getElementById('box8'),
              document.getElementById('box9')]

const markers = [document.getElementById('mark1'),
              document.getElementById('mark2'),
              document.getElementById('mark3'),
              document.getElementById('mark4'),
              document.getElementById('mark5'),
              document.getElementById('mark6'),
              document.getElementById('mark7'),
              document.getElementById('mark8'),
              document.getElementById('mark9')]


  boxes[0].addEventListener('click', () => putMark(1));
  boxes[1].addEventListener('click', () => putMark(2));
  boxes[2].addEventListener('click', () => putMark(3));
  boxes[3].addEventListener('click', () => putMark(4));
  boxes[4].addEventListener('click', () => putMark(5));
  boxes[5].addEventListener('click', () => putMark(6));
  boxes[6].addEventListener('click', () => putMark(7));
  boxes[7].addEventListener('click', () => putMark(8));
  boxes[8].addEventListener('click', () => putMark(9));


  function putMark(num) {
    markers[num-1].classList.toggle('icon-cross')
    boxes[num-1].removeEventListener('click',() => putMark(num))
  }
