export default function (sel,data,children,text,elm) {
    let key = data?.key || undefined 
    return {
        sel,data,children,text,elm,key
    }
} 
// 虚拟节点的属性
// {
//     children:undefined,
//     data:{},
//     elm:undefined,
//     key:undefined,
//     sel:'div',
//     text:'文字'
// }