//boolean to hold different criteria, numbers, special characters
//uppercase letters and lowercase letters
var hasNumber;
var hasSpecial;
var hasUppercase
var hasLowercase;

//Array to hold all possible special characters
var specialArray = ["!", "#", "$", "%", "&", "'", "(", ")",
 "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", 
 ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", 
 "|", "}", "~"];

//Array to hold on possible numbers
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Array to hold all possible lowercase letters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"];

//Array hold all possible uppercase letters
var uppercaseArray = [];

//for loop to convert lowercase array elements to uppercase
for(var i = 0; i <lowercaseArray.length ; i++){
    //push each element of the lowercase array and call toUpperCase on each element
    uppercaseArray.push(lowercaseArray[i].toUpperCase())
}

//Array to hold all available element choice once criteria is picked
var criteriaArr = [];

//Variable to hold query selector, choosing button with makePW class
var generateButton = document.querySelector(".makePW");

//Call add event listener so the button does something when clicked
generateButton.addEventListener("click", function (){
    //call generate password function and pass returned string into newString variable
    var newString = generatePassword();
    //place new string in the element given "password" class
    document.getElementById("password").placeholder = newString;
});

var changeButton = document.querySelector(".changeTheme");
changeButton.addEventListener("click", changeTheme);

//function to generate a new password
function generatePassword(){
    //prompt user to get password length store in password length variable
    var passwordLength = parseInt(prompt("Enter in the number of chracters for your password between 12 - 25"));

    //Check to make sure user chose length
    if(!passwordLength){
        alert("This needs a value to run the password generator!");
    }
    //Check to make sure user chose length between 12 - 25
    else if(passwordLength < 12 || passwordLength > 25){
        alert("Please enter a value between 12 - 25");
    }
    //confirm methods to check password Criterias, set variables to T or F
    else{
        hasNumber = confirm("Do you want this password to have numbers?");
        hasSpecial = confirm("Do you want this password to have special characters?");
        hasUppercase = confirm("Do you want this password to have uppercase letters");
        hasLowercase = confirm("Do you want this password to have lowercase letters?");
    }

    //Different combinations or criteria n!/(r!(n-r)!)
    //n is number of criteria available r is number of criteria chosen
    //All 4 negative choices, only 1 avaliable option
    if(!hasNumber && !hasSpecial && !hasUppercase && !hasLowercase){
        criteriaArray = alert("You need to choose atleast 1 password criteria");
    }
    //All 4 positive choices, only 1 available option
    //Combines specific criteria chosen all into 1 large array
    else if(hasNumber && hasSpecial && hasUppercase && hasLowercase){
        criteriaArray = specialArray.concat(numArray, lowercaseArray, uppercaseArray);
    }
    //3 positive choices, 4 available options
    else if(hasSpecial && hasNumber && hasUppercase){
        criteriaArray = specialArray.concat(numArray, uppercaseArray);
    }
    else if(hasSpecial && hasNumber && hasLowercase){
        criteriaArray = specialArray.concat(numArray, lowercaseArray);
    }
    else if(hasSpecial && hasLowercase && hasUppercase){
        criteriaArray = specialArray.concat(lowercaseArray, uppercaseArray);
    }
    else if(hasNumber && hasLowercase && hasUppercase){
        criteriaArray = numArray.concat(lowercaseArray, uppercaseArray);
    }
    //2 positive choice, 6 available options
    else if(hasSpecial && hasNumber){
        criteriaArray = specialArray.concat(numArray);
    }
    else if(hasSpecial && hasLowercase){
        criteriaArray = specialArray.concat(lowercaseArray);
    }
    else if(hasSpecial && hasUppercase){
        criteriaArray = specialArray.concat(uppercaseArray);
    }
    else if(hasLowercase && hasNumber){
        criteriaArray = lowercaseArray.concat(numArray);
    }
    else if(hasLowercase && hasUppercase){
        criteriaArray = lowercaseArray.concat(uppercaseArray);
    }
    else if(hasNumber && hasUppercase){
        criteriaArray = numArray.concat(uppercaseArray);
    }
    //1 positive choice, 4 available options
    else if(hasNumber){
        criteriaArray = numArray;
    }
    else if(hasSpecial){
        criteriaArray = specialArray;
    }
    else if(hasLowercase){
        criteriaArray = lowercaseArray;
    }
    else if(hasUppercase){
        criteriaArray = uppercaseArray;
    }  
    
    //Array to hold the actual password going to be created
    var passwordArray = [];

    //For loop to randomly choose 
    for(var j = 0; j < passwordLength; j++){
        //variable to hold random element from criteriaArray 
        var randomCharacter = criteriaArray[
            //grab a random element from large criteria array 
            Math.floor(Math.random() * criteriaArray.length)];
        //push this element to the passwordArray    
        passwordArray.push(randomCharacter);    
    }
    //Convert array to a string using join, toString() includes commas
    //se I had to use join
    var passwordString = passwordArray.join("");

    //return the new string created
    return passwordString;

}
function changeTheme(){
    var changePage = document.querySelector(".page");
    changePage.setAttribute("style", "background-color: black; color: green; border: 2px solid green");
    var changeBox = document.querySelector(".box");
    changeBox.setAttribute("style", "background-color: black; color: green; border: 2px solid green; box-shadow: 5px 5px 10px green;");
    var changeTextArea = document.querySelector("textarea");
    changeTextArea.setAttribute("style", "border: 2px dashed green; background-color: whitesmoke; color: white;")
}
//function to print the password to the textarea with password class
function printPassword(text){
    document.getElementById("password").textContent = text;
}
printPassword(passwordString);


