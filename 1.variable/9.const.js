// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; //! TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
// 프로그래밍을 할 때 let 보다는 const 사용
/**
 *  구분     재할당 Reassignalbe    변경 Mutable
 *  let           Yes                  Yes
 *  const         No                   Yes
 */
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {} ❌
apple.name = '푸른 사과';
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
