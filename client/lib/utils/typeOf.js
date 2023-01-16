



export function isNumbericString(data) {
  
  data = Number(data);
  return !isNaN(data);
}


export function isElement(node) {
  return node.nodeTyte === document.ELEMENT_NODE
}