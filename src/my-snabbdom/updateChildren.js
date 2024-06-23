import patchVnode from './patchVnode' 
 function checkSameVnode(a,b) {
    console.log(6666,a,b);
    return a.sel === b.sel  && a.key === b.key
    
 }
 export default function updateChildren(parentElm,newCh,oldCh){
    console.log('updateChildren',parentElm,newCh,oldCh);
    //旧前
    let oldStartIdx = 0
    // 新前
    let newStartIdx = 0
    // 旧后
    let oldEndIdx = oldCh.length -  1
    // 新后
    let newEndIdx =  newCh.length - 1

    // 旧前节点
    let oldStartVnode = oldCh[0]
    // 新前节点
    let newStartVnode = newCh[0]
    // 旧后节点
    let oldEndVnode = oldCh[oldEndIdx]
    // 新后节点
    let newEndVnode = newCh[newEndIdx]
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        // 旧前-新前命中
        console.log('00000',oldCh,oldStartVnode,oldCh[0]);
        if(checkSameVnode(oldStartVnode,newStartVnode)){
            patchVnode(oldStartVnode,newStartVnode)
            oldStartVnode = oldCh[++oldStartVnode]
            newStartVnode = newCh[++newStartIdx]
        }
    }
 }