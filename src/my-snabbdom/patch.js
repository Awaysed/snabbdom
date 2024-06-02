import vnode from "./vnode";
import createElement from "./createElement";
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
    // 新旧Node是否为同一个对象
    if (oldVnode === newVnode) return;
    // 判断新node是否有text属性
    if (
      newVnode.text != undefined &&
      (newVnode.children == undefined || newVnode.children.length == 0)
    ) {
      // 有text属性
      if(newVnode.text != oldVnode.text){
        oldVnode.elm.innerText = newVnode.text
      }
    } else {
      // 没有text属性
      // 判断老的有没有children
      if(oldVnode.children != undefined && oldVnode.children.length == 0){
        // 有

      }else{
        // 没有 新的有
        oldVnode.elm.innerText = ''
        for (let i = 0; i < newVnode.children.length; i++) {
          const dom = createElement(newVnode.children[i])
          oldVnode.elm.appendChild(dom)
        }

      }

    }
  } else {
    const newVnodeElm = createElement(newVnode);
    // 插入新节点
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
