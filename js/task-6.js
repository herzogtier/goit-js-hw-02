let input;
let total = 0;

do {
  input = prompt("Введи число");
  if (Number(input)) {
    total = total + parseInt(input);
    console.log(parseInt(total));
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
