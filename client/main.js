/* global gsap */


import { renderSpinner, renderUserCard, getNode, insertLast, xhrData, xhrPromise, threePeople, changeColor, delayP, renderEmptyCard, attr} from "./lib/index.js";



//rendingUserList 함수 만들기
// ajax (threePeople) get user List

// 유저카드생성
// 생성된 카드로 랜더링

// userList.js 에서
// renderUserCard 함수를 만들기
// 만들어진 함수 안에 createUserCard 를 던지고, renderUserCard 함수를 사용했을 때 랜더링이 잘 될 수 있도록.

const userCardContainer = getNode('.user-card-inner');


async function rendingUserList() {

  renderSpinner(userCardContainer)
  try {
    await delayP(2000) //딜레이 걸리는 상황을 연출한거다.
    
    getNode('.loadingSpinner').remove();

    let response = await threePeople.get(
      'http://localhost:3000/users'
      );
      
      let userData = response.data;
      
      // userData.forEach(data => renderUserCard(userCardContainer, data));
      userData.forEach((data) => {
        renderUserCard(userCardContainer, data);
      }) 
      
      changeColor('.user-card')
      
      gsap.to(gsap.utils.toArray('.user-card'),
      {
        x: 0,
        opacity:1,
        duration: 1.5,
        stagger: 0.3,
      })
  } catch (err) {
    renderEmptyCard(userCardContainer);
    }
      
}

rendingUserList();



function handler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  //null로 나오는 부분 막아주는 코드
  if (!deleteButton || !article) return;

  let id = attr(article, 'data-index').slice(5);

  threePeople.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = '';
    rendingUserList();
  })
}

userCardContainer.addEventListener('click', handler)












/* async function render() {
  
  let response = await threePeople.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response);
}

render()
 */


/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1') //promise
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




