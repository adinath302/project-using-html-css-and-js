let x = function(e){
    document.body.style.background="red"
}
let y = function(e){
    document.body.style.background="yellow"
}
btn.addEventListener('mouseover',x)
btn.addEventListener('mouseout',y)