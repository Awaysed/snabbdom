import vnode from './vnode'
export default function (sel,data,c) {
    if(arguments.length != 3){
        throw new Error('参数必须为三个')
    }
    // 检查参数c的类型
    if(typeof c =='string' || typeof c == 'number'){
        return vnode(sel,data,undefined,c,undefined)
    }

    
    if(Array.isArray(c)){
        let children =  []
        for (let i = 0; i < c.length; i++) {
            if(!(typeof c[i] ===  'object' && c[i].hasOwnProperty('sel'))){
                throw new Error('传入的参数必须为h项')
            }
            children.push(c[i])
        }
        return vnode(sel,data,children,undefined)
    }
    if(typeof c ===  'object' && c.hasOwnProperty('sel')){
        return c
    }
    throw new Error('传入的参数类型不对')
}
