import vnode from "./vnode";
import createElement from "./createElement";
export default function (oldVnode, newVnode) {
  // 判断第一个节点是Dom 还是虚拟节点
  console.log(4444,oldVnode.sel);
  if (oldVnode.sel == "" || oldVnode.sel == undefined) {
    // 包装成虚拟节点
    
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  // 判断oldVnode 和 newVnode是不是同一个节点
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
  } else {
    const newVnodeElm = createElement(newVnode);
    console.log(2222,oldVnode,oldVnode.elm);
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
  }
}
