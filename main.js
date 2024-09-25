 // elements 
const generate1 = document.getElementById("generate1");
const field = document.getElementById("field");
const inputBox = document.getElementById("length");

// other variables 
const possibleCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPADFGHJKLZXCVBNM1234567890@£$€&/%/?*_-&";

// functions
function check(num){ // check if the number is within boundaries
    let userLength;

    if(num === 0){
        userLength = 20;
    } else if(num < 3){
        userLength = 3;
    } else if(num > 100){
        userLength = 100; 
    } else{
        userLength = num;
    }

    return userLength;
}

// main code
generate1.onclick = function(){
    let string = "";
    let passLength = check(inputBox.value)

    for(let i = 0; i < passLength; i++){
        let randomNumber = Math.floor(Math.random() * possibleCharacters.length);
        string = string + possibleCharacters[randomNumber];
    }

    field.innerHTML = string;
}
