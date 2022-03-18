var btnPlus = document.getElementById('plus');
var btnMinus = document.getElementById('minus');
var quantity = document.getElementById('counter');
var currentNumber = 0;

function increment(){
        currentNumber++;
        quantity.innerHTML = currentNumber;
}

function decrement(){
    if (currentNumber == 0){
        btnMinus.disabled = true;
        btnPlus.disabled = false;
    } else {
        btnMinus.disabled = false;
        currentNumber--;
        quantity.innerHTML = currentNumber;
    }


}

