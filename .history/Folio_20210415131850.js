// Smooth Scroll

let Y       = 0;
let jarak   = 15;

function SmoothScroll(id){
    var target = document.getElementById(id).offsetTop;

    var ScrollAnimated = setTimeout( () => {
        smooth(id);
    }, 5)

Y += jarak;

if(Y >= target){
    clearTimeout(ScrollAnimated);
    Y = 0;
}else {
    window.scroll(0, Y)
}
return false;
}