
var hasNumber;
var hasSpecial;
var hasUppercase
var hasLowercase;

var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")",
 "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", 
 " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", 
 "|", "}", "~"];

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"];

var emptyArray = [];

var uppercaseArray = [];

for(var i = 0; i <lowercaseArray.length ; i++){
    uppercaseArray.push(lowercaseArray[i].toUpperCase())
}

var choicesArray = [];

var buttonAction = document.querySelector(".makePW");

buttonAction.addEventListener("click", function (){
    var newString = generatePassword();
    document.getElementById("password").placeholder = newString;
});


function generatePassword(){
    passwordLength = parseInt(prompt("Enter in the number of chracters for your password between 12 - 25"));

    if(!passwordLength){
        alert("This needs a value to run the password generator!");
    }
    else if(passwordLength < 12 || passwordLength > 25){
        alert("Please enter a value between 12 - 25");
    }
    else{
        hasNumber = confirm("Do you want this password to have numbers?");
        hasSpecial = confirm("Do you want this password to have special characters?");
        hasUppercase = confirm("Do you want this password to have uppercase letters");
        hasLowercase = confirm("Do you want this password to have lowercase letters?");
    }
    //All 4 negative choices
    if(!hasNumber && !hasSpecial && !hasUppercase && !hasLowercase){
        choicesArray = alert("You need to choose atleast 1 password criteria");
    }
    //All 4 positive choices
    else if(hasNumber && hasSpecial && hasUppercase && hasLowercase){
        choicesArray = specialArray.concat(numArray, lowercaseArray, uppercaseArray);
    }
    else if(hasSpecial && hasNumber && hasUppercase){
        choicesArray = specialArray.concat(numArray, uppercaseArray);
    }



}
