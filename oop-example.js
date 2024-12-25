
const nummbers = [1, 2, 3, 4];
const squared = nummbers.map(num => num ** 2);
console.log(squared)

/* filter orijinal diziyi değiştirmez. */

const number = [10, 20, 30, 40];
const greaterThanTwenty = number.filter(num => num > 20);
console.log(greaterThanTwenty)

/* reduce: diziyi tek bir değer indirgemek için kullanılır. */

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum)

/* forEach : döngü değildir. sadece her eleman için işlem yapar. */

const numberr = [1, 2, 3, 4];
numberr.forEach(num => console.log(num * 2));

/* ornek : fiyatları KDV ile güncelleme */

const urunler = [
    { isim: "Telefon", fiyat: 10000 },
    { isim: "Bilgisayar", fiyat: 20000 },
    { isim: "Tablet", fiyat: 8000 },
];

const yeniurun = urunler.map(function (urun) {
    return {
        isim: urun.isim,
        fiyat: urun.fiyat * 1.18
    }
})

console.log(yeniurun);

/* filter ile fiyat aralığındaki urunleri listele. */
const fiyatAraligi = urunler.filter(function (urun) {
    return urun.fiyat > 15000;
});

console.log(fiyatAraligi)

/* reduce ile fiyat toplamı */

const topla = urunler.reduce(function (toplam, urun) {
    return toplam + urun.fiyat
}, 0)
console.log(topla)

/* forEach ile urun adlarını ekrana yazdıralım. */

const liste = urunler.forEach(element => {
    console.log(element.isim)
})

/* ogrenci notlara harf notlarına dönüştürme */

const ogrenciler = [
    { isim: "Ali", not: 85 },
    { isim: "Ayşe", not: 92 },
    { isim: "Fatma", not: 76 },
    { isim: "Mehmet", not: 60 },
];

function notuHarfleDonustur(not) {
    if (not >= 90) return 'AA';
    else if (not >= 80) return 'BB';
    else if (not >= 70) return 'CC';
    else if (not >= 60) return 'DD';
    else return 'F';
}

ogrenciler.forEach(ogrenci => {
    ogrenci.harfNotu = notuHarfleDonustur(ogrenci.not);
});

console.log(ogrenciler);

// ikinci yol

harfnotu1 = ogrenciler.map (function(ogr){
    let harfnotu =""
    if (ogr.not >90) harfnotu = "AA";
    else if(ogr.not >80) harfnotu = "BB";
    else if (ogr.not> 70 ) harfnotu = "CC";
    else if (ogr.not > 60) harfnotu = "DD";
    else harfnotu ="FF"

    return {
        isim : ogr.isim ,
        not : ogr.not,
        harfnotu : harfnotu
    }
});

console.log(harfnotu1)

// bir öğrenci listesinden yaşı 18'den küçük olanları seçme

const ogrenci = [
    {isim : "Ali", yas : 16},
    {isim : "Ayşe", yas : 19},
    {isim : "Fatma", yas : 17},
    {isim : "Mehmet", yas : 22},
];

const age = ogrenci.filter(function (yas1) {
    return yas1.yas < 18;
});
console.log(age)

// bir alışveriş sepetindeki ürünlerin toplamı 

const sepet = [
    {urun : "Telefon", adet:2, fiyat: 5000},
    {urun : "Kulaklık", adet:1, fiyat: 800},
    {urun : "Kılıf", adet : 3 , fiyat : 100},
];

const toplama = sepet.reduce(function (toplam, urun) {
    return toplam + urun.fiyat*urun.adet
}, 0)
console.log(toplama)

// bir ürün listesindeki stok durumlarını kontrol edelim.

const urun2 = [
    {isim: "Telefon", stok:5},
    {isim: "Tablet" , stok : 0},
    {isim :"Laptop", stok:3},
];

urun2.forEach(function (urun4){
    if (urun4.stok >0) {
        console.log(urun4.isim + ":" + urun4.stok);
    }
    else{
        console.log(urun4.isim+ ":"+ "stok bulunamadı.")
    }
})

// örnek

const ogrenciler2 = [
    { isim: "Ali", yas: 16, not: 85 },
    { isim: "Ayşe", yas: 19, not: 92 },
    { isim: "Fatma", yas: 22, not: 76 },
    { isim: "Mehmet", yas: 17, not: 60 },
];

//18 yaşından büyük olanlar

const age3 = ogrenciler2.filter(function (yas3) {
    return yas3.yas < 18;
});
console.log(age3)

//bu öğrencilerin notlarını harf notuna çevirme

harfnotu5 = ogrenciler.map (function(ogr5){
    let harfnotu =""
    if (ogr5.not >90) harfnotu = "AA";
    else if(ogr5.not >80) harfnotu = "BB";
    else if (ogr5.not> 70 ) harfnotu = "CC";
    else if (ogr5.not > 60) harfnotu = "DD";
    else harfnotu ="FF"

    return {
        isim : ogr5.isim ,
        not : ogr5.not,
        yas : ogr5.yas,
        harfnotu : harfnotu
    }
});

console.log(harfnotu5)

// not ortalaması

const toplamNot = ogrenciler2.reduce(function (toplam, ogrenci) {
    return toplam + ogrenci.not; 
}, 0);

const ortalama = toplamNot / ogrenciler2.length; 

console.log("Ortalama:", ortalama);

