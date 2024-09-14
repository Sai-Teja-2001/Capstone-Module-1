/*Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, 
and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.*/

function calculateBMI(weight, height) {
    // Write your code here 
    //Checked for values should not be negative
    if(weight>0 && height>0){
        const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
    } 
    return "Provide  valid  Input";   
}

// Do not modify the below lines
module.exports = { calculateBMI };