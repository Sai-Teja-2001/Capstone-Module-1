module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.
   let product = 1;
  if (nums.length != 0) {
    for (let i = 0; i < nums.length; i++) {
      product = product * nums[i];
    }
  } else {
    return "Array must contain atleast one integer";
  }

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }

}