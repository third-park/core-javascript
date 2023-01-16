import {attr, clearContents, diceAnimation, disableElement, enableElement, getNode, getNodes, insertLast, invisibleElement, memo, visibleElement } from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기


// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기


// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

// [초기화 시키기]
// 1.clearContents 로 정보 지우기
// 2.total, count 초기화
// 3. 스크롤 밑으로 보내기
// 4. 메모이제이션 패턴



//유사배열로 만들어주기! (배열의 구조 분해 할당)
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
const recordButton = getNode('.buttonGroup > button:nth-child(2)');
const resetButton = getNode('.buttonGroup > button:nth-child(3)');
 */

memo('@tbody',()=>getNode('.recordListWrapper tbody'));

/* ------------------------------------------------------------------- */
/* render */
/* ------------------------------------------------------------------- */
const recordListWrapper = getNode('.recordListWrapper');
let count = 0;
let total = 0;
// redux
// mobx


function renderRecordListItem() {

  let diceValue = +attr(memo('cube'), 'data-dice');

  let template = /* html */`
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
    `
  insertLast(memo('@tbody'),template)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}

/* -------------------------------------------------------------------- */
/* event */
/* -------------------------------------------------------------------- */

/* //함수 안에 넣으면 부정연산자로 값을 바꾼들 클릭으로 함수가 재실행 됐을때 이 값이 부여되기 때문에 의미가 없어지므로 밖에 있어야 한다.
//클로저를 써서 변수를 보호해준다면 안에 넣을 수 있다.
let stopAnimation;
let isRoling = false;
 */

//클로저
const handleRollingDice = () => {
  
  let stopAnimation;
  let isRoling = false;
 
  return () => {
    if (!isRoling) {
      stopAnimation = setInterval(diceAnimation,500)
      disableElement(recordButton)
      disableElement(resetButton)
      
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton)
      enableElement(resetButton)

    }
    // 반전을 안해주면 첫번째 클릭만 계속 된다.
    // 반전을 해줘야 토글역할이 됨. 
    // isRoling은 false이므로 첫번째 클릭으로 true가 되면 그게 다시 isRoling으로~이게 반복되면서 토글이 됨.
    isRoling = !isRoling;
  }

}
//IIFE 패턴
/* const handlerRollingDice = (() => {
  
  let stopAnimation;
  let isRoling = false;
 
  return () => {
    if (!isRoling) {
      stopAnimation = setInterval(diceAnimation,500)
    } else {
      clearInterval(stopAnimation);
    }
    isRoling = !isRoling;
  }

})()

rollingDiceButton.addEventListener('click',handlerRollingDice) */

const handleRecord = () => {
  visibleElement(recordListWrapper)

  renderRecordListItem();
}

const handleReset = () => {

  count = 0;
  total = 0;

  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
}



rollingDiceButton.addEventListener('click',handleRollingDice()) //한번만 실행하면 return한 함수 자체를 반환하기 때문에 handlerRollingDice()()로 함수안에 함수도 실행시켜줘야 한다.
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)

