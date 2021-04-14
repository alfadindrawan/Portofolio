// Smooth Scroll

let Y = 0;
let jarak = 20;

function smooth(id){
    var target = document.getElementById(id).offsetTop;

    var ScrollAnimated = setTimeout( () => {
        smooth(id);
    }, 5)

Y += jarak;

if(Y >= tujuan){
    clearTimeout(ScrollAnimated)
}
}