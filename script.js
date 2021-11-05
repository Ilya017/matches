let n = prompt("Задайте кол-во спичек:");
let str = " ";
for (let i = 0; i < n; i++) {
  str += " | ";
}
alert(n + str);
while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  while (isNaN(m) || m < 0 || m > 3 || m == 0) {
    alert("Error");
    m = prompt("Get the matches one more time");
  }
  n -= m;
  let str = " ";
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
  alert(n + str);
  if (n == 0) {
    alert("you win!");
    break;
  }
  alert("my turn!");
  let rand = Math.floor(Math.random() * 3) + 1;
  n -= rand;
  str = " ";
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
  alert(n + str);
}