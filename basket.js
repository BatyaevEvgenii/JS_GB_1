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
    count += unit[i].quantity; // общее суммарное количество всех товаров
}

$basket.textContent = 'В корзине: '+ count + ' товар(-ов), на сумму ' + total + ' рублей.';
}
