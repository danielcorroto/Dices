var selected = 6;
var quantity = 1;

function selectDice(dice) {
	selected = dice;
	$("#selectedDice").attr("src", "img/d"+dice+".png");
}

function printDiceQty() {
	var span = $("#quantity");
	span.text(quantity);
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
	$("#result").text("");
	$("#total").text("");
}

function rollDices() {
	var res = [];
	if (selected == 2) {
		for (var i=0; i<quantity; i++) {
			var value = Math.floor(Math.random() * selected);
			if (value == 0) { res.push("CARA"); }
			else { res.push("CRUZ"); }
		}
	$("#total").text("");
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

