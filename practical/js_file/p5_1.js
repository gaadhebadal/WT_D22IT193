let p = document.getElementById("p"); 
function r() {
       p.innerHTML = `handle by onclick in html`
}
let btn1 = document.getElementById("b1") 
let btn2 = document.getElementById("b2") 
btn1.onclick = () => {
       p.innerHTML = `handle with add event listener in js`
}
btn2.onclick = function () {
       p.innerHTML = `handle by with DOM Onclick property in js`
}