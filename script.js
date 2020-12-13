// Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Create Arrays for character entries

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Empty Arrays 
 
var resultArray = [];
var userArray = [];

uppercaseArray [1]

// Prompts user to define password characteristics
var numCharacter = prompt("How many characters would you like your password to consist of? Pick from 8 to 128");
var numbers = confirm("Would you like your password to contain numbers?");
var uppercases = confirm("Would you like your password to contain uppercase letters?");
var lowercases = confirm("Would you like your password to contain lowercase letters?");
var characters = confirm("Would you like your password to contain special characters?");

if (numbers){
    resultArray = resultArray.concat(numbArray);
    
  }

if (uppercases){
    resultArray = resultArrayconcat(uppercaseArray);
  
  }
  
if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  
  }
  
if (characters){
    resultArray = resultArray.concat(characterArray)
  }
  console.log(resultArray)
  

for (var i = 0; i < numCharacter; i++) {
      
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  }
  

// Push password text to user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
