// null, undefined
//* undefined 변수의 값이 아직 있는지 없는지 정해지지 않은 상태
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null); //* null은 Object
console.log(typeof undefined);
