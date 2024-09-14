module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.
let result = [];
for(let i=0;i<s.length-1;i++){
   if(s[i]==='+' && s[i+1]==='+'){
result.push(s.substring(0,i) + '--' + s.substring((i+2)));
   } 
}
return result;

}