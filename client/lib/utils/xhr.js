
/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded  // 로딩이 완료된
3:interative // 인터렉티브
4:complete // 완료
 */




//4. xhrData 함수 만들기 method, url <-변수
//6. 받자마자 구조분해할당하기 => 초기값 설정도 가능
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-control-Allow-Origin' : '*',
},
} = {}) { //기본값을 객체로 하기.

  // const {method, url, body} = options

  const xhr = new XMLHttpRequest();
  
  // 1. 비동기 통신 오픈
  xhr.open(method, url);

  //7. setRequestHeader 로 키와 값 던지기 -> entries와 forEach로 배열구조분해할당
/*   Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
 */  
  

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr; //5. 객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log('통신 성공');

        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
        onFail('통신 실패');
      }
  })
  
  // 2. 서버에 요청 (open과 세트다.)
  xhr.send(JSON.stringify(body));
}

//기본실행
/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail: (err) => {
    console.log(err);
  }
})
 */



/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
});
 */


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


//8. 함수 안의 함수로 실행
//get은 위에 기본값으로 'GET'이 지정되어있기 때문에 굳이 method를 안 넣어도 된다.
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}


/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)
 */










