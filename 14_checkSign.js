module.exports = { checkSign };
//Approach 1
function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
 if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "kindly check inputs";
  }
  let nums = [num1, num2, num3];
  let negCount = 0;
  for (const num of nums) {
    if (num < 0) {
      negCount++;
    }
  }
  if (negCount == 0) {
    return "+++";
  } else if (negCount == 1) {
    return "++-";
  } else if (negCount == 2) {
    return "+--";
  } else {
    return "---";
  }

}
//Approach 2
const checkSign = function (num1, num2, num3) {
  if (num1 != 0 && num2 != 0 && num3 != 0) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
      return "+++";
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
      return "---";
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
      return "++-";
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
      return "++-";
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
      return "++-";
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
      return "+--";
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
      return "+--";
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
      return "+--";
    }
  } else {
    return "Kindly check Inputs";
  }
}