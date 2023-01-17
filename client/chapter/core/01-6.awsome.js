


// let arr = [10, 100, 400, 600];


//배열의 능력
// for..in 객체 순환 용도
// for..of는 iterable한 요소를 순환
// 배열.forEach -> 배열 순환 목적
// 배열.reduce -> 배열을 받아서 새로운 무언가(문자,숫자, > 배열,객체)를 만들 목적
// 배열.map // 배열을 받아 새로운 배열을 반환 목적
//{...spread}

//콜백은 화살표 함수를 쓰는 경우가 많다. 익숙해지자.

/* let total = 0;
for (let i = 0; i < arr.length;i++){
  console.log(arr[i]);
}
console.log(total);
 */

/* arr.forEach((item, index) => {

  console.log(item,index);
})
 */

//this 설정
/* const user = {
  name:'tiger'
}

arr.forEach(function(item, index){
  console.log(this.name);
},user)
 */



const friends = [
  {
    name: '세명',
    age: 28,
    job: '취준',
  },
  {
    name: '하은',
    age: 25,
    job: '공시생',
  },
  {
    name: '욜로',
    age: 27,
    job: '학생',
  },
];




// let age = friends.reduce((acc,cur)=> acc + cur.age ,0)
/* let age = friends.reduce((acc,cur)=> {
  return acc + cur.age
  
},0) // 그 목적은 초기값으로 정할 수 있다. '' or {} or 0
 */






let Jobs = friends.map((item) => {
  return `<li>${item.name}</li>`
})

Jobs.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend',item)
})

/* let jobs = friends.reduce((acc, cur) => {
  acc.push(cur.job)
  return acc;
},[])
 */

// console.log(Jobs);

// console.log(age);
// console.log(jobs);







let temp = friends.reduce((acc, cur, index) => {
  return acc + `<li class="list${index + 1}">직업은 ${cur.job} 입니다.</li>`
}, '')

console.log(temp);
document.body.insertAdjacentHTML('beforeend',temp)














//빈 배열에 순환시켜 수집한 값을 집어넣어 새로운 묶음으로 만들어 줄 수 있다.
/* let arr = [];

friends.forEach((item) => {
  arr.push(item.name)
})


console.log(arr);
 */














