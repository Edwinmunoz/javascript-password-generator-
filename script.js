// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
const upperChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar ="abcdefghijklmnopqrstuvwxyz";
const numChar ="0123456789";
const symbols ="!#[]$%&'()*+,-./:;<=>?@^`{|}~]";
var password ="";
// Write password to the #password input
function writePassword() {
  var password = "";
  possibleCharacters = "";
  CharacterAmount = prompt ("Length of characters in your password. Choose between 8 and 128.");
  if (CharacterAmount < 8) {
    alert("Choose between 8 and 128");
    return writePassword();
  }
  else if (CharacterAmount > 128) {
    alert ("Choose between 8 to 128 characters");
    return writePassword();
  }

  const includeuppercase = confirm("press ok for uppercase letters");
  const includeLowercase = confirm("press ok for lowercase letters");
  const includeNumbers = confrim("press ok for numbers");
  const includeSymbols = confrim("press ok for symbols");

  if (includeLowercase) {
    possibleCharacters += lowerChar;
  }

  if (includeNumbers) {
    possibleCharacters += numChar;
  }

  if (includeuppercase) {
    possibleCharacters += upperChar;
  }

  if (includeSymbols) {
    possibleCharacters += symbols
  }

  for (var i = 0; i < CharacterAmount; i++) {
    password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }


  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
