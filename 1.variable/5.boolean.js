// MDN Boolean: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// 블리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
//* 확인 방법은 값 앞에 !! 추가
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(Infinity);