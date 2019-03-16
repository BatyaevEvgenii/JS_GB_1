// данные корзины
var $basket = document.getElementById('basket');
var basketArray = [
  // {
  //     id: 1, // 'good_1'
  //     name: 'Футболка',
  //     price: 1000,
  //     quantity: 3,
  // },
  // {
  //     id: 2, // 'good_2'
  //     name: 'Носки',
  //     price: 546,
  //     quantity: 9,
  // },
];

var $board = document.getElementById('board');

function getBasket(basketArray){
  var total = 0; 
  var count = 0;
  var $table = document.createElement('table');
  
  for(var i = 0; i < basketArray.length; i++){
    var $button = document.createElement('button');
    var $textButton = document.createTextNode('Продать');
    var $row = document.createElement('tr');
    $row.textContent = basketArray[i].id + ' ' + basketArray[i].name + ' цена: ' + basketArray[i].price + ', количество: ' + basketArray[i].quantity ;
    
    $button.appendChild($textButton);
    $row.appendChild($button);
    $table.appendChild($row);
  }

  if (basketArray.length === 0){
    $basket.textContent = 'Корзина пуста!!!';
  }
  else {
    for(var i = 0; i < basketArray.length; i++){
      total = total + basketArray[i].price * basketArray[i].quantity;
      count += basketArray[i].quantity;
  }
  $basket.textContent = 'В корзине: '+ count + ' товар(-ов), на сумму ' + total + ' рублей.';
  }

  $board.appendChild($table);
}
getBasket(basketArray);

// проверка того что что-то где-то есть, при условии что это что-то где-то ниже будет определено
function getProductIndex(name){
  var idx = -1;

  for(var i = 0; i < basketArray.length; i++){
    if (basketArray[i].name === name){
      idx = i;
    }
  }

  return idx;
}

// данные каталога
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

function getProductArray(productsArray){
  for(var i = 0; i < productsArray.length; i++){
    var $row = document.createElement('tr');
    $row.textContent = productsArray[i].id + ' image';
    var $button = document.createElement('button');
    var $textButton = document.createTextNode('Купить');

    for(var j = 0; j < 1; j++){
      var $cell = document.createElement('td');
      $cell.textContent = productsArray[i].name + ', цена: ' +  productsArray[i].price + ' ₽, на складе: ' + productsArray[i].quantity + ' шт.';
      $row.appendChild($cell);
    }

    $button.appendChild($textButton);
    $row.appendChild($button);
    $table.appendChild($row);
  }
  
  $catalog.appendChild($table);
}
getProductArray(productsArray);

// отлавливаем нажатие Купить
$catalog.addEventListener('click', handleAddClick);

function handleAddClick(unit){
  if(unit.target.tagName === 'BUTTON'){
    var row = unit.target.previousSibling;
    var rowArray = row.textContent.split(' ');
    // проверка на наличие одноименного товара в корзине
    var name = rowArray[0];
    var idx = getProductIndex(name);

    if (idx === -1){
      // когда товара нет
      basketArray.push({id: (basketArray.length + 1), name: rowArray[0], price: parseInt(rowArray[2]), quantity: 1});
    } else {
      basketArray[idx].quantity++;
    }

    $board.textContent = " ";
    getBasket(basketArray);
  }
}

// отлавливаем нажатие Продать
$board.addEventListener('click', handleDeleteClick);

function handleDeleteClick(unit) {
  if (unit.target.tagName === 'BUTTON'){
    var productRow = unit.target.previousSibling;
    var productArray = productRow.textContent.split(' ');
    var name = productArray[1];
    var quantity = productArray[5];
    var idx = getProductIndex(name);

    if (quantity > 1){
      basketArray[idx].quantity--;
    } else{
      if(confirm('Вы удаляете последний товар?')) {
        basketArray.splice(idx, 1);
      }
    }

    $board.textContent = " ";
    getBasket(basketArray);
  }
}