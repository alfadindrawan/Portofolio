// Smooth Scroll

let Y = 0;
let jarak

function smooth(id){
    var target = document.getElementById(id).offsetTop;

    var ScrollAnimated = setTimeout( () => {
        smooth(id);
    }, 5)


}