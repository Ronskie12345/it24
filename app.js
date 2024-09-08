// app.js

// a. Data Types
let num1 = 10;              // number
let num2 = 5.5;             // number
let str = "madam";          // string
let isPrimeFlag = true;     // boolean

// b. Arithmetic and Logical Operators
let sum = num1 + num2;      // addition
let product = num1 * num2;  // multiplication
let isEqual = num1 === num2; // logical operator (strict equality)

// Output data type results
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Is num1 equal to num2?", isEqual);

// c.i. Conditional Statements - if else
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

// Test odd/even check
checkOddEven(7);  // Output: 7 is odd
checkOddEven(10); // Output: 10 is even

// c.ii. Conditional Statements - switch
function dayOfWeek(day) {
    switch(day) {
        case 1:
            console.log("It's Monday");
            break;
        case 2:
            console.log("It's Tuesday");
            break;
        case 3:
            console.log("It's Wednesday");
            break;
        case 4:
            console.log("It's Thursday");
            break;
        case 5:
            console.log("It's Friday");
            break;
        case 6:
            console.log("It's Saturday");
            break;
        case 7:
            console.log("It's Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

// Test switch statement
dayOfWeek(1);  // Output: It's Monday
dayOfWeek(5);  // Output: It's Friday

// d. Loops
function printNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

// Test loop
printNumbers(5); // Output: 1 2 3 4 5

// e.i. Functional Programming: Check Odd/Even
const isOddOrEven = (number) => number % 2 === 0 ? "even" : "odd";

// Test odd/even function
console.log(isOddOrEven(10)); // Output: even
console.log(isOddOrEven(7));  // Output: odd

// e.ii. Functional Programming: Check if Prime
const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Test prime number function
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false

// e.iii. Functional Programming: Check if String is Palindrome
const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Test palindrome function
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
