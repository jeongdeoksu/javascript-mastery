// MDN Number : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary);
console.log(octal);
console.log(hex);

// 비트와 바이트 : https://youtu.be/5IRFJt1C5o4
// Infinity에 대해 : https://youtu.be/NKmGVE85GUU?t=32
// MDN BigInt : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt
console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 1234567890123456789012345678901234567890n; // 마지막에 n
console.log(bigInt);
