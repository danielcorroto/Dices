var selected = 6;
var quantity = 1;

function selectDice(dice) {
	selected = dice;
	$("#selectedDice").attr("src", "img/d"+dice+".png");
	$("#selectedDice").attr("alt", "D"+dice);
}

function selectOneDice(dice) {
	selectDice(dice);
	$("#onedice-selector").slideUp();
	$("#onedice-quantity").slideDown();
}

function printDiceQty() {
	var span = $("#quantity");
	span.text(quantity);
}

function addDice(value) {
	quantity += value;
	if (quantity < 1) {
		quantity = 1;
	}
	printDiceQty();
}

function clearDices() {
	quantity = 1;
	printDiceQty();
	$("#result").text("");
	$("#total").text("");
}

function rollDices() {
	var audio = $("#roll_audio").get(0);
	audio.load();
	audio.play();

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
		$("#total").text("Total: " + total);
		$("#total").hide();
		$("#total").fadeIn("slow");
	}

	var results = "";
	for (i=0; i<res.length; i++) {
		results += res[i] + ", ";
	}
	$("#result").text("Roll: " + results.substring(0,results.length-2));
	$("#result").hide();
	$("#result").fadeIn("slow");
	return res;
}

function rollOneDice() {
	var a = rollDices();
	var d = {};
	for (i=0; i<a.length; i++) {
		if (d[a[i]] == undefined) {
			d[a[i]] = 1;
		} else {
			d[a[i]]++;
		}
	}
	$("#report").empty();
	for (var key in d) {
		$("#report").append('<tr><td><span class="label label-primary">'+key+'</span></td><td>'+d[key]+'</td></tr>');
	}
}
