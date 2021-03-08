// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();

};

function generatePassword() {

  var chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var pswd ="";
  
  var i; for (i=0; i < 12; i++){
    pswd += chars.charAt(Math.floor(Math.random()*chars.length));
  }
  return pswd 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(generatePassword()); 