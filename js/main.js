var selected = 6;
var quantity = 0;

function selectDice(dice) {
	selected = dice;
	$("#selectedDice").attr("src", "img/d"+dice+".png");
}

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
	if (quantity < 0) {
		quantity = 0;
	}
	printDiceQty();
}

function clearDices() {
	quantity = 0;
	printDiceQty();
}

function rollDices() {
	var res = [];
	if (selected == 2) {
		for (var i=0; i<quantity; i++) {
			var value = Math.floor(Math.random() * selected);
			if (value == 0) { res.push("CARA"); }
			else { res.push("CRUZ"); }
		}
	} else {
		var total = 0;
		for (var i=0; i<quantity; i++) {
			var value = Math.floor(Math.random() * selected);
			if (selected != 100) { value += 1; }
			res.push(value);
			total += value;
		}
		if (res.length > 0) {
			$("#total").text("Total: " + total);
		}
	}
	if (res.length > 0) {
		$("#result").text("Roll: " + res);
	}
}

