/*function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}*/

//Approach2
function titleCase(sentence) {
    // write your code here
let words = sentence.toLowerCase().split(' ');

const titleCaseSentence= words.map(function(currentWord){
    return currentWord[0].toUpperCase()+currentWord.substring(1);
});
return titleCaseSentence.join(' ');
}
// Do not modify the below lines
module.exports = { titleCase };