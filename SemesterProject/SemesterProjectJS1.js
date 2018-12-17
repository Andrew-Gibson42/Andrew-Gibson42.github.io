function factorial(num) {
  var pr = 1;
  var i;
  for(i = num; i > 1; i--) {
    pr *= i;
  }

  return pr;
}

function permutation(n, r) {
  return ((factorial(n)) / (factorial(n - r)));
}

function combination(n, r) {
  return ((factorial(n)) / (factorial(r) * (factorial(n - r))));
}

function isInt(num) {
  if(parseInt(num) == num)
    return true;
  return false;
}

function factorialClick() {
  var factorialForm = document.getElementById("factorialID");
  var factorialNum = factorialForm.elements[0].value;

  var outputField = document.getElementById("factorialOutput");

  if(factorialNum > 0 && isInt(factorialNum)) {
    var product = factorial(factorialNum);

    outputField.textContent = product;
  }
  else {
    outputField.textContent = "Enter a postive integer."
  }
}

function permutationClick() {
  var permutationForm = document.getElementById("permutationID");
  var n = permutationForm.elements[0].value;
  var r = permutationForm.elements[1].value;

  var outputField = document.getElementById("permutationOutput");

  if(Number(n) >= Number(r) && Number(r) >= 0 && isInt(r) && isInt(n)) {
    var result = permutation(n, r);

    outputField.textContent = result;
  }
  else {
    outputField.textContent = "Enter two integers such that n >= r >= 0.";
  }
}

function combinationClick() {
  var combinationForm = document.getElementById("combinationID");
  var n = combinationForm.elements[0].value;
  var r = combinationForm.elements[1].value;

  var outputField = document.getElementById("combinationOutput");

  if((Number(n) >= Number(r)) && (Number(r) >= 0) && (isInt(r)) && (isInt(n))) {
    var result = combination(n, r);

    outputField.textContent = result;
  }
  else {
    outputField.textContent = "Enter two integers such that n >= r >= 0.";
  }
}

function changeColor(e) {
  this.style.borderColor = 'white';
}

function returnColor(e) {
  this.style.borderColor = 'black';
}

var probRules = document.getElementsByClassName("article");

var j;
for(j = 0; j < probRules.length; j++) {
  probRules[j].addEventListener('mouseover', changeColor, false);
  probRules[j].addEventListener('mouseout', returnColor, false);
}

//-------------------------------------------------------------------------------------------

var pDoorArray = document.getElementsByClassName("pDoor"); //should have 3 items
var doorNumberArray = [0, 0, 0]; //0 means nothing assigned, 1 means goat, 2 means car. The array is in order of doors

doorNumberArray[Math.floor(Math.random() * 3)] = 2; //assigning car

var h;
for(h = 0; h < 3; h++) {
  if(doorNumberArray[h] == 0) { //if has nothing assigned
    doorNumberArray[h] = 1; //assign goat
  }
}

var divDoorArray = document.getElementsByClassName("door");

var l;
for(l = 0; l < divDoorArray.length; l++) {
  divDoorArray[l].addEventListener('click', revealFirst, false);
}

function revealFirst(e) {
  if(this.classList.contains("door1")) {
    pDoorArray[0].textContent = "You picked door 1. Click to stay, or click the other closed door to switch.";
    divDoorArray[1].removeEventListener('click', revealFirst); //removes this from the others so you can't pick more than 1
    divDoorArray[2].removeEventListener('click', revealFirst);

    if(doorNumberArray[0] == 2) { //if the selected door has the car
      pDoorArray[Math.floor(Math.random() * 2) + 1].textContent = "Goat"; //since the car is first, this chooses a random door of the next two to reveal, so it doesn't become formulaic
    }
    else { //if the selected door has a goat
      if(doorNumberArray[1] == 1) {
        pDoorArray[1].textContent = "Goat";
      }
      else {
        pDoorArray[2].textContent = "Goat";
      }
    }
  }

  if(this.classList.contains("door2")) {
    pDoorArray[1].textContent = "You picked door 2. Click to stay, or click the other closed door to switch.";
    divDoorArray[0].removeEventListener('click', revealFirst);
    divDoorArray[2].removeEventListener('click', revealFirst);

    if(doorNumberArray[1] == 2) {
      var goatIndex = Math.floor(Math.random() * 2);

      if(goatIndex == 0) {
        pDoorArray[0].textContent = "Goat";
      }
      else {
        pDoorArray[2].textContent = "Goat";
      }
    }
    else { //fine
      if(doorNumberArray[0] == 1) {
        pDoorArray[0].textContent = "Goat";
      }
      else {
        pDoorArray[2].textContent = "Goat";
      }
    }
  }

  if(this.classList.contains("door3")) {
    pDoorArray[2].textContent = "You picked door 3. Click to stay, or click the other closed door to switch.";
    divDoorArray[0].removeEventListener('click', revealFirst);
    divDoorArray[1].removeEventListener('click', revealFirst);

    if(doorNumberArray[2] == 2) {
      pDoorArray[Math.floor(Math.random() * 2)].textContent = "Goat";
    }
    else { //fine
      if(doorNumberArray[0] == 1) {
        pDoorArray[0].textContent = "Goat";
      }
      else {
        pDoorArray[1].textContent = "Goat";
      }
    }
  }

  var q;
  for(q = 0; q < 3; q++) {
    if(pDoorArray[q].textContent != "Goat") //if door is unrevealed
      divDoorArray[q].addEventListener('click', revealSecond, false); //allows for the closed door to be clicked again
  }
}

function revealSecond(e) {
  if(this.classList.contains("door1")) {
    if(doorNumberArray[0] == 2) {
      pDoorArray[0].textContent = "Car! You win!";
      pDoorArray[1].textContent = "Goat";
      pDoorArray[2].textContent = "Goat";
    }
    else {
      pDoorArray[0].textContent = "Goat! You lose!";
      if(pDoorArray[1].textContent != "Goat") {
        pDoorArray[1].textContent = "Car";
      }
      else{
        pDoorArray[2].textContent = "Car";
      }
    }
  }

  if(this.classList.contains("door2")) {
    if(doorNumberArray[1] == 2) {
      pDoorArray[1].textContent = "Car! You win!";
      pDoorArray[0].textContent = "Goat";
      pDoorArray[2].textContent = "Goat";
    }
    else {
      pDoorArray[1].textContent = "Goat! You lose!";
      if(pDoorArray[0].textContent != "Goat") {
        pDoorArray[0].textContent = "Car";
      }
      else{
        pDoorArray[2].textContent = "Car";
      }
    }
  }

  if(this.classList.contains("door3")) {
    if(doorNumberArray[2] == 2) {
      pDoorArray[2].textContent = "Car! You win!";
      pDoorArray[0].textContent = "Goat";
      pDoorArray[1].textContent = "Goat";
    }
    else {
      pDoorArray[2].textContent = "Goat! You lose!";
      if(pDoorArray[1].textContent != "Goat") {
        pDoorArray[1].textContent = "Car";
      }
      else{
        pDoorArray[0].textContent = "Car";
      }
    }
  }
}
