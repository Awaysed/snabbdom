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
const buttonVnode = h('ul',{},[
    h('h1',{},'你'),
    h('h1',{},'好'),
    h('h1',{},'呀'),
    h('h1',{},'哇'),
])
patch(container,myVonde)
var Button = document.getElementById('button')
Button.onclick =  function(){
    patch(myVonde,buttonVnode)
}