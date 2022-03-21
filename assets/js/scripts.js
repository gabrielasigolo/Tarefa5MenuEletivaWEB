var btnPlus = document.getElementsByClassName('plus');
var btnMinus = document.getElementsByClassName('minus');
var quantity = document.getElementsByClassName('quantity');
var plusbuttonsCount = btnPlus.length;
var minusbuttonsCount = btnMinus.length;
var quantityCount = quantity.length;
var currentNumber = 0;

for(var i = 0; i < plusbuttonsCount; i+=1){
    btnPlus[i].onclick = function increment(){
             currentNumber++;
             for(var j = 0; j < quantityCount; j+=1){
                quantity[j].innerHTML = currentNumber;
             }
    };
}

for(var i = 0; i < minusbuttonsCount; i+=1){
    btnMinus[i].onclick = function decrement(){
            currentNumber--;
            for(var j = 0; j < quantityCount; j+=1){
                quantity[j].innerHTML = currentNumber;
            }
    }
}

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