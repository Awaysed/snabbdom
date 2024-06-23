import patch from './my-snabbdom/patch'
import h from './my-snabbdom/h'
var container = document.getElementById('container')
console.log(333,container);
// const myVonde = h('h1',{},'你好')


const myVonde = h('ul',{},[
    h('h1',{key:'A'},'你'),
    h('h1',{key:'B'},'好'),
    h('h1',{key:'C'},'呀'),
])
const buttonVnode = h('ul',{},[
    h('h1',{key:'A'},'你'),
    h('h1',{key:'B'},'好'),
    h('h1',{key:'C'},'呀1'),
])
patch(container,myVonde)
var Button = document.getElementById('button')
Button.onclick =  function(){
    patch(myVonde,buttonVnode)
}