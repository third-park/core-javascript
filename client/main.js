


import { insertLast, xhrData, xhrPromise } from "./lib/index.js";



/* xhrPromise
.get('http://jsonplaceholder.typicode.com/users/1') //promise
.then((res)=>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err)=>{
  console.log(err)
})
 */


//콜백형식
/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result) => {
    insertLast('body',JSON.stringify(result))
  },
  (err) => {
    insertLast('body', '데이터 로딩에 실패했습니다.');
  }
)
 */




