function addClass(node,className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof className !== 'string') {
    typeError(`addClass 함수의 두 번째 인자는 문자타입 이어야 합니다.`)
  }
  node.classList.add(className)

}


function removeClass(node,className) {
//'' 빈문자를 넣었을떄 class 모두를 지워버리는 매서드 추가 위치가 중요하다. return으로 실행 후 종료되도록 한다.
  if (!className) {
    node.className = ''
    return;
  }
  if (typeof node === 'string' || typeof className === 'string') {
    node = getNode(node);
  } else {
    typeError(`removeClass 함수의 두 번째 인자는 문자타입 이어야 합니다.`)
  }

  node.classList.remove(className)
}


function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') typeError(`toggleClass 함수의 두 번째 인자는 문자타입 이어야 합니다.`)

  node.classList.toggle(className);
}



//자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 x
// [] 각괄호 표기법으로 가꼬올 수 있다.
function getCss(node, prop) {
  
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  //대상에게 속성을 받아서 이 속성 값이 뭐야? 라는걸 보여줘야 하기 때문에 return.
  return getComputedStyle(node)[prop];
}
         //정확한 css 속성인지는 어케 알까? prop인자가 document.body.style에 있는지 확인해주면 된다.
// getCss('.first', 'font-size')


//대상에게 원하는 css 속성을 추가 => set
function setCss(node, prop, value) {
  
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!(prop in document.body.style)) {
    syntaxError(`setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.`)
  }

  if (!value) {
    syntaxError(`setCss 함수의 세 번째 인자는 필수값 입니다.`)
  }
  
  node.style[prop] = value;
}

//삼항연산자로ㅎㅎ -> css로 묶어버리면 setCss에서 value 값이 없을때 에러메세지가 출력되도록 했던 조건문은 없어도 상관없어진다.
const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value)
/* function css(node, prop, value) {
  if (!value) {
    return getCss(node,prop);
  } else {
    setCss(node,prop,value)
  }
}
 */
