import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])

var container = document.getElementById('container')

// 创建虚拟节点

// 、、

const myNode = h('a',{props:{
  href:'https://ys.mihoyo.com/?utm_source=adbdpz&from_channel=adbdpz#/',
  target: '_blank'
}},'元神，启动')
// console.log(myNode);

const myNode2 = h('div',{
  
},'周莉')
// 上树
// patch(container,myNode)
patch(container,myNode2)

// 1.只有同一虚拟节点时才进行比较(key相同 && 选择器相同)
// 2.只进行同级 不进行跨级
 
// 自己写的代码
import h2 from './my-snabbdom/h'
// const myvnode2 = h2('div',{},1)
const myvnode2 = h2('div',{},[
  h2('a',{},'周莉1'),
  h2('a',{},'周莉2'),
  h2('a',{},'周莉3'),
  h2('a',{},'周莉4'),
])
console.log(myvnode2);