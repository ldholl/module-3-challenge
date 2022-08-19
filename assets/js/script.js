// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Function to get user password length
var passwordLength = function () {

  var promptLength = window.prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);
  //check that the user entered a number
  if (isNaN(promptLength)) {
    window.alert("Please enter a number.")
    return passwordLength();
  }
  //check that the user entered a valid number
  else if (promptLength < 8 || promptLength > 128) {
    window.alert("Please enter a valid number.");
    return passwordLength();
  }
  //logs choice to console
  else {
    console.log(promptLength);
    return promptLength;
  }
}

//Function to get user character preference
function passwordCharacters() {
  var availableCharacters = "";
  //ask whether user wants numbers in their password
  if (window.confirm("Would you like your password to include numbers?")) {
    availableCharacters += "0123456789"
  }
  //ask whether user wants capital letters in their password
  if (window.confirm("Would you like your password to include capital letters?")) {
    availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  //ask whether user wants lowercase letters in their password
  if (window.confirm("Would you like your password to include lowercase letters?")) {
    availableCharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  //ask whether user wants special characters in their password
  if (window.confirm("Would you like your password to include special characters?")) {
    availableCharacters += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  //checks that the user picked at least one option
  else if (availableCharacters.length <= 1) {
    alert("I can't work with no characters! Please choose YES for at least one option.")
    return passwordCharacters();
  }
  //returns the string that will be used to generate the password
  return availableCharacters;
}


//Function to generate the user's password
function generatePwd() {
  var password = "";
  var pwdLength = passwordLength();
  var availableCharacters = passwordCharacters();

  for (var i = 0; i < pwdLength; i++) {
    var randomChar = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    password += randomChar
  }
  return password;
}





