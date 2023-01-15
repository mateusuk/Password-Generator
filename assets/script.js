// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let possibleCharacters;
let passwordLenght;
var password;
var options;

// convert array to string using join() method without comma such as "abcdefghijklmnopqrstuvwxyz"
let lowerCasedCharactersString = lowerCasedCharacters.join("");
let upperCasedCharactersString = upperCasedCharacters.join("");
let numericCharactersString = numericCharacters.join("");
let specialCharactersString = specialCharacters.join("");

//welcome message
alert("welcome to generetor password");


// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt the user for the desired password length
   passwordLenght = prompt("Enter the desired password length:");

    // Check if the length is between 10 and 64
  if (passwordLenght < 10 || passwordLenght > 64) {
    // if passwordLenght is less than 10 OR(||) passwordLenght is greater than 64 will dispaly this message.
    alert("⚠️\nThe password length must be between 10 and 64 characters. Refresh and try again");
    return;
  }
    // Prompt the user for the types of characters to include in the password
    var includeUppercase = confirm("Include uppercase letters in the password?");
    var includeLowercase = confirm("Include lowercase letters in the password?");
    var includeNumbers = confirm("Include numbers in the password?");
    var includeSpecial = confirm("Include special characters in the password?");
    alert("🚀\nnow click on the red button \"Generate Password\"  👇");
    // if 
    possibleCharacters = "";
    if (includeUppercase) {
      possibleCharacters += upperCasedCharactersString;
    }
    if (includeLowercase) {
      possibleCharacters += lowerCasedCharactersString;
    }
    if (includeNumbers) {
      possibleCharacters += numericCharactersString;
    }
    if (includeSpecial) {
      possibleCharacters += specialCharactersString;
    }

  return {passwordLenght,possibleCharacters}

}





// Function for getting a random element from an array
function getRandom(possibleCharacters) {

    return Math.floor(Math.random() * possibleCharacters.length);
  }



// Function to generate password with user input
function generatePassword(passwordLenght,possibleCharacters) {
  
   password = "";
  //  for loop to iterate for the desired length
  for (var i = 0; i < passwordLenght; i++) {
    // Generate a random index based on the length of the possible characters string
    var randomIndex = getRandom(possibleCharacters);
    // Add the character at the random index to the password string
    password += options.possibleCharacters[randomIndex];
  }
  // Return the generated password
  return password;
}

 options = getPasswordOptions();
console.log(generatePassword(passwordLenght,possibleCharacters));
// -----------------------------------------------starter code ------------------------------------------------------------



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLenght,possibleCharacters);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

generatePassword();


