function getAttr(node, prop) {
  // node = '.first'
  // prop = 'class'

  if (typeof node === 'string') {
    node = getNode(node)
  }

  

  return node.getAttribute(prop)
}

function setAttr(node,prop,value) {
  //validation : 확인
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
  //속성들을 노드의 데이터셋맵에 저장해두기위함.(비표준속성들과의 충돌도 방지하고 데이터셋맵에 저장된 데이터 접근도 용이하다.)
  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value; //객체에서 key를 받을땐 []로 써야한다. first.dataset.value = 'hello' 라는 결과를 내보내는 식.
  }
  
  
  if (!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop,value) 
}


// const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);
function attr(node, prop, value) {

  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }

  //return !value ? getAttr(node,prop) : setAttr(node,prop,value);

}
