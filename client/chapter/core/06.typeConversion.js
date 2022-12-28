/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
let YEAR = 2022;

console.log(String(YEAR));

// undefined -> 'undefined'
// null -> 'null'
console.log(String(undefined));

let days = null;
console.log(String(days));


// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));

// 의도치않은 형변환
let isBed = true;
console.log(isBed + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));


// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0  암시적 형변환
let cutie = false;
console.log(+cutie);
console.log(cutie * 1);
console.log(cutie / 1);
console.log(typeof (cutie / 1));


// string 숫자형 문자
let num = '123'

console.log(typeof (num));
console.log(typeof (num * 1));

// numeric string
let width = '320px'

console.log(width / 1);
console.log(parseInt(width,10));



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들


console.log(Boolean('0'));
console.log(!!''); //의도하지 않은 형변환 !는 부정의 의미 그러니 !!는 긍정