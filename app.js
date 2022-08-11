const span1 = document.querySelector('#span-1');
const span2 = document.querySelector('#span-2');
const paragraph = document.querySelector('p');

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
  let password1 = '';
  let password2 = '';

  for (let i = 0; i < 15; i++) {
    paragraph.style.color = 'white';

    //generate random pass for span1
    let random1 = Math.floor(Math.random() * characters.length);
    //store the generated random
    password1 += characters[random1];
    span1.textContent = password1;

    //generate random pass for span2
    let random2 = Math.floor(Math.random() * characters.length);
    //store the generated random2
    password2 += characters[random1];
    span2.textContent = password2;
  }
}
