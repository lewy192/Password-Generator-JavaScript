// Assignment Code

// defining global variables
var generateBtn = document.querySelector("#generate");

var characterPool = '';
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlpha = lowercaseAlpha.toUpperCase()
var specialChars ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
var numbers = "0123456789";

// defined function to ask user how long the want password to be.
function passwordLengthFn(){
  // use of prompt method to get the users input
  var passwordLengthInput = prompt("Enter the length of your password between 8 and 128.");
  // unorthadox method of converting a string to a number - Further exaplanation in the READEME
  var passwordLength = passwordLengthInput / 1;
    // checks to see converted value is not a NaN is not less than 8 or greater than 128
  if(passwordLength !== NaN && passwordLength >=8 && passwordLength <=128) {
    return passwordLength;
  }
  // if requirements are not met it alerts the user and recursivley runs the function 
  alert("Character enterd is not a valid numebr, please try again!");
  passwordLengthFn();
}

// defines a function which will decide what characterset the password gen will use
function genCharSet(){
  // using confirms so the users only have 2 choices, and they return a bool
  var useSpecialCharacters = confirm("Would you like to use special characters?");
  var useNumbers = confirm("Would you like to use numbers in your new password?");
  var useUppercaseAlpha = confirm("Would you like to use uppercase in your password?");
  var useLowercaseAlpha = confirm("would you like to use lowercase in your password");
  // following if statements check if any of the confirms are True
    // if any are true the coresponding character string is added to the characterpool
  if (useSpecialCharacters) {
    characterPool += specialChars;
  }
  if(useNumbers){
    characterPool += numbers;
  }
  if(useUppercaseAlpha){
    characterPool += uppercaseAlpha;
  }
  if(useLowercaseAlpha){
    characterPool += lowercaseAlpha;
  }
  if (characterPool === ''){

    // if the characterPool is empty alert the user and recusrsively call the fucntion to try again
    alert("You haven't chosen any specs for your password characters")
    genCharSet();
  }
  // otherwise return the characterpool to be used elsewhere
  return characterPool
}

function generatePassword() {
  // assigns the parameters set by the user to local variables
  var passwordLen = passwordLengthFn();
  var charSet = genCharSet();
  // creates a variable of an empty string
  var generatedPassword = "";

  for(var i = 0; i < passwordLen; i ++) {
    // for every number from 0 up to the length of the password
      // create a random number between 0 and passwordLen
    var randomIndex = Math.floor(Math.random() * charSet.length);
      // use the random number to index the character pool string and add the indexed character, using the addition assignment opperator, to the local variable generatedPassword
    generatedPassword += charSet[randomIndex];
  };

  // console.log(generatedPassword); was used for testing
  // spitsd out 
  return generatedPassword; 
};
// an event listener is attatched to the button
generateBtn.addEventListener('click', function(){
  var textToReplace = document.querySelector("#password");
  // when clicked replace the text in the tag with an id of password to the generated password
  textToReplace.value = generatePassword();
})