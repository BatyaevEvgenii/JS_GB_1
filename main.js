/* ******************************** */
// Задание 5
// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

// сделаю через чередование белой и черной клетки
// клетки (черная/белая) - в виде квадратов соответствующих цветов
// для подписей по оси Х использую массив букв, а по оси Y - массив цифр

var $board = document.getElementById('board');
var $table = document.createElement('table');
var size = 8;

for (var i = 0; i < size; i++) {
  var $row = document.createElement('tr');
  for (var j = 0; j < size; j++) {
    var $cell = document.createElement('td');
    if ((j + i) % 2 == 0)
      $cell.textContent += "|";
    else
      $cell.textContent += "|B";
    $row.appendChild($cell);
  }
  $table.appendChild($row);
}
$board.appendChild($table);


// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только ​div,​ в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: ​n​товаров на сумму ​m​рублей».

var $basket = document.getElementById('basket')
var unit = [
  {
      id: 1, // 'good_1'
      name: 'Футболка',
      price: 1000,
      quantity: 3,
  },
  {
      id: 2, // 'good_2'
      name: 'Носки',
      price: 546,
      quantity: 9,
  },
];

var total = 0; 
var count = 0;
if (unit.length == 0){
  $basket.textContent = 'Корзина пуста!!!';
}
else {
  for(var i = 0; i < unit.length; i++){
    total = total + unit[i].price * unit[i].quantity;
    // count += (unit.length - 1); // количество наименований товаров
    count += unit[i].quantity; // общее количество товара, в штуках
}

$basket.textContent = 'В корзине: '+ count + ' товар(-ов), на сумму ' + total + ' рублей.';
}




// 3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a. Создать массив товаров (сущность ​Product)​;
// b. При загрузке страницы на базе данного массива генерировать вывод из него. 
// HTML-код должен содержать только ​div id=”catalog” ​без вложенного кода. 
// Весь вид каталога генерируется JS.
var $catalog = document.getElementsByClassName('catalog');
var $table = document.createElement('table');

var productsArray = [
  {
    id: 1,
    name: 'Футболка',
    category: 'нижнее белье',
    description: 'фирменная футболка Adidas от Прада',
    image: '',
    price: 1000,
    quantity: 50,
},
{
    id: 2,
    name: 'Носки',
    category: 'нижнее белье',
    description: 'фирменная носки Reebok от Прада',
    image: '',
    price: 546,
    quantity: 30,
},
{
  id: 3,
  name: 'шорты',
  category: 'летнее белье',
  description: 'легкие фирменная шорты Nike от Прада',
  image: '',
  price: 1200,
  quantity: 20,
},
];


for(i = 0; i < productsArray.length; i++){
  var $row = document.createElement('tr');
  $row.textContent = productsArray[i].id + ' image';
  for(var j = 1; j < 2; j++){
    var $cell = document.createElement('td');
    $cell.textContent = productsArray[i].name + ', цена: ' +  productsArray[i].price + ' ₽, на складе: ' + productsArray[i].quantity + ' шт.';
    $row.appendChild($cell);
  }
  
  $table.appendChild($row);
}

$catalog[0].appendChild($table);


/* ******************************** */
// // Задание 4
// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором 
// в соответствующих свойствах описаны единицы, десятки и сотни. Например, 
// для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.​
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью ​console.log​ и вернуть пустой объект.

function countNum(num){
    var num = parseInt(prompt('Введите число от 0 до 999: '));
    var numArr = num.toString().split('');

    var numObj = {};

    for(i = numArr.length; i > 0; i--) {

        if(isNaN(+num) || numArr.length > 3) {
            alert('Некорректный ввод');
            return;
        }

        if (numArr.length == i){
            numObj['единицы'] = numArr[i-1];
            numObj['десятки'] = numArr[i-2] || 0;
            numObj['сотни'] = numArr[i-3] || 0;
        }

    }

    console.log("Введенное число:", num);
    console.log(numObj);
}

// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

// Вариант 1 (объект)
var basket = {  product1: ['майка', 100, 5], 
                product2: ['носки', 200, 3], 
                product3: ['пакет', 100, 1]
            };

function totalCostBasket(basket) {
    var totalCost = 0;
    for (var product in basket){
        totalCost += basket[product][1] * basket[product][2];
    }
    return totalCost;
    // console.log("Стоимость - общая", totalCost);
}


// Вариант 2 (массив)
var unit = [
    {
        id: 1, // 'good_1'
        name: 'Футболка',
        price: 1000,
        quantity: 1,
    },
    {
        id: 2, // 'good_2'
        name: 'Носки',
        price: 546,
        quantity: 5,
    },
];

function totalCost(unit){
    var total = 0;
    for(var i = 0; i < unit.length; i++){
        total = total + unit[i].price * unit[i].quantity;
    }
    return total;
}

// 3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
// но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
// но в разных местах давал возможность вызывать разные методы.
var product = {
    name: "T-short",
    category: function get_category(){},
    image: "да, тут картинка",
    description: "ну очень дорогая футболка от Прада",
    shoet_desc: "футболка от Прада",
    price: 100000,
    quantity: 2,
    hot_product: function get_hot_product(){},
    all_product: function products(){},
    basket: function get_basket(){},
}


/* ******************************** */
// Задание 3
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function simple2(x){
    var i = 2;
    while ( i < x) {
        if (x % i == 0) {
            return;
        } 
        i++;
    }
    console.log(x, '- простое');
}

for (var i = 2; i < 100; i++){
    simple2(i);
}


function simple(x){
    for (var i = 2; i < (x-1); i++){
        if (x % i == 0 ) {
            return;
        } 
    }
    console.log(x, '- простое');
}

for (var i = 2; i < 100; i++){
    simple(i);
}
    

// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от 
// находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(){
    var goods = [['майка', 100, 5], ['носки', 200, 3], ['пакет', 100, 1]]
    var totalCost = 0;
    for (var i = 0; i < goods.length; i++){
        totalCost += goods[i][1] * goods[i][2];
        console.log(goods[i]);
    }
    console.log(totalCost);
}


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

var arr = [0, 1, 2, 3,4,5,6,7,8,9];
for (i = 0; i < arr.length; arr[i++]){}
console.log(arr);


// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
for (var line = "x"; line.length < 21; line += "x"){
    console.log(line);
}



/* ******************************** */
// Задание 2
// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?

// Связано с приоритетами операций.
// Сперва выполняются унарные операторы ++, затем арифметика.
// Причем ++a увеличивает значение, а затем возвращает его, когда b++ возвращает значение, а затем увеличивает его


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);

// В резкльтате даст: 5, т.к. a *= 2, это тоже самое, что и a = a * 2 и далее результат прибавляем к 1


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение; ((a > 0 && b < 0) || (a < 0 && b > 0))
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ### 

// var a = parseInt(prompt("a=",));
// var b = parseInt(prompt("b="));
// console.log(a, b);
// if ((a > 0 || a == 0) && (b > 0 || b==0)) {
//     alert(a - b);
// }
// else if (a < 0 && b < 0) {
//     alert(a * b);
// }
// else if (((a > 0 || a == 0) && (b < 0)) || ((a < 0) && (b > 0 || b==0))) {
//     alert(a + b);
// }    

    
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. ### 

// var a = parseInt(prompt("a[0..15]=", ));
// switch (a) {
//     case 1: 
//         alert(1);
//     case 2:
//         alert(2);
//     case 3: 
//         alert(3);
//     case 4:
//         alert(4);
//     case 5: 
//         alert(5);
//     case 6:
//         alert(6);
//     case 7: 
//         alert(7);
//     case 8:
//         alert(8);
//     case 9: 
//         alert(9);
//     case 10:
//         alert(10);
//     case 11: 
//         alert(11);
//     case 12:
//         alert(12);
//     case 13: 
//         alert(13);
//     case 14:
//         alert(14);
//     case 15: 
//         alert(15);
//         break;
//     default:
//         alert("More");
//         break;
// }


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. ### 
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). ### 

// var num1 = parseInt(prompt("Введите первое число ",))
// var num2 = parseInt(prompt("Введите второе число ",))
// var action = prompt("Выберите арифметическое действие (+, -, /, *): ",)

// function aplusb(num1, num2){
//     return (num1 + num2);
// }

// function aminusb(num1, num2){
//     return (num1 - num2);
// }

// function adelb(num1, num2) {
//     return (num1 / num2);
// }

// function anab(num1, num2) {
//     return (num1 * num2);
// }

// switch (action) {
//     case '+':
//         alert("Результат сложения: " + aplusb(num1, num2));
//         break;
//     case '-':
//         alert("Результат вычитания: " + aminusb(num1, num2));
//         break;
//     case '/':
//         alert("Результат деления: " + adelb(num1, num2));
//         break;
//     case '*':
//         alert("Результат умножения: " + anab(num1, num2));
//         break;
//     default:
//         console.log("...")
// }


// 7. *Сравнить null и 0. Попробуйте объяснить результат. ### 

// исходя из того что null транслируется как false, а 0 в данном случае как true, то при сравнении ложь и истина получим ложь


// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

// function power(val, pow) {
//     if(pow != 1){
//         return val * power(val, pow - 1);
//     } else {
//         return val;
//     }
// }



/* ******************************** */
// Задание 1
/* 1. Задать температуру в градусах по Цельсию. 
Вывести в ​alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчет идет по формуле ​Tf = (9 / 5) * Tc + 32,​
где ​Tf — температура по Фаренгейту, ​Tc​— по Цельсию.*/
// var tempCelsius = prompt('Введите температуру в градусах, °C:')
// var tempFahrenheit = 9 / 5 * tempCelsius + 32
// alert('Температура по Фаренгейту составила: ' + tempFahrenheit + ' °F')


/* 2. Объявить две переменные: ​admin и ​name.​ Записать в ​name строку "Василий"; Скопировать
значение из ​name​в ​admin.​Вывести ​admin​(должно вывестись «Василий»).*/
// var name = 'Vasiliy'
// var admin;
// admin = name;
// alert('В переменной, admin: '+ admin)
