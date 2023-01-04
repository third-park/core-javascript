/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

//rest parameter
const calculateTotal = (...args) => {
  
  let total = 0;

  args.forEach(function (item, index) {
    total += item
  })
  
  args.reduce((acc,item)=> acc + item)
  console.log();
  
  return ;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;


// 화살표 함수와 this

function normalFunction() {
  console.log('일반함수 : ', this);
}

const arrowFunction = () => {
  console.log('화살표함수 : ', this);
}

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋다.

const user = {
  name:'tiger',
  age:32,
  address:'서울시 중랑구 면목동',
  grades:[80,90,100],
  totalGrades: function (){
   /*  let total = 0;
    this.grades.forEach((item)=>{
      this
    })
    return total */

    function foo(){
      console.log('foo : ', this);
    }
    //

    const bar = () =>{
      console.log('bar : ', this);
    }

    foo.call(user) // user window 설명
    bar() // user object 화살표 함수 설명

  }
}


console.log(user.totalGrades());




/* 다음 함수를 작성해봅니다. ---------------------------숙제쓰..?----------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = function (a, b) {  //이건 그냥 일반적인? 제곱함수
//   return Math.pow(a, b);
// }

// console.log(pow(2,53)) //9007199254740992

// //반복문을 이용한 제곱함수? 만들기

// let pow = (numeric, powerCount) => {
//   let result = 1;
//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric
//   }
//   return result;
// };
// console.log(pow(2,53));


//reduce 사용  Array(10) 만 하면 내용물은 빈 배열이 생김 이때 .fill()을 쓰면 ()안에 있는게 배열에 다 들어간다.
// Array(10).fill(null).reduce()
let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc * numeric,1)
//reduce 1은 초기값이다. 아무것도 안 적으면 0만 나옴.






// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   //validation

//   if (!repeatCount) {
//     throw new Error('숫자 좀 넣어라')
//   }                                                              // acc *= numeric
//                                                                 // acc += numeric  둘 다 같음

//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };


// let repeatExpression = (text, repeatCount) => {
//  return Array(repeatCount).fill(null).reduce((acc)=>{acc + text},'')
// }
let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc)=>acc + text,'')



// repeat('hello😘',3) // 'hello😘hello😘hello😘'