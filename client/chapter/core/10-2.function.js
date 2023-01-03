/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식 //매개변수가 많으면 개귀찮기 때문에 매개변수들을 묶을 수 있는 (함수 안에서만 사용할 수 있는)arguments라는 유사배열객체를 지원한다. 
let calculateTotal = function () {

  // console.log(arguments);

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수: argumnets
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.
  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
  // 배열의 능력: forEach, reduce

  let total = 0;

  let arr = Array.from(arguments) //static Method
  // let arr = Array.prototype.slice.call(arguments) //instance Method

  arr.forEach(function (item, index) {
    total += item;
  })

  return arr.reduce(function (acc, item) {
    return acc + item
  })


  // for (let value of arguments) {
  //   total += value;
  // }

/*   for (let i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
 */
  
  // return total

}; 

console.log(calculateTotal(100,500,300,150,400,150));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){}; //이미 변수에 함수가 지정됐고 안에있는 함수를 호출할 수 없기때문에 의미가 없다.(익명함수를 쓴다.)


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  
  if (typeof url === 'string' && url.match(/http.+www/)) {
    resolve(url)
  }else{
    reject()
  }

};

callbackFunctionExpression(
  'http://www.naver.com',
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    throw new Error('url 입력 정보가 올바르지 않습니다.');
  }

)




// 함수 선언문 vs. 함수 (표현)식
function aa() {
  

}

const bb = function(){}



// 즉시 실행 함수 (표현)식(즉시 호출될 수 있는 함수 표현식) <-익명함수다.
// Immediately Invoked Function Expression
let IIFE;

// var 함수 스코프
// let, const 블록 스코프




(function () { // 인자 parameter ()

  console.log('즉시실행!');

})() //인수 ()
//요즘은 잘 안쓰임 (var의 전역오염 위험 땜에 전역을 보호하기 위해 썼는데 요즘은 let const 쓰니까?)


const MASTER = (function () {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  return {
    getKey: function () {
      return KEY;
    },
  };
})(); // arguments

console.log(MASTER.getKey());