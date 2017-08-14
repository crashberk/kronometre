var timeoutID;

function sayiMi(deger){
    var regexp = /^[0-9]+$/g;    
    return regexp.test(deger); 
}

function zamanAsimiDegeriGoster(){
    return timeoutID;
}

/**
* Parametre olarak verilen sayaç değerini yine parametre olarak
* verilen HTML elemanina yazar. Her saniye kendi çağrıp 
* değeri azaltır
* 
* @param {HTMLElement} sayacEl - Değerin yazılacağı eleman
* @param {Number }sayacDegeri - Sayacin o anki değeri
* 
* @returns
*/
function geriSaydir(sayacEl, sayacDegeri) {
    // sayac degerini her saniye azalt ve göster
    sayacEl.innerHTML = sayacDegeri;

    timeoutID = window.setTimeout(function () {
        if (sayacDegeri > 0) {
            geriSaydir(sayacEl, sayacDegeri - 1);
        }
        if(sayacDegeri == 0){
            timeoutID = null;
        }
    }, 1000);
}

function durdur() {
    window.clearTimeout(timeoutID);
}

function sifirla(sayacEl) {
    window.clearTimeout(timeoutID);
    sayacEl.innerHTML = "";
    timeoutID = null;
}

exports.sifirla = sifirla;
exports.durdur = durdur;
exports.geriSaydir = geriSaydir;
exports.zamanAsimiDegeriGoster = zamanAsimiDegeriGoster;
exports.sayiMi = sayiMi;