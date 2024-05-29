import patch from './my-snabbdom/patch'
import h from './my-snabbdom/h'
var container = document.getElementById('container')
console.log(333,container);
const myVonde = h('h1',{},'你好')
patch(container,myVonde)