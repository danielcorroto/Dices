var selected = 6;
var quantity = 1;

function selectDice(dice) {
	selected = dice;
	$("#selectedDice").attr("src", "img/d"+dice+".png");
}

function selectOneDice(dice) {
	selected = dice;
	$("#selectedDice").attr("src", "img/d"+dice+".png");
	$("#onedice-selector").slideUp();
	$("#onedice-quantity").slideDown();
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
	$("#roll_audio").get(0).play();

	var res = [];
	if (selected == 2) {
		for (var i=0; i<quantity; i++) {
			var value = Math.floor(Math.random() * selected);
			if (value == 0) { res.push("CARA"); }
			else { res.push("CRUZ"); }
		}
		$("#total").text("");
		$("#total").hide();
	} else {
		var total = 0;
		for (var i=0; i<quantity; i++) {
			var value = Math.floor(Math.random() * selected);
			if (selected != 10) { value += 1; }
			res.push(value);
			total += value;
		}
		if (res.length > 0) {
			$("#total").text("Total: " + total);
			$("#total").hide();
			$("#total").fadeIn("slow");
		}
	}
	if (res.length > 0) {
		$("#result").text("Roll: " + res);
		$("#result").hide();
		$("#result").fadeIn("slow");
	}
}

