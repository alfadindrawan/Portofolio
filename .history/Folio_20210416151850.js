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
    let terima = true;
    let errortext = "";

    for(i=0; i<3; i++){
        if(form[i].value.trim().length <= 0){

            switch (i) {
                    case 0: errortext = 'Nama';
                    break;
                    case 1: errortext = 'Email';
                    break;
                    case 2: errortext = 'Pesan';
                    break;
            
                default:
                    break;
            }

            if(form[i].nextElementSibling.className != 'error'){
            form[i].style.borderColor = 'red';
            form[i].insertAdjacentHTML('afterend', "<div class='error'>"+errortext+" Tidak boleh kosong</div>");
            }
            
            terima = false;
        }else{

            if(form[i].nextElementSibling.className == 'error'){
                form[i].style.borderColor = '#0074b9';
                form[i].nextElementSibling.remove();
                }

        }
    }

    return terima;
}

// Perpindahan Galeri

let hasil_karya = document.getElementById('target_gambar');
let array_gambar       = document.getElementById('karya_lain').children;
let penomoran   = 0;

function pindah_gambar(gambar){
    hasil_karya.src = gambar.getAttribute('src');
    penomoran = gambar.className;
}

function sesudah(){
    penomoran += 1;
    if(penomoran > 3) {
        penomoran = 
    }
    target_gambar.src = array_gambar[penomoran].getAttribute('src');
}