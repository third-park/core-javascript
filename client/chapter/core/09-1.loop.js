/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;

while (i < 10) {
  console.log(i);

  i++;
} */



const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
/* let i = 0;

while (i < frontEndDev.length) {

  let value = frontEndDev[i];
  console.log(value);

  i++;
}
 */

let i = frontEndDev.length - 1;

while (i >= 0) {
  
  console.log(i, frontEndDev[i]);

  i--;
}


/* while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}
 *///pop() 배열 뒤에서부터 팝팝 뽑아낸다. <-> shift() 는 앞에서부터
//문제는 결과를 내면서 배열을 파괴한다는게 문제 -> 복사해줘야한다.

//전개 연산자 전개 구문 spread oparator
let copyArray = [...frontEndDev]

while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}


// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환