module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
  let resultArr = [];
  arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i += 2) {
    resultArr.push(arrStr[i + 1]);
    resultArr.push(arrStr[i]);
  }

  return String(resultArr.join(""));

}