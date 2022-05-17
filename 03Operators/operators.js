var num1 = 26;
var num2 = 25;

console.log(num1 + num2);
var answer = num1 > num2;
console.log (answer);

// PERCENTAGE
var listingPrice = 799;
var sellingPrice = 199;

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice) * 100;
console.log("Actual Discount Percentage is: " + discountPercentage)  ;

displayDiscountPercentage = Math.round(discountPercentage);
console.log(displayDiscountPercentage + "% OFF");
var result = listingPrice > sellingPrice;
console.log(result);
console.log (typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var listing=1000;
var selling=500;
var discount=((listing-selling)/listing)*100;
console.log("Actual Discount Percent is:" + discount);

displayDiscountFormat = Math.round(discount);
console.log (displayDiscountFormat +"% OFF");
