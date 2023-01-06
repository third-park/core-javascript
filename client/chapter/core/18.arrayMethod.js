/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]

console.log(typeof arr);
console.log(Array.isArray(''));
//null은 제대로 입력이 안된다. Object.prototype.toString.call()로 정확하게 뽑아낼 수 있다.
//그냥 쓰면 '[object Array]' 이렇게 뜨기에 Array만 뽑아내기 위해 slice를 이용해 자르고 소문자로만 결과를 받아냄

//왜 쓰냐? typeof 는 제대로 체크를 안하기 때문에 타입스크립트를 이용해 정확하게 체크해주는 것이다.
//유틸함수로써 간편하게 쓸 수 있다! 타입스크립트 쓰면 되긴한다ㅋㅋ

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}
function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
}
//      ???????
console.log(Array.isArray());


/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item, index){
  this[index] = item
},user)

/* span.forEach(item)=> {
  
  item.addEventListener('click', (e) => {
    console.log(e.target.style.background = 'orange');
  })
}
 */


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice 시작, 제거, 추, 가
arr.splice(1,0,23,5)
// console.log(arr);

// sort -(리페어function을 쓰면 오름차순 내림차순으로 정렬할 수 있다. 안 쓰면 문자열로 정렬됨.)
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
arr.sort((a,b) => a - b)
console.log(arr);


/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥', '미용실예약', '복습복습']

let template = todo.map((todoList) => {
  return /* html */ `<li>${todoList}</li>`
})
template.forEach((item)=> {
  document.body.insertAdjacentHTML('beforeend',item)
})

// console.log(template);


let newArray = arr.map((item) => item * 2)
// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

console.log(arr.indexOf(23));


// lastIndexOf
// includes

console.log((arr.includes(10)));


/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find

const find = users.find((item, index) => {
return item.id < 5
})
/// 대상을 하나 찾으면 실행을 멈추기 때문에 로운님만 계속 나오게 된다.
console.log(find);

// findIndex
const findIndex = users.findIndex((item) => {
  return item.id === 3
})

console.log(findIndex);


/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number)=>{
  return number < 100
})

console.log(result);


/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce

let totalAge = friends.reduce((acc, cur) => {
  return acc += cur.age
},0) //초기값 설정 필수  안하면 객체가 선택됨.


let template2 = todo.reduce((acc, cur,index) => {
  return /* html */ acc += `<li>할일${index + 1} : ${cur}</li>`
},'')

console.log(template2);
console.log(totalAge);



// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현'
// split
let nameArray = str.split(' ');

console.log(nameArray);

// join : 배열 -> 문자
console.log( nameArray.join(' / ') );

