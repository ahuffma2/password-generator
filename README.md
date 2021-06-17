# Password-Generator

This program generates a password that adheres to user-designated criteria.

## User-Prompted-Criteria
The user is prompted to choose which of the following they desire in the final result.
* Length between 8-128 chars
* Include/Exclude Lowercase
* Include/Exclude Uppercase
* Include/Exclude Numbers
* Include/Exclude Symbols
---

## 
 This program contains 4 arrays corrosponding to user customization 
```javascript
var lowArr=  "abcdefghijklmnopqrstuvwxyz".split(''); 
var uppArr= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); 
var numArr= "0123456789".split(''); 
var symArr= "!@#$%^&*()_+~*/-".split(''); 
```

I then make an array to hold any combination of these arrays based on what the user picks
```javascript
var potentialPassword= [];

//IF USER SELECTS LOWERCASE ADD TO POTENTIAL
  if(criteria.lowercase)
  potentialPassword = potentialPassword.concat(lowArr);

  //IF USER SELECTS UPPERCASE ADD TO POTENTIAL
  if(criteria.uppercase)
    potentialPassword = potentialPassword.concat(uppArr);

.... etc etc
```

I then pass potentialPassword to another function to assign the correct length and randomly pick the characters for the password
```javascript
function passwordCleanup(array){
  var finalPassword = []; 

  for(var i =0; i < criteria.passLength; i++) 
  {
    finalPassword.push(array[getRandomInt(array.length)]); 
  }

  return(finalPassword.join(''));  
}
```

The final returned result is a password that matches the length specified and includes or excludes whatever the user picked. 

I did not show the prompts/confirms or the methods that determine that the length is within the 8-128 character limit or the logic that forces the user to pick at least one of the choices. 

## Author
[Austin Huffman](https://www.linkedin.com/in/austinhuffman/)
