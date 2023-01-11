/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */


let first = getNode('.first')

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute('class'));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class'));
console.log(first.getAttribute('class') === 'first');

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'box');
first.setAttribute('some', 'hello'); //이렇게 비표준을 설정하는건? 좋지 못한 방법 data- 를 써야지.!
// first.setAttribute('.first', 'is-active');
// first.id = 'box'

// - elementNode.removeAttribute(name) – 속성값을 지움
// first.removeAttribute('some');

// first.setAttribute('some','')

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
// for of 를 쓸 수 있냐 없냐? 이렇게도 되지만 복잡하다.
for (let i = 0; i < first.attributes.length; i++) {
  console.log(first.attributes[i]);
}
// iterator 한 속성이므로 사용 가능, 배열과 객체를 순환해야 할 때는 for of 가 더 낫다.
for (let value of first.attributes) {
  console.log(first.attributes); //배열같이 생긴 유사배열이다. prototype에 symbol iterator 인 iterable 한 요소이기 땜
  // console.log(value);
}


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


first.dataset.play = 'playing' //set

console.log(first.dataset.play); //get


// 유틸 함수
// get 함수 만들기

// function getAttr(node, prop) {
//   // node = '.first'
//   // prop = 'class'

//   if (typeof node === 'string') {
//     node = getNode(node)
//   }


//   return node.getAttribute(prop)
// }

// getNode('first').getAttribute('class');
// getAttr(first, 'data-play')
// console.log(getAttr('.first', 'class'));

// console.assert(getAttr('.first','class') === 'first') //잘짯는지 검증할때

// set 함수 만들기


// function setAttr(node,prop,value) {
//   //validation : 확인
//   if (typeof node === 'string') node = getNode(node);
//   if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
//   //data-vlue에게 .includes를 하고 'data'를 던졌을때 값의 속성?이 뭔지 알려고 쓴 조건문이다.
//   if (prop.includes("data")) {
//     let rest = prop.slice(5);
//     node.dataset[rest] = value; //객체에서 key를 받을땐 []로 써야한다. first.dataset.value = 'hello' 라는 결과를 내보내는 식.
//   }
  
//   if (!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

//   node.setAttribute(prop,value) 
// }

//first 노드 안에 data-value의 값으로 hello를 지정하겠다. 라는 함수다.
// setAttr('.first', 'data-value', 'good');




// function attr(node, prop, value) {

//   if (!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }

//   //return !value ? getAttr(node,prop) : setAttr(node,prop,value);

// }

attr('.first', 'data-value', 'toLate');



//common 함수 만들기

                  



/* 즉시실행함수 예시
(function () {
  let first = $(".first");
})(getNode); */