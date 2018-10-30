function calculate(num, num2) {
  document.getElementById("first").textContent = "Numbers: " + num + ", " + num2;

  var sum = num + num2;
  var difference = num - num2;
  var product = num * num2;
  var quotient = num / num2;

  return [sum, difference, product, quotient];
}

var calculations = calculate(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));

document.getElementById("second").textContent = "Sum: " + calculations[0];
document.getElementById("third").textContent = "Difference: " + calculations[1];
document.getElementById("fourth").textContent = "Product: " + calculations[2];
document.getElementById("fifth").textContent = "Quotient: " + calculations[3];
