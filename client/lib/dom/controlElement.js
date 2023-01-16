import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";




export function disableElement(node) {
  
  //(node.nodeType !== 1) 랑 같다.
  //node.nodeType !== document.ELEMENT_NODE <-이거 유틸함수로 만들어서 더 간단하게
  if (!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이여야 합니다.')
  }
  node.disabled = true;
}


export function enableElement(node) {
  
  if (!isElement(node)) {
    typeError('disableElement 함수의 인자는 DOM 요소 노드이여야 합니다.')
  }
  node.disabled = false;
}



















