// MDN String : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
// 문자열 타입
// VSCode - Setting Quote Style : Single Quote
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 방법
string = '"안녕"';
console.log(string);
string = "'안녕'"; //* 안에 Single quote를 사용하려면 Double quote로 감싸야 함
console.log(string);

// MDN 이스케이프 표현 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%ED%91%9C%ED%98%84
string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal) ``
let id = '엘리';
let greeting = "'안녕!, " + id + "🤚\n즐거운 하루 되세요!'";
console.log(greeting);

greetings = `'안녕!, ${id}🤚
즐거운 하루 되세요!'`;
console.log(greetings);
