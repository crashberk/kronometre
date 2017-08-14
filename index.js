// global zaman aşımı numarası
var zamanAsimiNosu;

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

    zamanAsimiNosu = window.setTimeout(function () {
        if (sayacDegeri > 0) {
            geriSaydir(sayacEl, sayacDegeri - 1);
        }

    }, 1000);
}

function durdur(timeoutID) {
    window.clearTimeout(timeoutID);
}

function sifirla(sayacEl, timeoutID) {
    window.clearTimeout(timeoutID);
    sayacEl.innerHTML = "";
    zamanAsimiNosu = null;
}



window.addEventListener("load", function (event) {

    // sayfadaki buton elemanini aliyoruz
    var butonEl = document.getElementById('baslat');
    var durdurEl = document.getElementById('durdur');
    var sifirlaEl = document.getElementById('sifirla');

    var sayacBaslangiciEl = document.getElementById('sayac_baslangici');
    var sayacEl = document.getElementById('sayac');

    // buton elemanininin 'tiklanma/click' olayini dinleyecek
    // metodu yaziyoruz
    butonEl.addEventListener('click', function (event) {

        var sayacDegeri = Number(sayacBaslangiciEl.value);
        if (typeof zamanAsimiNosu !== 'undefined' && zamanAsimiNosu !== null) {
            sayacDegeri = Number(sayacEl.innerHTML);
        }

        // sayac değerine başlangıç değerini ata
        geriSaydir(sayacEl, sayacDegeri);

    });


    durdurEl.addEventListener('click', function (event) {
        durdur(zamanAsimiNosu);
    });

    sifirlaEl.addEventListener('click', function (event) {
        sifirla(sayacEl, zamanAsimiNosu);
    });

});