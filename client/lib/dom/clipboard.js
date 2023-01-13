import { getNode } from "./getNode.js";


export function copyCilpboard(node) {
  
  if (typeof node === 'string') {
    node = getNode(node);
  }

  navigator.clipboard.writeText(node.textContent);

}