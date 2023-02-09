// Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// Event to copy the password to clipboard
clipboardEl.addEventListener("click", () => {
  if (resultEl.textContent) {
    navigator.clipboard.writeText(resultEl.textContent).then(function () {
      console.log("Password Copied successfully!");
    });
  } else {
    console.error("Password Textarea is Empty!");
  }
});

// Event to check requirement of the password and generating it by calling "generatePassword()" function
generateEl.addEventListener("click", () => {
  // Password length must between 4 and 20
  let length = lengthEl.value >= 4 && lengthEl.value <= 20 ? lengthEl.value : 0;
  let isLowerChecked = lowercaseEl.checked;
  let isUpperChecked = uppercaseEl.checked;
  let isNumberChecked = numbersEl.checked;
  let isSymbolChecked = symbolsEl.checked;

  let finalPassword = generatePassword(
    isLowerChecked,
    isUpperChecked,
    isNumberChecked,
    isSymbolChecked,
    length
  );
  // Displaying generated password as RESULT
  resultEl.textContent = finalPassword;
});

// Final check of the password requirements and its length
function generatePassword(lower, upper, number, symbol, length) {
  let randomFunc = [];
  let finalPassArr = [];
  if (lower == true) randomFunc.push(getRandomLower);
  if (upper == true) randomFunc.push(getRandomUpper);
  if (number == true) randomFunc.push(getRandomNumber);
  if (symbol == true) randomFunc.push(getRandomSymbol);
  for (let i = 0; i < length; i++) {
    finalPassArr.push(
      randomFunc[Math.floor(Math.random() * randomFunc.length)]()
    );
  }
  return finalPassArr.join("");
}

// Function to get random Lower Alphabet
function getRandomLower() {
  const lowerAlphas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return lowerAlphas[Math.floor(Math.random() * lowerAlphas.length)];
}

// Function to get random Upper Alphabet
function getRandomUpper() {
  const upperAlphas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return upperAlphas[Math.floor(Math.random() * upperAlphas.length)];
}

// Function to get random Number
function getRandomNumber() {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// Function to get random Symbol
function getRandomSymbol() {
  const symbols = ["!", "@", "#", "$"];
  return symbols[Math.floor(Math.random() * symbols.length)];
}
