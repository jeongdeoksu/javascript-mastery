// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 변환
/**
 * Javascript에도 타입이 있다.
 * dynamic, weakly typed programming language
 */

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // ⬅️ 할당된 값에 따라 타입이 결정(동적으로 할당될 때 값의 타입이 결정)
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
