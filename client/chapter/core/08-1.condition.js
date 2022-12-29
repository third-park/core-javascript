/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* let number = prompt('숫자를 하나 입력해주세요', 0);

if (number > 0) {
  console.log('1');
} else if (number < 0) {
  console.log('-1');
} else {
  console.log('땡 탈락');
}
 */
/* let message =
  (number > 0) ? '1' :
    (number < 0) ? '-1' :
      (number == 0) ? '0' : '여긴 아무의미 없어요?';
 */

/* let message =
(number > 0) ? '0보다 크네요' :
(number < 0) ? '0보다 작네요' :
'0이네요';

alert(message);
 */    



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No
//이거 해결해보자...ㅠㅜ
// 영화 봤니?

// 영화 볼거니?
// if 문(statement)
let didWatchMovie = prompt('아바타 봤어?', '');
let goingToWatchMovie;

if (didWatchMovie === '응') {
  console.log('재밌더라!');
} else if (didWatchMovie !== '응') {
  goingToWatchMovie = prompt('나중엔 볼거야?')
    if (goingToWatchMovie === '응') {
      console.log('그래 꼭 봐!');
    } else {
      console.log('아쉽구만');
    }
}


// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식