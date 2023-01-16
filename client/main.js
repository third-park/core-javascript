import { addClass, clearContents, copyClipboard, getInputValue, getNode, getRandom, insertLast, isNumbericString, removeClass, showAlert, syntaxError } from './lib/index.js'

import { jujeobData } from "./data/data.js";


//인풋(id값은 모듈과 상관없이 콘솔에 적힘)
const submit = getNode('#submit');
// console.log(submit);
//resultArea로 통합!!
const resultArea = getNode('.result');
const alertError = getNode('.alert-error');
const alertSuccess = getNode('.alert-success');

/* let data = '123';
data = Number(data);
console.log(data);

//숫자는 거르고 숫자형 문자는 통과시키기 위한 유틸 함수
function isNumbericString(data) {
  
  data = Number(data);
  return !isNaN(data);
}
 */


function clickSubmitHandler(e) {
  
  e.preventDefault();
  
  //인풋안에 입력한 인풋값 가져오기
  let name = getInputValue('#nameField');
  
  //name값이 넘어가면서 배열로 나오게 된다.
  let list = jujeobData(name);

  //배열을 담은 변수 list의 length 에 0을 만들어주기 위해 -1을 하면 된다.
  let pick = list[getRandom(list.length - 1)];
  // console.log(pick);

  if (!name) {
    // syntaxError('공백은 받지 않습니다.') 에러쓰면 멈추긴 하지만 되돌릴 수 없기때문에 이럴땐 x
    showAlert(alertError, '이름을 입력해주세요', 2000)
    

    //gsap
    // gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    addClass(resultArea, 'shake');
    // setTimeout(() => {
    //   removeClass(resultArea, 'shake');
    // }, 1000);



    return; //출력안되도록 return으로 멈추게 하기
  }

  //숫자는 거르고 숫자형 문자는 통과시키기 위한 유틸 함수
  if (isNumbericString(name)) {
    showAlert(alertError,'한글이 포함되어야 합니다.',2000)
    return;
  }

  //pick값을 화면에 뿌리기 / '.result'로 쓰면 내부적으로 쿼리셀렉터를 두번 쓰게되니 위에 변수로 통합해서 한번만 가져오도록 하자!
  clearContents(resultArea)
  insertLast(resultArea, pick);
  
  resultArea.addEventListener('click',clickResultHandler)
}


function clickResultHandler() {
  
  copyClipboard(resultArea).then(() => {
    showAlert(alertSuccess, '클립보드에 복사되었습니다.', 2000);
  });
  //약속구문 -> 약속된 결과?가 나온 이후에 실행해달라는 .then을 쓸 수 있다.
  
  // showAlert(alertSuccess, '클립보드에 복사되었습니다.', 2000); //복사가 실패되더라도 알림창은 떠버리게 된다. promise를 이용해야 한다.
}



submit.addEventListener('click',clickSubmitHandler)



