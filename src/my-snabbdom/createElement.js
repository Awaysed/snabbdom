 // 真正创建节点

 export default function(vnode,pivot){
    console.log(2222,pivot,pivot.parentNode);
    let domNode = document.createElement(vnode.sel)
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
        pivot.parentNode.insertBefore(domNode,pivot)
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){

    }
 }
