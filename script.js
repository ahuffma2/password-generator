// Assignment Code
var generateBtn = document.querySelector("#generate");

//Each of these arrays correspond with the choices the user can pick for their password 
 var lowArr=  "abcdefghijklmnopqrstuvwxyz".split(''); //Lowercase
 var uppArr= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); //Uppercase
 var numArr= "0123456789".split(''); //Numbers
 var symArr=  "!@#$%^&*()_+~*/-".split(''); //Symbols

//Initialize all global variables to be determined by the user
var criteria = {
  passLength: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var potentialPassword= []; //I combine this with the corresponding arrays with what the user chooses to include. I then randomize this array and shorten it after filling the max array. 

  criteria.passLength = passwordLength(); // I pass the user selected code through a function to ensure the length is within parameters.
  criteriaChecker(); //Passed through this to ensure that the user selects at least 1 true option on the password criteria options


  //Each of these If statements corresponds to the choice of the user and add the corresponding array to the main potentialPassword

  //IF USER SELECTS LOWERCASE ADD TO POTENTIAL
  if(criteria.lowercase)
  potentialPassword = potentialPassword.concat(lowArr);

  //IF USER SELECTS UPPERCASE ADD TO POTENTIAL
  if(criteria.uppercase)
    potentialPassword = potentialPassword.concat(uppArr);
  
  //IF USER SELECTS NUMERIC ADD TO POTENTIAL
  if(criteria.numeric)
    potentialPassword = potentialPassword.concat(numArr);

  //IF USER SELECTS SPECIAL ADD TO POTENTIAL
  if(criteria.special)
    potentialPassword = potentialPassword.concat(symArr);
  

  //Randomizes the contents of the assembled array that contains all the assembled components above

  return( passwordCleanup(potentialPassword) ); //Sends the potential password to passwordCleanup and randomly selects elements from the potential password to assemble the final result. 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//PROMPTS THE USER FOR A LENGTH AND ENSURES IT'S WITHIN 8 - 128 CHARACTERS;
function passwordLength(){
    criteria.passLength = prompt("Please enter desired Password length between 8 and 128", "8");

    if(criteria.passLength < 8 || criteria.passLength  > 128)
    {
      criteria.passLength = alert("Did not work. Needs to be 8 and 128");
      passwordLength();
    }

    return criteria.passLength;
}

//PROMPTS THE USER FOR THE VARIOUS CRITERIA AND ENSURE THEY CANNOT HIT NO FOR ALL OPTIONS
function criteriaChecker() {
  criteria.lowercase = confirm("Include Lowercase?");
  criteria.uppercase = confirm("Include Uppercase?");
  criteria.numeric = confirm("Include numeric character?");
  criteria.special = confirm("Include special symbols?");

  //Case for if no options are selected
  if(!criteria.lowercase && !criteria.uppercase && !criteria.numeric && !criteria.special)
  {
    alert("You must pick to include at least one of these values");
    criteriaChecker();
  }
}

//SHORTENS THE ASEEMBLED ARRAY TO MATCH THE CORRECT LENGTH AND JOINS IT TOGETHER
function passwordCleanup(array){
  var finalPassword = []; //This array gets filled with random elements from the big array I created in generatePassword

  for(var i =0; i < criteria.passLength; i++) //Loops however many times the user set the length to be. 
  {
    finalPassword.push(array[getRandomInt(array.length)]); //picks a random character from the recieved array and adds it to the final password
  }

  return(finalPassword.join('')); //Join makes it all one string rather than displaying "," between every element. 
}

//RANDOM NUMBER GENERATOR FROM https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
