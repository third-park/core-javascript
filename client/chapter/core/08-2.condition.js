/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


/* let age = prompt("나이가 어뜨케 되세여?", 20);

if (age >= 14 && age <= 90) {
  console.log('이거는 뭐고');
} else {
  console.log('이건 먼데');
}
 */















let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b ; // ??

// 논리합(또는) 연산자
let AorB = a || b;  //a가 나온다.

// 부정 연산자
let reverseValue = !value; // 값 반전


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// 트루면 넘어간다. 다음 공백인데 여백이 있는 공백 => 트루 , 넘어간다. 다음은 값없는 배열 트루! 넘어간다. 프로퍼티값 'false'가 있는 객체 => 값이 있으니 트루! 다 트루면 마지막값이 들어간다.


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
//false 넘어간다. 빈문자 넘어간다. 배열갯수(2)-> 트루. 트루나왔으니 종료.

let userName = prompt('사용자 이름을 입력해주세요', '');

if (userName === 'Admin') {
  let pw = prompt('비밀번호를 입력해주세요.', '');

  if (pw === '12345') {
    console.log('안녕하세요.');
  } else if (pw === ' ' || pw  === null) {
    console.log('취소되었습니다.');
  }else{
    console.log('틀린 비밀번호입니다.');
  }

}else if (userName === ' ' || userName === null) {
  console.log('취소되었습니다.');
} else {
  console.log('없는 아이디입니다.');
}

// console.log(userName);

