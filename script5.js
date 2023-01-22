// Цикли в JavaScript (часть 1)Цикли - це можливість виконувати операцію багато разів без опису дій вручну
//масиви без циклів не живуть 
//види циклів
//for
//while
//douwhile

////____________
//for

// for- () { // () - умови, які або виконуються або ні; {} - блок команд, те що буде виконуватися  для цьої функції

// }

//for (let i = 0; i < 5; i++) { // 1) умова start; 2)умова - праціємо поки все вірно; 3)умова - як змінюється лічильник
// цикл працює: якшо  і = 0, і якшо і < 5 і якщо i++ збільшується на 1
//console.log(i);
//}// праціємо поки все вірно

//for (let i = 0; i == 5; i++) {
//console.log(i);
//} // нічого не відбувається, бо цикл пропускає все це, оскільки і не може дорівнювати 5

//for (let i = 0; i >= 0; i++) {
//console.log(i);
//} // безкінечний цикл 

// for (let i = 0; i < 6; i = i + 1) {
//     if (i == 4) break // спосіб вийти з циклу 
//     console.log(i);
// }

// ми виводили змынну якЖ
// let div = document.querySelector('.one') // тобто прописували повну назву змнноъ ы ъъ класу 
// console.log(div);
// div.style.background = 'red';

// for (let i = 0; i < 6; i = i + 1) {

// }

let div = document.querySelectorAll('.one') // не спрацює, тому що div тепер має не 1 елемент а 3, тобто це вже масив 
console.log(div);
//div.style.background = 'red';


// for (let i = 0; i < div.length; i = i + 1) { //div.length - кількість елементів в масиві
//     console.log(i);
// }

// for (let i = 0; i < div.length; i = i + 1) {
//     console.log(div[i]); //щоб перебрати масив ми використовуємо div[i] - тобто індекс в масиві (послідовність)
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }
// //до колекції елементів ми використали стіли css

// //поії для масивів
// function two() {
//     console.log('work!');
// }

// let b = document.getElementsByClassName('one'); // отримати по імені елементу
// let c = document.getElementsByTagName('div'); //отримати по тегу елемент
// console.log(b);
// console.log(c);

// for (i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// }

//_________________________________________________________________

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {// r[i] перевірка кожної радіобатом 
            console.log(r[i].value) //ми отримуємо значення кнопки яка чекнута (вибрана)
        }
    }
}

// for (let i = 0; i < 10; i++) {
//     document.querySelector('#out').innerHTML += i + ' '; // конкатенацією додали пробіли між цифрами 
// } - такий формат дьоргає сторінку кожен раз при запуску 

//варто оголосити змінну: 

let out = '';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue; // перериває існуючий цикл 
    out += i + ' '; // щось додавати в змінну, накопичити все в одному місці
    //if (i == 6) break; - зупинити цикл

}
document.querySelector('#out').innerHTML = out; // вивести її однією операцією  за межами циклу