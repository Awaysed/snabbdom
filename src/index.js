import patch from './my-snabbdom/patch'
import h from './my-snabbdom/h'
var container = document.getElementById('container')
console.log(333,container);
// const myVonde = h('h1',{},'你好')
const myVonde = h('ul',{},[
    h('h1',{},'你'),
    h('h1',{},'好'),
    h('h1',{},'呀'),
])
patch(container,myVonde)
const buttonVnode = h('div',{},'改变了')
var Button = document.getElementById('button')
Button.onclick =  function(){
    patch(myVonde,buttonVnode)
}