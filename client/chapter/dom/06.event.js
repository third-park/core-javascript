/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */



/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */


const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');


// first.addEventListener('click', function(){}){
  
// }

function handler() {
  console.log('hit !');

  // css('.second','display','none')  눌렀을떄 세컨드 지우기
  // getNode(".second").style.display = "none";
}

first.addEventListener('click', handler); //이것만이라도 제대로 익히자.



ground.addEventListener('click', function (e) {
  
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`;
})


/* ground.addEventListener('mousemove',function(e){
  console.log(e.offsetX, e.offsetY);
})
 */







// second.addEventListener('click', function (){
//   first.removeEventListener('click', handler);
// })
//???????


/* 밑에 클로저를 이용한 bindEvent 함수로도 만들 수 있다는 것만 알아두자...어렵. */
// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   //정규표현식을 이용한 필터링(유틸함수다.)
//   if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
//     typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
//   }

//   node.addEventListener(type, handler);
//   return () => node.removeEventListener(type, handler);
// }

// const off = bindEvent('.first', 'click', handler);

// bindEvent('.first', 'click', handler);




// - addEventListener
// - removeEventListener

