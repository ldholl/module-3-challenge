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

//Password Variables Object
/*var passwordObj ={
  numbers: "1234567890",
  capLetters : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLetters : "abcdefghijklmnopqrstuvwxyz",
  spCharacters : " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}

*/

//Function to get user password length
var passwordLength = function(){

  var promptLength = window.prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);
//check that user picked a number within the specified limit
  if (promptLength < 8 || promptLength > 128){
  window.alert("Please enter a valid number.");
  passwordLength();
  }
  //checked that the user entered a number
  else if (isNaN(promptLength)){
    window.alert("Please enter a number.")
    passwordLength();
  }
  //logs choice to console
  else{
    console.log(promptLength);
  }
}
passwordLength();


//Function to get user character preference
function passwordCharacters (){

  //ask whether user wants numbers in their password
    
  var promptNumbers = window.prompt("Would you like your password to include numbers? Please type '1' for YES or '0' for NO.");
  promptNumbers = parseInt(promptNumbers)
    while (promptNumbers !== 0 && promptNumbers !== 1){
      promptNumbers = window.prompt("Please enter a valid number. Would you like your password to include numbers? Please type '1' for YES or '0' for NO.");
      promptNumbers = parseInt(promptNumbers);
    } 
    console.log(promptNumbers);
      
  //ask whether user wants cap letters in their password
  var promptCapLetters = window.prompt("Would you like your password to include uppercase letters? Please type '1' for YES or '0' for NO.");
  promptCapLetters = parseInt(promptCapLetters)
    while(promptCapLetters !== 0 && promptCapLetters !== 1){
      promptCapLetters = window.prompt("Please enter a valid number. Would you like your password to contain uppercase letters? Please type '1' for YES or '0' for no.");
      promptCapLetters = parseInt(promptCapLetters)
    }
    console.log(promptCapLetters);

  //ask whether user wants lowercase letters in their password
  var promptLowLetters = window.prompt("Would you like your password to contain lowercase letters? Please type '1' for YES or '0' for NO.");
  promptLowLetters = parseInt(promptLowLetters);
  while(promptLowLetters !== 0 && promptLowLetters !== 1){
    promptLowLetters = window.prompt("Please enter a valid number. Would you like your password to include lowercase letters? Please type '1' for YES or '0' for NO.");
    promptLowLetters = parseInt(promptLowLetters);
    }
    console.log(promptLowLetters);

  //ask whether user wants special caracters in their password
  var promptSpChars = window.prompt("Would you like your password to contain special characters? Please enter '1' for YES or '0' for NO.");
  promptSpChars = parseInt(promptSpChars);
  while(promptSpChars !== 0 && promptSpChars !== 1){
    promptSpChars = window.prompt("Please enter a valid number. Would you like your password to contain special characters? Please type '1' for YES or '0' for NO.");
    promptSpChars = parseInt(promptSpCars)
    }
    console.log(promptSpChars)

  //Rerun function if user didn't pick yes for any of the options
    if (promptNumbers + promptCapLetters + promptLowLetters + promptSpChars === 0){
    window.alert("I can't work with no characters! Please choose YES for at least one option.")
    passwordCharacters ();
  }
}

  passwordCharacters();



//array to hold Password Object functions
var getChar = [
  function numbers(){
  return passwordObj.numbers[
      Math.floor(Math.random() * passwordObj.numbers.length)
    ];
  },
  
  function capLetters(){
    return passwordObj.capLetters[
      Math.floor(Math.random() * passwordObj.capLetters.length)
    ];
  },
  function lowLetters(){
    return passwordObj[
      Math.floor(Math.random() * passwordObj.lowLetters.length)
    ];
  },
  function spCharacters (){
    return passwordObj.spCharacters[Math.floor(Math.random() * passwordObj.spCharacters.length)];
  }
];

function getChar(){}

while(password.length > promptLength){

  
}
  



//FOR loop to run through variables until password length is reached

for (
  var i = 0; 
  i < promptLength;
  //whatever function needs to run
   )
//print completed password to the document



var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var spChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
