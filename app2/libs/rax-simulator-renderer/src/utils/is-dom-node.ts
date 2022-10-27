// @ts-nocheck 
export function isDOMNode(node: any): node is Element | Text {
  if (!node) return false;
  return node.nodeType && (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE);
}
