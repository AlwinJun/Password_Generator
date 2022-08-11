const span1 = document.querySelector('#span-1');
const span2 = document.querySelector('#span-2');
const paragraph = document.querySelector('p');
let spanFilled = false;

//Set of letters,char and number
const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',

  '@',
  '#',
  '$',
];

function generatePassword() {
  if (spanFilled == true) {
    span1.textContent = '';
    span2.textContent = '';

    spanFilled = false;
  }

  if (spanFilled == false) {
    for (let i = 0; i < 15; i++) {
      paragraph.style.color = 'white';

      //generate random pass for span1
      let random1 = Math.floor(Math.random() * characters.length);
      //store the generated random
      span1.textContent += characters[random1];

      //generate random pass for span2
      let random2 = Math.floor(Math.random() * characters.length);
      //store the generated random2
      span2.textContent += characters[random2];
    }

    spanFilled = true;
  }
}
