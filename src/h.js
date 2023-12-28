import vnode from './vnode'
export default function (sel,data,c) {
    if(arguments.length != 3){
        throw new Error('参数必须为三个')
    }
    // 检查参数c的类型
    if(typeof c =='string' || typeof c == 'number'){
        return vnode(sel,data,undefined,c,undefined)
    }
}