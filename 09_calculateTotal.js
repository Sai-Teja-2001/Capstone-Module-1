/*Write a JavaScript function calculateTotal that takes an array of products (objects) and calculates 
the total cost of the items in the shopping cart.
Each product object has the following properties:
name: The name of the product (string).
price: The price of the product (number).
quantity: The quantity of the product in the cart (number).*/

/*Approach1
function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}*/

//Approach2
 function calculateTotal(cart) {
    // Write your code here
  
    const totalCost =  Object.values(cart).reduce((accumulator,item)=>{
        const  itemCost =  item.price * item.quantity;
        return accumulator  + itemCost;
    },0);

    return totalCost;
}
// Do not modify the below lines
module.exports = { calculateTotal };