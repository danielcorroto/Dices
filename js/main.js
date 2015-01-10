const values = [4,6,8,10,10,12,20,100];
const ids = ["qtyd4", "qtyd6", "qtyd8", "qtyd10", "qtyd00", "qtyd12", "qtyd20", "qtyd100"];

var dices = [0,0,0,0,0,0,0,0]; // 4, 6, 8, 10, 00, 12, 20, 100

function printDiceQty(index) {
	$("#"+ids[index]).text(dices[index]);
}

function clearDices() {
	for (var i=0; i<dices.length; i++) {
		dices[i] = 0;
		printDiceQty(i);
	}
}

function addDice(add, dice) {
	var value;
	if (add) {value = 1;}
	else {value = -1;}
	
	var index = -1;
	if (dice == "d4") { index = 0; }
	else if (dice == "d6") { index = 1;}
	else if (dice == "d8") { index = 2;}
	else if (dice == "d10") { index = 3;}
	else if (dice == "d00") { index = 4;}
	else if (dice == "d12") { index = 5;}
	else if (dice == "d20") { index = 6;}
	else if (dice == "d100") { index = 7;}
	
	dices[index] += value;
	if (dices[index] < 0) {
		dices[index] = 0;
	}
	printDiceQty(index);
}

function rollDices() {
	var res = [];
	for (var i=0; i<dices.length; i++) {
		for (var j=0; j<dices[i]; j++) {
			var value = Math.floor(Math.random() * values[i]);
			if (i==4) { value *= 10; }
			else { value += 1; }
			res.push(value);
		}
	}
	$("#result").text(res);
}

