var passLength;
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"];
var numbers = [1, 2, 3];
var specialChar = ["!", "@", "#"];
var newArray = []

var generatePassword = function() {
  // user input
  
  // for loop
  for (var i = 0; i = passLength; i++) {
    newArray = Math.floor(Math.random() )
  }
  
  
  return newArray;
}
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
