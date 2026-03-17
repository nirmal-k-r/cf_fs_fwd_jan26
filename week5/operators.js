//js operators
//+ - * / % **



let num1=10;
let num2=20;

// let sum=num1 + num2;
// console.log(sum);

// let difference=num1 - num2;
// console.log(difference);

// let product=num1 * num2;
// console.log(product);

// let quotient=num1 / num2;
// console.log(quotient);

// let remainder=num1 % num2;
// console.log(remainder);

// let power=num1 ** 2; //num1 to the power of 2
// console.log(power);


let sum=num1 + num2;
console.log("The sum is:",sum);

let difference=num1 - num2;
console.log("The difference is:",difference);

let product=num1 * num2;
console.log("The product is:", product);

let quotient=num1 / num2;
console.log("The quotient is:", quotient);

let remainder=num1 % num2;
console.log("The remainder is:", remainder);

let power=num1 ** 2; //num1 to the power of 2
console.log("The power is:", power);


//string formatting
console.log(`The sum is ${sum} and the difference is ${difference} and the product is ${product} and the quotient is ${quotient} and the remainder is ${remainder} and the power is ${power}`);


//order of operations
var result=10+(20/2+5)*3-1;  //BODMAS
console.log(result); 