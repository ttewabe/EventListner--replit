// document.querySelector("span").onmouseover = makeBlue;
// document.querySelector("span").onmouseout = makeYellow;

let x = document.querySelector("span")
x.addEventListener("mouseover", makeTextBlue);
x.addEventListener("mouseout", makeTextYellow);

function makeTextBlue(){
    x.style.color ="red"
}
function makeTextYellow(){
    x.style.color ="yellow"
}
