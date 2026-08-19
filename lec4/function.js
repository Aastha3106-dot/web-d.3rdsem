let str = "  JavaScript is Easy  ";

console.log(str.length);

console.log(str.trim());

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.includes("JavaScript"));

console.log(str.indexOf("Script"));

console.log(str.slice(2, 12));

console.log(str.replace("Easy", "Powerful"));

console.log(str.split(" "));



// 1. Square root
console.log(Math.sqrt(25));       // 5

// 2. Power
console.log(Math.pow(2, 3));      // 8
// Modern way:
console.log(2 ** 3);             // 8

// 3. Absolute value
console.log(Math.abs(-10));       // 10

// 4. Maximum
console.log(Math.max(10, 20, 5)); // 20

// 5. Minimum
console.log(Math.min(10, 20, 5));  // 5

// 6. Round
console.log(Math.round(4.6));     // 5
console.log(Math.round(4.4));     // 4

// 7. Floor - rounds down
console.log(Math.floor(4.9));     // 4

// 8. Ceil - rounds up
console.log(Math.ceil(4.1));      // 5

// 9. Random number (0 to less than 1)
console.log(Math.random());

// 10. Random integer from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// 11. Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1

// 12. Logarithm
console.log(Math.log(10));          // Natural logarithm
console.log(Math.log10(100));       // 2

// 13. Constants
console.log(Math.PI);               // 3.14159...
console.log(Math.E);                // 2.71828...

// 14. Sign of a number
console.log(Math.sign(10));         // 1
console.log(Math.sign(-10));        // -1
console.log(Math.sign(0));          // 0