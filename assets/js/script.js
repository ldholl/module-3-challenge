/* Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/


//var generatePwd = function (){}

//Password Object
/*var passwordObj ={
  length: promptLength,
}

*/


/*var passwordLength = function(){

  var promptLength = window.prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);

  if (promptLength < 8 || promptLength > 128){
  window.alert("Please enter a valid number.");
  passwordLength();
  }
  else if (isNaN(promptLength)){
    window.alert("Please enter a number.")
    passwordLength();
  }
  else{
    console.log(promptLength);
  }
}
passwordLength();*/


//
var passwordCharacters = function(){

//ask whether user wants numbers in their password
  
var promptNumbers = window.prompt("Would you like your password to include numbers? Please type 'YES' or 'NO'.");
  promptNumbers = promptNumbers.toLowerCase();
  while (promptNumbers !== 'yes' && promptNumbers !== 'no'){
    promptNumbers = window.prompt("Please enter a valid answer. Would you like your password to include numbers? Please type 'YES' or 'NO'");
    promptNumbers = promptNumbers.toLowerCase();
  } 
  console.log(promptNumbers);

//can copy this almost verbatim for other questions


//ask whether user wants cap letters in their password


//ask whether user wants lowercase letters in their password

//ask whether user wants special caracters in their password
}

passwordCharacters();


var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var spCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
