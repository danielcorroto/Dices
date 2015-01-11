var selected = 6;
var quantity = 0;

function printDiceQty() {
	var span = $("#quantity");
	span.text(quantity);
	if (quantity == 0) {
		span.removeClass("label-success");
		span.addClass("label-default");
	} else {
		span.removeClass("label-default");
		span.addClass("label-success");
	}
}

function addDice(value) {
	quantity += value;
	if (value < 0) {
		value = 0;
	}
	printDiceQty();
}

function clearDices() {
	quantity = 0;
	printDiceQty();
}

function rollDices() {
	var res = [];
	var total = 0;
	for (var i=0; i<quantity; i++) {
		var value = Math.floor(Math.random() * selected);
		if (selected != 100) { value += 1; }
		res.push(value);
		total += value;
	}
	if (res.length > 0) {
		$("#result").text("Roll: " + res);
		$("#total").text("Total: " + total);
	}
}

