// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
  var numericalChar = "0123456789";
  var specialChar   = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
  function writePassword() {
    var password     = generatePassword();
    var passwordText = document.querySelector("#password");

// Password length user prompt
  var passwordLength = prompt("Select the amount of characters you would like the password to have. Must be between 8 to 128 characters");
      passwordLength = parseInt(passwordLength);


  passwordText.value = password;

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
