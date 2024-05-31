 // 真正创建节点

 export default function createElement(vnode){

    let domNode = document.createElement(vnode.sel)
    if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text
    }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        // children是数组 循环它
        for (let i = 0; i < vnode.children.length; i++) {
            const chNode = vnode.children[i]
            // 递归
            const ch  = createElement(chNode)
            // 插入到该标签的children 中
            domNode.appendChild(ch)
        }
    }
    vnode.elm = domNode 
    return  vnode.elm
 }
