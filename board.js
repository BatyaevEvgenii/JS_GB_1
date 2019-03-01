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