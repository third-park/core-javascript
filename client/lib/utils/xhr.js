
/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded  // 로딩이 완료된
3:interative // 인터렉티브
4:complete // 완료
 */




//4. xhrData 함수 만들기 method, url

function xhrData(method, url, body) {

  const xhr = new XMLHttpRequest();
  
  // 1. 비동기 통신 오픈
  xhr.open(method, url);


  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr; //5. 객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log('통신 성공');
        console.log(JSON.parse(response));
      }
    } else {
        console.log('통신 실패');
      }
  })
  
  // 2. 서버에 요청 (open과 세트다.)
  xhr.send(JSON.stringify(body));
}

xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
});




/* const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);

// 1. 비동기 통신 오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// console.log(xhr.readyState);

// 3. 'readystatechange가 적용될때마다 발생하는 addEventLetener 이다. 
xhr.addEventListener('readystatechange', () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log('통신 성공');
    }
  } else {
      console.log('통신 실패');
    }
})

// 2. 서버에 요청 open과 세트다.
xhr.send();
 */