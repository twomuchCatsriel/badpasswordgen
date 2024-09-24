 // elements 
const generate1 = document.getElementById("generate1");
const field = document.getElementById("field");

// other variables 
const possibleCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPADFGHJKLZXCVBNM1234567890@£$€&/%/?*_-&";

// main code
generate1.onclick = function(){
    let string = "";

    for(let i = 0; i <= 20; i++){
        let randomNumber = Math.floor(Math.random() * possibleCharacters.length);
        string = string + possibleCharacters[randomNumber];
    }

    field.innerHTML = string;
}