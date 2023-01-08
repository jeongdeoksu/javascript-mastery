// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a = 2;
let b = 3;
let result = a + b * 4; // a + (b * 4) => 14
console.log(result);

result = a++ + b * 4; // a + (b * 4) => 14 계산 후에 a 증가
console.log(result);
