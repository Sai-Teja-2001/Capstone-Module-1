module.exports = { reverseString };

/*Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.*/

function reverseString2(str) {
    // Write your code inside this function only.
let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}

function  reverseString(str){
    let reverseStr = "";
    for(let i=str.length-1; i >= 0; i--){
reverseStr = reverseStr + str.charAt(i);
    }
    return reverseStr;
}