// Assignment code here
// variables for possible password
var lowercase = [
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
var uppercase = [
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
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var owasp = [
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "|",
  "/",
  "[",
  "]",
  "`",
  "~",
  "<",
  ",",
  ".",
  ">",
  "/",
  "?",
];

// define the min and max of the password length.
var min = 8;
var max = 128;

// define an empty array to contain all the chosen parameters.
var passwordArray = [];

// create a var to hold the length of the desired password.
var passwordLengthNum;

// create a function to prompt the user to define a length for the password.
function getPasswordLength() {
  var passwordLength;
  passwordLength = window.prompt(
    "Please choose a password length between a minimum of 8 and a maximum of 128 characters?"
  );
  passwordLengthNum = parseInt(passwordLength);
  checkPasswordLength();
  // console.log(passwordLengthNum);
}

getPasswordLength();

// create a function to check the length of the password.
function checkPasswordLength() {
  if (passwordLengthNum < min || passwordLengthNum > max) {
    // getPasswordLength();
    console.log("incorrect");
    lengthCorrect = false;
  } else {
    // return passwordLength;
    lengthCorrect = true;
    console.log(passwordLengthNum);
  }

  if (lengthCorrect === false) {
    getPasswordLength();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
