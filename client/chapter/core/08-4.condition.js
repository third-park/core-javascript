/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  (emailAddress === undefined || emailAddress === null) ?
  'user@company.io' : emailAddress


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';

console.log( null || WIDTH); //10px
console.log( null ?? WIDTH); //10px

console.log(undefined || WIDTH ); //10px
console.log(undefined ?? WIDTH ); //10px 값이 없으니까 계속 뒤에 값만 내보냄

console.log(true || WIDTH ); // 얜 true일땐 true false 일땐 10px
console.log(false ?? WIDTH ); // true 와false가 사용자가 정의한 값이라고 인식해 해당 글이 나온다.

console.log( '' || WIDTH ); //
console.log( '' ?? WIDTH ); // 빈 문자도 정의한거라고 생각한거?

// ??(nulligh 연산자)는 null 이나 undefined 가 아니면 사용자가 정의한 값을 뱉는다. 