var quantity = document.getElementsByClassName('quantity');
var currentNumber = 0;

var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".counter")
		.parent(".card")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".counter")
		.parent(".card")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});


$(document).ready(function () {
    $("#phone").mask("(99) 9999-99999");
});

function Calc() {
    var container = document.getElementById('principal');
    container.style.height = '2000px';
}