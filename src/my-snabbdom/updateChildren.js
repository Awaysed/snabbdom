import createElement from "./createElement";
import patchVnode from "./patchVnode";
function checkSameVnode(a, b) {
  return a.sel === b.sel && a.key === b.key;
}
export default function updateChildren(parentElm, newCh, oldCh) {
  console.log("updateChildren", parentElm, newCh, oldCh);
  let keyMap = {};
  //旧前
  let oldStartIdx = 0;
  // 新前
  let newStartIdx = 0;
  // 旧后
  let oldEndIdx = oldCh.length - 1;
  // 新后
  let newEndIdx = newCh.length - 1;

  // 旧前节点
  let oldStartVnode = oldCh[0];
  // 新前节点
  let newStartVnode = newCh[0];
  // 旧后节点
  let oldEndVnode = oldCh[oldEndIdx];
  // 新后节点
  let newEndVnode = newCh[newEndIdx];
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    console.log("★", newStartIdx, newEndIdx, oldStartIdx, oldEndIdx);
    // 旧前-新前命中
    if (checkSameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    // 旧后-新后命中
    else if (checkSameVnode(oldEndIdx, newEndVnode)) {
      patchVnode(oldEndIdx, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 旧前-新后命中(将新前指向 --旧后之后)
    else if (checkSameVnode(oldStartVnode, newEndVnode)) {
      console.log(3);
      patchVnode(oldStartVnode, newEndVnode); // ?
      parentElm.insertBefore(oldStartVnode.elm, newEndVnode.elm);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 旧后-新前(将新前移动-- 旧前之前)
    else if (checkSameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode); // ?
      parentElm.insertBefore(oldStartVnode.lem, newStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    // 四种都没有命中
    else {
      // 寻找key的map 记录老的节点所以key的下标
      if (!keyMap) {
        keyMap = {};
        for (let i = oldStartIdx; i < oldEndIdx; i++) {
          const key = oldCh[i].key;
          keyMap[key] = i;
        }
      }
      console.log(5555, keyMap);
      const idxInOld = keyMap[newStartVnode.key];
      // 判断新节点是否在老的节点中存在
      if (idxInOld == undefined) {
        // 不存在
        // 创建新的节点直接插入到老节点后面
        parentElm.insertBefore(createElement(newStartVnode),oldEndVnode.elm)
      } else {
        // 存在
        const elmToMove = oldCh[idxInOld];
        patchVnode(elmToMove, newStartVnode);
        oldCh[idxInOld] = undefined; // 表示这项处理完了
        parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
      }
      newStartVnode = newCh[newStartIdx++];
    }
  }
  // 插入新节点(找到最后有多余的)
  if (newStartIdx <= newEndIdx) {
    const before = oldCh[newEndIdx] == null ? null : oldCh[newEndIdx].elm;
    console.log(6666, before, newCh[newEndIdx + 1]);
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      console.log(6666, newCh[i]);
      parentElm.insertBefore(newCh[i].elm, before);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldCh[i]);
    }
  }
}
