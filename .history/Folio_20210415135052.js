// Smooth Scroll

let Y       = 0;
let jarak   = 17;

function SmoothScroll(id){
    var target = document.getElementById(id).offsetTop;

    var ScrollAnimated = setTimeout( () => {
        SmoothScroll(id);
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

// Fungsi Validasi

function validasi(form){
    var terima = true;

    for(i=0; i<3; i++){
        if(form[i].value.trim().length <= 0){


            form[1].style.borderColor = 
        }
    }
}