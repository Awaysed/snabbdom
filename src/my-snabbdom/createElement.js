 // 真正创建节点

 export default function(vnode){

    let domNode = document.createElement(vnode.sel)
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
        vnode.elm = domNode 
        // pivot.parentNode.insertBefore(domNode,pivot)
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){

    }
    return  vnode.elm
 }
