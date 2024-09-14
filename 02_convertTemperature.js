/*Write a JavaScript function convertTemperature that converts temperatures between Celsius and Fahrenheit scales, 
providing a flexible tool for users to switch between these two common temperature units.*/
function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32;//Code  giving bug because instead of divide, mod is used
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Do not modify the below lines
module.exports = { convertTemperature };