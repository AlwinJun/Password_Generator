// import './style.css';

// const generateButton = document.querySelector('#btn') as HTMLButtonElement;
// const span1 = document.querySelector('#span-1') as HTMLSpanElement;
// const span2 = document.querySelector('#span-2') as HTMLSpanElement;
// const paragraph = document.querySelector('p') as HTMLParagraphElement;

// //Set of letters,char and number
// const characters: String[] = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
//   '0',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',

//   '@',
//   '#',
//   '$',
// ];

// function generatePassword(): void {
//   let password1: string = '';
//   let password2: string = '';

//   for (let i: number = 0; i < 10; i++) {
//     paragraph.style.color = 'white';

//     const random1: number = Math.floor(Math.random() * characters.length);
//     //store the generated random
//     password1 += characters[random1];
//     span1.textContent = password1;

//     const random2: number = Math.floor(Math.random() * characters.length);
//     //store the generated random2
//     password2 += characters[random2];
//     span2.textContent = password2;
//   }
// }

// async function copyOnClick(e) {
//   const currentEl = e.target;
//   const copyText = currentEl.textContent;
//   const copyMessage = currentEl.nextElementSibling;

//   const copied = await navigator.clipboard.writeText(copyText);

//   copyMessage.classList.add('show');
//   copyMessage.textContent = 'Copied to clipboard';

//   const hideMessage = setTimeout(() => {
//     copyMessage.textContent = '';
//     copyMessage.classList.remove('show');
//   }, 1000);
// }

// generateButton.addEventListener('click', generatePassword);
// span1.addEventListener('click', copyOnClick);
// span2.addEventListener('click', copyOnClick);

import './style.css';

const generateButton = document.querySelector('#btn') as HTMLButtonElement;
const span1 = document.querySelector('#span-1') as HTMLSpanElement;
const span2 = document.querySelector('#span-2') as HTMLSpanElement;
const paragraph = document.querySelector('p') as HTMLParagraphElement;

// Password combinations char
const characters: string[] = [
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
];

const passwordLength = 10;

function getRandomChar(): string {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword(length: number): string {
  let password: string = '';

  for (let i: number = 0; i < length; i++) {
    //store the generated random
    password += getRandomChar();
  }

  return password;
}

// Function to update the text content and color of a span element
function updateSpan(span: HTMLSpanElement, text: string): void {
  span.textContent = `${text}`;
}

async function copyOnClick(e: Event) {
  const currentEl = e.currentTarget as HTMLSpanElement;
  const copyText: string = currentEl.textContent!;
  const copyMessage = currentEl.nextElementSibling as HTMLParagraphElement;

  try {
    await navigator.clipboard.writeText(copyText);
    copyMessage.classList.add('show');
    copyMessage.textContent = 'Copied to clipboard';
  } catch (error) {
    console.error(error);
  }

  setTimeout(() => {
    copyMessage.textContent = '';
    copyMessage.classList.remove('show');
  }, 1000);
}

function generatePasswords(): void {
  paragraph.style.color = 'white';

  const password1: string = generatePassword(passwordLength);
  const password2: string = generatePassword(passwordLength);

  updateSpan(span1, password1);
  updateSpan(span2, password2);
}

generateButton.addEventListener('click', generatePasswords);
span1.addEventListener('click', copyOnClick);
span2.addEventListener('click', copyOnClick);

