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

