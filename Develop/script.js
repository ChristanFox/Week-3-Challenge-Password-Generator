// Sets a default password length
  var passwordLength = 8;
  var variables      = [];
  
// Defines the variables to be used for the passwords  
  var lowerCase   = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase   = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','Z','W','X','Y','Z'];
  var Numbers     = ['0','1','2','3','4','5','6','7','8','9'];
  var specialChar = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','?','@','{','|','}','~'];

// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
  function writePassword() {
    var correctPrompts = getPrompts(); 

    if (correctPrompts) {
      var password     = generatePassword("submit");
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
  }

  function getPrompts() {
 // Password length prompt  
    variables = []; // Clears the character options on refresh

    passwordLength = parseInt(prompt("Select the amount of characters you would like the password to have. Must be between 8 to 128 characters"));
    
    if (passwordLength < 8) {
      alert("Password too short");
      return false;
    }
    if (passwordLength > 128) {
      alert("Password too long");
      return false;
    }
// Lowercase prompt
    if(confirm("Lowercase? Yes or No?")) {
      variables = variables.concat(lowerCase);
    }
// Uppercase prompt  
    if(confirm("Uppercase? Yes or No")) {
      variables = variables.concat(upperCase);
    }
// Numbers prompt    
    if(confirm("Numbers? Yes or No?")) {
      variables = variables.concat(Numbers);
    }
// Special Characters prompt
    if(confirm("Special Characters? Yes or No?")) {
      variables = variables.concat(specialChar)
    }
    return true;
  }

// Calls the "generate password" function (Script won't start without this)  
  function generatePassword() {
    var password = "";
// for loop to choose password characters    
    for (var i = 0; i < passwordLength; i++) {
      var randomLetter = Math.floor(Math.random() * variables.length);
      password = password + variables[randomLetter];
    }    
    return password;
  }



  