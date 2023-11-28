// Assignment code here

/*Arrays to meet criteria */
let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = [" ","!","\"", "#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`"];
var allOptions = []

let passwordChars = "";

/*function to generate random password */
function generatePasswordPrompts(){

  let length = prompt('Please choose length between 8 and 128 characters');
  

    /*this loop will check if the length of the password meets the criteria between 8 and 128 if it does not an alert will pop up until the condtion is met*/
    while (length < 8 || length > 128) {
      let lengthAlert = alert("Password must be between 8 and 128 characters")
      length = prompt('Please choose length between 8 and 128 characters');
     
    }
  
  /*If statements that add the selected arrays to the allOtptions array  */
  let lowercasePrompt = confirm("If you want lowercase in your password click okay")
  
  if (lowercasePrompt){
      console.log("thank you for choosing lowercase");
      allOptions = allOptions.concat(lowercase);

  }

  let uppercasePrompt = confirm("If you want uppercase in your password click okay")
  console.log(uppercasePrompt);
  if (uppercasePrompt){
      console.log("thank you for choosing uppercase");
      allOptions = allOptions.concat(uppercase);
  }

  let numberPrompt = confirm("If you want numbers in your password click okay")
  console.log(numberPrompt);
  if (numberPrompt){
      console.log("thank you for choosing numbers");
      allOptions = allOptions.concat(num);
  }

  let specialPrompt = confirm("if you want special characters in your password click okay")
  console.log(specialPrompt);
  if (specialPrompt){
      console.log("thank you for choosing special characters");
      allOptions = allOptions.concat(specialChars);
  }


/*For as long as the empty string variable passwordChars length is less than the length entered by the user one random character from the allOptions array will be added */
while (passwordChars.length < length ){

  /*creates a varaible to randomize the allOptions array */
    randomAll = Math.floor(Math.random() * allOptions.length)
    passwordChars = passwordChars + allOptions[randomAll];

}

console.log(passwordChars);

}


function generatePassword (){
    var passwordPrompts = generatePasswordPrompts();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordChars;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
