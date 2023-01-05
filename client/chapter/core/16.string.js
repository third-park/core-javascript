/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") >= -1) browser = "chrome";
  else if (ua.indexOf("edge") >= -1) browser = "edge";
  else if (ua.indexOf("whale") >= -1) browser = "whale";
  else if (ua.indexOf("safari") >= -1) browser = "safari";
  else if (ua.indexOf("firefox") >= -1) browser = "firefox";

  return browser === browserName;
}


let message = 'Less is more.';

// console.log(message);
// for (let key of message) {
//   console.log(key);
// }

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ',stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[2];
console.log('extractCharacter: ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message = 'more' + message[0]
// message[3] = 'i'
console.log(message);


// 부분 문자열 추출
let slice = message.slice(8); //값이 없으면 다나가! 다내보냄   끝자리는 -1 -는 뒤에서부터 지정
console.log('slice : ',slice);

let subString = message.substring(-1,5);
console.log('subString : ', subString);

let subStr; //없어짐!


// 문자열 포함 여부 확인
let indexOf = message.indexOf('s'); // 값에 해당하는 게 문자열에 있다면! 몇번째인지 알려준당 / 없는 단어라면 -1 반환
console.log('indexOf : ',indexOf);

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ',lastIndexOf);

let includes = message.includes('Less'); //문자 포함하고 있는지 여부를 알려줌
console.log('includes : ',includes);

let startsWith = message.startsWith('L');
console.log('startsWith : ',startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ',endsWith);


// 공백 잘라내기
let trimLeft //삭제됨
let trimRight; //삭제됨
let trim = message.trim();
console.log('trim : ',trim);
let replace = message.replace(/\s*/g,'') //정규표현식 띄어쓰기 지우기ㅎ
console.log(replace);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ',repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ',toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
// let toCamelCase;
// let toPascalCase;

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

toCamelCase('less-is-more')
toPascalCase('less-is-more')