 // 真正创建节点

 export default function createElement(vnode){

    let domNode = document.createElement(vnode.sel)
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
        
        // pivot.parentNode.insertBefore(domNode,pivot)
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        for (let i = 0; i < vnode.children.length; i++) {
            const chNode = vnode.children[i]
            const ch  = createElement(chNode)
            console.log(6666,ch,chNode);
            domNode.appendChild(ch)
          
        }
        console.log(5555,domNode,vnode);
    }
    vnode.elm = domNode 
    return  vnode.elm
 }
