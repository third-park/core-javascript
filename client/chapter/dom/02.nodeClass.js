/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement


/* 노드 정보 ------------------------------------------------------------- */

let first = getNode('.first');

console.log(first);


// - nodeType
console.log(first.nodeType === document.ELEMENT_NODE);
console.log(first.nodeType === 1); //요소 노드 찾는

// - nodeName (vs. tagName)
console.log(first.nodeName === 'SPAN');
console.log(first.tagName !== 'SPAN');


/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------많이 쓰인다!! */

// - innerHTML
first.innerHTML = ' like lion';

// * 기존 내용 삭제
first.innerHTML = '';

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += ' <strong>sapari</strong>';

// - textContent
console.log(first.textContent); //암것도 안 넣었을 땐 get 의 역할
// * 요소 내의 텍스트에 접근
first.textContent = '세렝게티' //문자를 넣으면 set
// * 태그는 제외하고 오로지 텍스트만 추출


/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

// first.hidden = true; //css 에 준 inline-block 이 우선순위가 더 높아서 안 사라짐ㅋ
getNode('h1').hidden = false;




