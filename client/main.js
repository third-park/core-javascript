/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'warn' */

// 1. 인풋 밸류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5.  화면에 출력하기


const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');


//유틸함수 퍼스트인풋벨류 가꼬오는,
function getInputValue(node) {
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}

//값을 안넣었을때 함수를 유틸함수로
function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}



//더하는 연산도 쪼개서 함수화 한거어어어임
const sum = (valueA, valueB) => valueA + valueB;

function handler(e) {
  //form의 기본동작 삭제 메서드
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue)

  console.log(total);

  clearContents(result);

  insertLast(result, total);

}

//실시간 값이 변경될떄 찍어줄 함수 만들기
function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue)

  clearContents(result);
  insertLast(result, total);
}

//클릭이벤트 걸기
done.addEventListener('click', handler);

//실시간 변경할 함수만들기 'change'는 실시간 값을 알아차려주는? 핸들러
firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)







