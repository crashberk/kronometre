
// Araçlar modülümü import et
// gerekli metodlarına böylelikle ulaşabiliriz
var araclar = require('./araclar');

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
        if (typeof araclar.zamanAsimiDegeriGoster() !== 'undefined' && araclar.zamanAsimiDegeriGoster() !== null) {
            sayacDegeri = Number(sayacEl.innerHTML);
        }

        // sayac değerine başlangıç değerini ata
        araclar.geriSaydir(sayacEl, sayacDegeri);

    });


    durdurEl.addEventListener('click', function (event) {
        araclar.durdur();
    });

    sifirlaEl.addEventListener('click', function (event) {
        araclar.sifirla(sayacEl);
    });

});