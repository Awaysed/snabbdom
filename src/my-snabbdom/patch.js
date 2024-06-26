import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";
export default function (oldVnode, newVnode) {
  // 判断第一个节点是Dom 还是虚拟节点
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
    patchVnode(oldVnode, newVnode);
  } else {
    const newVnodeElm = createElement(newVnode);
    // 插入新节点
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
