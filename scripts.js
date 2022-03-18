var btnPlus = document.getElementById('plus');
var btnMinus = document.getElementById('minus');
var quantity = document.getElementById('counter');
var currentNumber = 0;

function increment(){
    if (currentNumber == 10) {
        btnPlus.disabled = true;
        btnMinus.disabled = false;
    } else {
        currentNumber++;
        quantity.innerHTML = currentNumber;
    }

    
}

function decrement(){
    if (currentNumber == -3){
        btnMinus.disabled = true;
        btnPlus.disabled = false;
    } else {
        currentNumber--;
        quantity.innerHTML = currentNumber;
    }


}

