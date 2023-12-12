let vize1 = Number(prompt('Lütfen 1. vize notunuzu giriniz.'))
let vize2 = Number(prompt('Lütfen 2. vize notunuzu giriniz.'))
let final = Number(prompt('Lütfen final notunuzu giriniz.'))

let sonuc = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4)
let result = document.querySelector('#result')

if (sonuc >= 50 && sonuc <= 100) {
   
    result.innerHTML = `En az 50 ortalama yapman gerekiyordu ve ${sonuc} ortalama ile dersi geçtin!`
} else if (sonuc < 50 && sonuc >= 0) {

    result.innerHTML = `En az 50 ortalama yapman gerekiyordu ve ${sonuc} ortalama ile dersten kaldın.`

} else {
    alert('Puanlarınızı doğru girmediniz.')
}