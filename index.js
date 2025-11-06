const pi = 3.14159;

const sayilar = [
  45, 856, 12.5, 63, 0.02, 154, 2, 54, 78, 61.7, 654, 26, 12.5, 63, 969, 152,
  32, 31, 14, 74, 32, 365.9, 5.2, 45, 76, 20, 27.4, 562, 12.15, 365.85, 45.87,
  22, 88, 56.4, 96.45, 23, 56, 332, 361, 713, 321, 258.3, 10, 974.8, 275, 570,
  707, 814, 326, 596, 626, 494, 546, 724.8, 359, 231.4, 883.1, 379.1, 691, 990,
  815.9, 937.1, 837.3, 859, 476, 370.8, 480, 860, 221.1, 78.8, 255, 613, 958,
  973.7, 209, 470.6, 157, 13, 314, 269.6, 885, 507.9, 383, 276, 636, 268.8,
  558.1, 114.7, 336, 311.7, 340, 403.2, 356.9, 529.5, 932.5, 17, 756.5, 771.6,
  415, 523.1, 736, 187.8, 680, 618.6, 945, 105, 712, 696.7, 217, 68, 500.7, 28,
  358.6, 69, 87.1, 477, 289, 86, 33, 885, 458, 102.8, 328.8, 776.1, 948, 762,
  902, 286, 810.9, 888, 770, 194, 423, 61.4, 916, 19, 146.5, 255, 38.4, 356,
  971, 19, 269, 49.3, 877.8, 474, 130, 113.3, 992, 198.2, 962, 467.3, 231,
  719.5, 708.3, 0.02, 196.2, 38, 178.3, 740, 521.8, 237, 140, 260.3, 546, 774.4,
  430, 531.4, 706.7, 238.4, 384, 14, 319.6, 992.1, 839, 572, 11.5, 788, 381,
  938, 430, 908.9, 398.1, 675.6, 568, 319.1, 593, 50, 574, 349.6, 316.6, 506.9,
  933, 180, 731, 692, 822, 552, 743, 250.7, 88.3, 986, 954, 930.1, 430.2, 590.8,
  971.1, 463.4, 798, 956.8, 845, 75, 156, 362, 41, 14.5, 76, 123, 369.4, 7.7,
  45, 78, 23, 27.4, 502, 12.0, 335.85, 45.87, 24, 85, 56.4, 96.45, 23, 57,
  337.8, 245, 703.02, 8.41, 1.3, 4.24, 1.17, 7.85, 5.94, 3.55, 8.45, 7.84, 296,
  30.1, 957.6, 207, 782, 762, 305.8, 628, 777, 798, 467.3, 828, 526, 588, 909,
  200.5, 209, 833, 159.6, 565, 901, 36, 501, 396.5, 197.2, 273, 314, 652, 123.9,
  561, 586, 523.4, 422, 793.5, 493.2, 686, 427, 5.22, 4.99, 0.08, 5.2, 1.7,
  3.85, 0.85, 2.04, 1.64, 7.16, 862, 506.4, 3.9, 159, 266, 548, 910.1, 919, 491,
  845, 650, 470.6, 464.5, 423.2, 730.8, 923, 239.5, 358.6, 339.1, 507, 667.7,
  867.7,
];

/* ÖRNEK GÖREV: KareninAlani fonksiyonunu kullanarak aşağıdakileri uygulayın: 
	1. Karenin kenar uzunluğunu fonksiyonun tek parametresi olarak alacak 
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Hesaplanan alanı döndürecek
*/

//Örneğin çözümü:
function KareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

/* GÖREV 1: */
function CemberinCevresi(yaricap) {
  // global pi kullanılarak çevre hesaplanır
  return 2 * pi * yaricap;
}

/* GÖREV 2: 
   Fonksiyonun birinci parametresi yarıçap, ikinci parametresi pi sayısı olacak. */
function CemberinAlani(yaricap, piSayisi) {
  return piSayisi * Math.pow(yaricap, 2);
}

/* GÖREV 3 değişkenleri */
let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü: for döngüsü ile en küçük ve en büyük bulunması
enkucuk = sayilar[0];
enbuyuk = sayilar[0];
for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] < enkucuk) enkucuk = sayilar[i];
  if (sayilar[i] > enbuyuk) enbuyuk = sayilar[i];
}

// 3b çözümü: .forEach ile 3'ün tam katı olanları topla
ucetambolunenler = [];
sayilar.forEach((num) => {
  // Bir sayının 3'e tam bölünüp bölünmediğini kontrol ederiz
  // float durumları da destekler (örn 45.0 % 3 === 0)
  if (num % 3 === 0) {
    ucetambolunenler.push(num);
  }
});

// 3c çözümü: .reduce ile toplam
ucebolunenlerintoplami =
  ucetambolunenler.length > 0
    ? ucetambolunenler.reduce((acc, cur) => acc + cur, 0)
    : 0;

// 3d çözümü: 500'den küçük sayıları filtrele
besyuzdenkucuksayilar = sayilar.filter((num) => num < 500);

// 3e çözümü: küçükten büyüğe sıralayıp yeni diziye aktar
// slice ile orijinali bozulmasın
siralisayilar = besyuzdenkucuksayilar.slice().sort((a, b) => a - b);

// 3f çözümü: tekrar eden sayıları tespit edip string oluşturalım
tekraredensayilar = [];
const frekans = {};

// 1. döngü: frekans tablosu
for (let i = 0; i < sayilar.length; i++) {
  const key = String(sayilar[i]); // obje anahtarı olarak string kullanıyoruz
  if (frekans[key]) frekans[key]++;
  else frekans[key] = 1;
}

// 2. döngü: tekrar edenleri string formatına çevir ve diziye ekle
for (const key in frekans) {
  if (Object.prototype.hasOwnProperty.call(frekans, key)) {
    const count = frekans[key];
    if (count > 1) {
      tekraredensayilar.push(
        `${key} sayısı ${count} kere tekrar edilmiştir`
      );
    }
  }
}

/*  (oto test yok) sayilar dizisi içinde kaç adet sayı olduğunu konsola yazdırın */
console.log("sayilar dizisinin uzunluğu:", sayilar.length);

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
