/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */




const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

/* let thisTime = prompt('하루루틴을 알려드릴게요. 지금 시간대는 언제인가요?', '점심');

switch (thisTime) {
  case '아침': alert('이듬 강의를 듣는다.'); break;
  case '점심': alert('밥먹고 파워낮잠 때린다.'); break;
  case '저녁': alert('복습하고 스터디를 진행한다.'); break;
  case '밤': alert('마무리 공부와 내일 수업에 대한 예습을 한다.'); break;
  case '심야':
  case '새벽': alert('미라클한 아침을 맞이해야 하니 최대 1시까지 공부하다 잔다.'); break;
}
 */
  /* 다양한 상황에 맞게 처리 --------------------------------------------------- */

/* switch문 → if문 변환 --------------------------------------------------- */

/* if (thisTime === '아침') {
  alert('아침이에요우');
} else if (thisTime === '점심') {
  alert('점심이에요우');
} else if (thisTime === '저녁') {
  alert('저녁이에요우');
} else if (thisTime === '밤') {
  alert('밤인디')
} else if(thisTime === '심야', thisTime === '새벽') {
  alert('너무 늦었엉');
}
 */

/* switch vs. if -------------------------------------------------------- */



// 0 ~ 6 의 값을 받는다.
// 0 = '일'
// 1 = '월'
// 2 = '화'
// 3 = '수'
// 4 = '목'
// 5 = '금'
// 6 = '토'


/* function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  
  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
     }
}
  
let result = (getDay(getRandom(6)));

console.log(result);
 *///이렇게 적을떄 왜 break문이 필요없는가? => 함수는 return을 만나게 되면 결과 내뱉고 실행을 종료하기 때문에 break문이 필요가 없는 것

/* let login = prompt('아이디 주세요', '');
let loginLowerCase = login.toLowerCase();

if (login === ' ' || login === null) {
  console.log('취소되었습니다.');
} else if (loginLowerCase === 'sem') {
  let pw = prompt('비밀번호를 치세요');
  if (pw === ' ' || pw === null) {
    console.log('잘못된 양식입니다.');
  } else if (pw === '1234') {
    console.log('로그인 완료');
  } else {
    console.log('없는 비밀번호 입니다.');
  }
} else {
  console.log('없는 아이디 입니다.');
}
 */

let userName = prompt('사용자 아이디를 입력해주세요', ''); //여기에 .toLowerCase()붙여도 된다.

if (userName.toLowerCase() === 'admin') {
  let pw = prompt('비밀번호를 입력해 주세요.', '')

  if (pw.toLowerCase() === 'themaster') {
    console.log('welcome');
  } else {
    console.log('wrong');
  }

} else if (userName.replace(/\s*/g) === '' || userName === null) {
  console.log('cencle');
} else {
  console.log('wrong id');
}