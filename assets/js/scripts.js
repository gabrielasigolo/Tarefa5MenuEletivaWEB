var btnPlus = document.getElementById('plus');
var btnMinus = document.getElementById('minus');
var quantity = document.getElementById('counter');
var currentNumber = 0;

function increment(){
    currentNumber++;
    quantity.innerHTML = currentNumber;
}

function decrement(){
    currentNumber--;
    quantity.innerHTML = currentNumber;
}

$(document).ready(function () {
    $("#phone").mask("(99) 9999-99999");
});

function Calc() {
    var container = document.getElementById('principal');
    container.style.height = '2000px';
}