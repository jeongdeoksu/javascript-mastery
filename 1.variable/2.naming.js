// 주설을 달면 됨
/**
 * 주석이 됨
 * 다음 줄로 자동으로 넘어감
 */

/** 변수 규칙!
 * 라틴 문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 : break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, false, finally, for, function, if, import, in, instanceof, new, null, return, super, switch, this, throw, true, try, typeof, var, void, while, with ❌
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
 * 숫자로 시작 ❌
 * 특수 문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러 개의 변수를 1, 2, 3 숫자로 구분 ❌ → 최대한 "의미있게", 구체적인 이름으로 작성!
 */

let apple;
let redApple;

// 나쁜 예제 💩
let number = 20; // number의 의미가 없음

// 좋은 예제 ✨
let myAge = 20;

// 나쁜 예제 💩
let audio1;
let audio2; // 변수 이름에 숫자로 구분하는 건 똥

// 좋은 예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁 🍯
let audioBackground; // 공통 단어를 앞으로 배치하면 검색 시 확인이 편리함
let audioWind;
