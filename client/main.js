import { diceAnimation, disableElement, enableElement, getNode, getNodes } from "./lib/index.js";


//유사배열로 만들어주기!
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');


/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
const recordButton = getNode('.buttonGroup > button:nth-child(2)');
const resetButton = getNode('.buttonGroup > button:nth-child(3)');
 */


/* //함수 안에 넣으면 부정연산자로 값을 바꾼들 클릭으로 함수가 재실행 됐을때 이 값이 부여되기 때문에 의미가 없어지므로 밖에 있어야 한다.
//클로저를 써서 변수를 보호해준다면 안에 넣을 수 있다.
let stopAnimation;
let isRoling = false;
 */


//클로저
const handlerRollingDice = () => {
  
  let stopAnimation;
  let isRoling = false;
 
  return () => {
    if (!isRoling) {
      stopAnimation = setInterval(diceAnimation,500)
      disableElement(recordButton)
      disableElement(resetButton)
      
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = true;
      enableElement(recordButton)
      enableElement(resetButton)

    }
    // 반전을 안해주면 첫번째 클릭만 계속 된다.
    // 반전을 해줘야 토글역할이 됨. 
    // isRoling은 false이므로 첫번째 클릭으로 true가 되면 그게 다시 isRoling으로~이게 반복되면서 토글이 됨.
    isRoling = !isRoling;
  }

}

rollingDiceButton.addEventListener('click',handlerRollingDice()) //한번만 실행하면 return한 함수 자체를 반환하기 때문에 handlerRollingDice()()로 함수안에 함수도 실행시켜줘야 한다.


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