// var $catalog = document.getElementsByClassName('catalog');
var $catalog = document.querySelector('.catalog')
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

// $catalog[0].appendChild($table);
$catalog.appendChild($table);