import createElement from "./createElement";
export default function (oldVnode, newVnode) {
  // 新旧Node是否为同一个对象
  if (oldVnode === newVnode) return;
  // 判断新node是否有text属性
  if (
    newVnode.text != undefined &&
    (newVnode.children == undefined || newVnode.children.length == 0)
  ) {
    // 有text属性
    if (newVnode.text != oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  }
}
