/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */ //얘네를 주로 쓴다.
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

//배열 구조분해 할당을 여기서도

// let [first, second] = document.querySelectorAll('span');

// console.log(second);



// function getNodes(node) {
//  return document.querySelectorAll(node)
// }



  // console.log(getNode('.first')); //<span class="first">hello</span>


/* 문서 대상 확인 */
// matches : 안에 매칭되어있는 게 맞는지 확인
// contains : 부모 안에 자식이 있는지 물어보는 기능
// - matches


// * 선택자 안에 class || id 를 가지고 있는 대상이 있어?
console.log(getNode(".first").matches(".first"));

// - contains
// * 선택자의 자식들 중에 해당 element 가 있어?
console.log(getNode("h1").contains(getNode(".first")));;


let first = getNode(".first");

let clicked = false;
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }
  clicked = !clicked;
});

/* ------------------------------------------------ 스터디*/
// console.log(2 ** 3)

// function 거듭제곱(왼쪽값 = 1, 오른쪽값 = 2) {
// 	return 왼쪽값 ** 오른쪽값
// }

// 전통적인 프로토타입 상속
// Number.prototype.거듭제곱 = function (오른쪽값 = 2) {
// 	// debugger
// 	return this.valueOf() ** 오른쪽값
// }

// 클래스 방식 프로토타입 상속
// class MyNumber extends Number {
//   거듭제곱(오른쪽값 = 2) {
//     return this.valueOf() ** 오른쪽값
//   }
// }

// a는 원시값
// const a = 2
// // 래퍼객체
// a.
// new Number(a).

// ''
// new String('').

// console.log(a.거듭제곱(2))
// console.log(a.거듭제곱(3))
// console.log(a.거듭제곱(4))

// const a = 2
const a = new Number(2)
console.log(a.valueOf() === 2)
//진짜 값을 빼올려면 valueOf() 를 써야한다.
//프로토타입 상속으로 기능을 확장할 수 있다. <- 폴리필 사용에 씜
//Number 뒤에 .을 찍는 순간 자스는 Number에 래퍼객체를 씌우더라 Number(a) 일케.