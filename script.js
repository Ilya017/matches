let n;
function game(num) {
num = prompt("Задайте кол-во спичек:");
let str = " ";
for (let i = 0; i < num; i++) {
  str += " | ";
}
alert(num + str);
while (num > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  while (isNaN(m) || m < 0 || m > 3 || m == 0) {
    alert("Error");
    m = prompt("Get the matches one more time");
  }
  num -= m;
  if (num < 0) {
    num = 0;
  }
  let str = " ";
  for (let i = 0; i < num; i++) {
    str += "| ";
  }
  alert(num + str);
  if (num == 0) {
    alert("you win!");
    return;
  }
  alert("my turn!");
  let rand = Math.floor(Math.random() * 3) + 1;
  num -= rand;
  if (num < 0) {
    num = 0;
  }
  str = " ";
  for (let i = 0; i < num; i++) {
    str += "| ";
  }
  alert(num + str);
  if (num == 0) {
    alert("I win");
    return;
  }
}
}
game(n);