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

  var useSpecialCharacters = confirm("Would you like to use special characters?");
  var useNumbers = confirm("Would you like to use numbers in your new password?");
  var useUppercaseAlpha = confirm("Would you like to use uppercase in your password?");
  var useLowercaseAlpha = confirm("would you like to use lowercase in your password");
  
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
    console.log("here")
    alert("You haven't chosen any specs for your password characters")
    genCharSet();
  }
  
  return characterPool
}

function generatePassword() {
  var passwordLen = passwordLengthFn();
  var charSet = genCharSet();
  
  var generatedPassword = "";

  for(var i = 0; i < passwordLen; i ++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    generatedPassword += charSet[randomIndex];
    // index the value and append to new password
  };
  console.log(i)
  console.log(generatedPassword);
  return generatedPassword;
};

generateBtn.addEventListener('click', function(){
  var textToReplace = document.querySelector("#password");
  
  textToReplace.value = generatePassword();
})