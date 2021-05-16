var lowerCase = [
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
var upperCase = [
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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [
  "!",
  '"',
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "'",
  "\\",
  "/",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "?",
  "`",
  "~",
  "|",
];
var newArray = [];
var randomArray = [];

var generatePassword = function () {
  // user input
  var passLength = prompt(
    "How many characters do you want your password to be? (8 - 128 characters)"
  );
  if (passLength < 8 || passLength > 128) {
    alert("Please make sure your password is between 8 and 128 characters.");
    generatePassword();
  }

  var lowerCaseConfirm = confirm("Do you want lowercase?");
  if (lowerCaseConfirm) {
    newArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length - 1)]);
    passLength--;
    randomArray.push(...lowerCase);
  }

  var upperCaseConfirm = confirm("Do you want uppercase?");
  if (upperCaseConfirm) {
    newArray.push(upperCase[Math.floor(Math.random() * upperCase.length - 1)]);
    passLength--;
    randomArray.push(...upperCase);
  }

  var numberConfirm = confirm("Do you want numbers?");
  if (numberConfirm) {
    newArray.push(numbers[Math.floor(Math.random() * numbers.length - 1)]);
    passLength--;
    randomArray.push(...numbers);
  }

  var characterConfirm = confirm("Do you want special characters?");
  if (characterConfirm) {
    newArray.push(
      specialChar[Math.floor(Math.random() * specialChar.length - 1)]
    );
    passLength--;
    randomArray.push(...specialChar);
  }

  for (i = 0; i <= passLength; i++) {
    var newPass = randomArray[Math.floor(Math.random() * randomArray.length - 1)];
  };
  
  newArray.push(newPass);
  return(newArray);
};
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
