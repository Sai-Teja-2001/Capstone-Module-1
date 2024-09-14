/*Write a JavaScript function called findLongestWord that takes a sentence (string) as input and determines
the length of the longest word within the sentence.*/
//Solution  1
function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };