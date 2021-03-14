// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterPool = '';
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlpha = lowercaseAlpha.toUpperCase()
var specialChars ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
var numbers = "0123456789";




var passwordObject = {
  passwordLength: function(){
    var passwordLengthInput = prompt("Enter the length of your password between 8 and 128.");
    var passwordLength = passwordLengthInput / 1;
  
    if(passwordLength !== NaN && passwordLength >=8 && passwordLength <=128) {
      return passwordLength;
    }
    alert("Character enterd is not a valid numebr, please try again!");
    this.passwordLength;
  },
  characterPool: 
}







function genCharSet(){
  debugger
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
  console.log(characterPool)
  return characterPool
}

function generatePassword() {
  var charSet = genCharSet();
  var passwordLen = passwordLengthfn();
  var generatedPassword = "";

  for(var i = 0; i < passwordLen; i ++) {
    var randomIndex = Math.floor(Math.random() * passwordLen);
    generatedPassword += charSet[randomIndex];
    // index the value and append to new password
  };
  console.log(generatedPassword);
  return generatedPassword;
};

generatePassword();
console.log(aPassword)

// generateBtn.addEventListener('click', function(){
//   var textToReplace = document.querySelector("#password");
  
//   textToReplace.value = aPassword;
// })




  // try{ 
  //   if(passwordLengthInput == ("")) throw "empty input";
  //   if (isNaN(Math.floor(passwordLengthInput))) throw TypeError; 
  //   if ((passwordLengthInput < 8 || passwordLengthInput > 128) && passwordLengthInput) throw RangeError; 
  //   // BUG Unable to press cancel --> causes range error to be thrown.


  // }
  // catch(err) { 
  //   if (err == 'empty input') { 
  //     alert("You didnt enter anything, please try again.");
  //     passwordLengthFn();
  //   }
  //   else if (err == RangeError) {
  //     alert("Number of characters cant be less than 8 or more than 128, please try again");
  //     passwordLengthFn();
  //   }
  //   else if (err = TypeError){
  //     
  //     passwordLengthFn();




// this function returns a characterset which the user has chosen