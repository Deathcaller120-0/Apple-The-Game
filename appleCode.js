//Random console msg
var randomMessage = Math.floor(Math.random() * 3);
if (randomMessage == 0){
	console.log('You bout to cheat? Or are you lookin for some Devolper stuff?');
}
if (randomMessage == 1){
	console.log('Lookin for secrets? You wont find any here.');
}
if (randomMessage == 2){
	console.log('Cheated apples go rotten faster than normal apples.');
}
//Global Vars
var app = 5;
var chk = app + 10;
var dia = 0;
var ameth = 0;
var bread = 0;
var appleUp = false;
var bWorker = 0;
var nWorker = 0;
var nWorkerPrice = 25;
var gWorker = 0;
var gWorkerPrice = 40;
var diaMiner = 0;
var diaMinerPrice = 10;
var amethMiner = 0;
var amethMinerPrice = 10;
var x2SpeedUpvar = 0;
var timeSpeedUp = 0;
var time = 100 - timeSpeedUp;
var bWorkerTime = bWorker / time;
var nWorkerTime = nWorker / time;
var gWorkerTime = gWorker / time;
var diaMinerTime = diaMiner / time;
var amethMinerTime = amethMiner / time;
var resetAmount = 0;
var cooldownSec = 120;
setInterval(workerCheck, 500);
setInterval(save, 30000);
//NaN and null Terminator
function removeNaN(){
	if(typeof(dia) !== undefined && isNaN(dia) == false){
		document.getElementById('diaAmount').innerHTML=dia +" Diamond(s)"
	} else {
		dia = 0;
		document.getElementById('diaAmount').innerHTML=dia +" Diamond(s)";
	}
	if(typeof(ameth) !== undefined && isNaN(ameth) == false){
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
	} else {
		ameth = 0;
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
	}
	if(typeof(bread) !== undefined && isNaN(bread) == false){
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
	} else {
		bread = 0;
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
	}
	if(typeof(nWorker) !== undefined && isNaN(nWorker) == false){
		document.getElementById('workerAmount').innerHTML=nWorker + " Apple Pickers";
	} else {
		nWorker = 0;
		document.getElementById('workerAmount').innerHTML=nWorker + " Apple Pickers";
	}
	if(typeof(gWorker) !== undefined && isNaN(gWorker) == false){
		document.getElementById('gWorkerAmount').innerHTML=gWorker + " Good Apple Pickers";
	} else {
		gWorker = 0;
		document.getElementById('gWorkerAmount').innerHTML=gWorker + " Good Apple Pickers";
	}
	if(typeof(diaMiner) !== undefined && isNaN(diaMiner) == false){
		document.getElementById('minerAmount').innerHTML=diaMiner + " Diamond Miners";
	} else {
		diaMiner = 0;
		document.getElementById('minerAmount').innerHTML=diaMiner + " Diamond Miners";
	}
	if(typeof(amethMiner) !== undefined && isNaN(amethMiner) == false){
		document.getElementById('amethystMinerAmount').innerHTML=amethMiner + " Amethyst Miner(s)";
	} else {
		amethMiner = 0;
		document.getElementById('amethystMinerAmount').innerHTML=amethMiner + " Amethyst Miner(s)";
	}
	if(typeof(timeSpeedUp) !== undefined && timeSpeedUp == 50){
		document.getElementById('workerSpeed').innerHTML="Sold Out";
		document.getElementById('workerSpeed').disabled="disabled";
		document.getElementById('workerSpeed').style="color:grey";
	} else {
		timeSpeedUp = 0;
	}
	if(typeof(appleUp) !== undefined && appleUp == true){
		document.getElementById('clickUp').innerHTML="Sold Out";
		document.getElementById('clickUp').disabled="disabled";
		document.getElementById('clickUp').style="color:grey";
	} else {
		appleUp = false;
	}
	if(resetAmount == null || resetAmount == undefined){
		console.log(resetAmount);
		resetAmount = 0;
		console.log(resetAmount);
	} else {
		console.log(resetAmount);
	}
	setTimeout(save, 1000);
}
function clearNos(){
	document.getElementById("badNoApple").innerHTML=" ";
	document.getElementById("normNoApple").innerHTML=" ";
	document.getElementById("goodNoApple").innerHTML=" ";
	document.getElementById("goodNoApple").innerHTML=" ";
	document.getElementById("diaNoApple").innerHTML=" ";
	document.getElementById("minerNoDia").innerHTML=" ";
	document.getElementById("speedNoDia").innerHTML=" ";
	document.getElementById("clickNoDia").innerHTML=" ";
	document.getElementById("minerNoAmethyst").innerHTML=" ";
	document.getElementById("amethystNoDia").innerHTML=" ";
	document.getElementById("appleNoAmethyst").innerHTML=" ";
	document.getElementById('breadNoAmethyst').innerHTML=" ";
	document.getElementById('breadUpNoApple').innerHTML=" ";
	document.getElementById('x2NoBread').innerHTML=" ";
	clearTimeout(clearNos);
}
//Worker Functions
function workerCheck(){
	if (bWorker >= 600){
		document.getElementById('badHireButton').disabled="true";
		document.getElementById('badHireButton').innerHTML="MAXED OUT";
	}
	if (nWorker >= 600){
		document.getElementById('hireButton').disabled="true";
		document.getElementById('hireButton').innerHTML="MAXED OUT";
	} else if (nWorker >= 20 && nWorkerPrice == 25){
		nWorkerPrice++;
		nWorkerPrice++;
		document.getElementById('nWorkerPrice').innerHTML=nWorkerPrice + " apples for Picker" + '<span class="tooltiptext text">Does not steal apples.</span>';
	}
	if (gWorker >= 600){
		document.getElementById('goodHireButton').disabled="true";
		document.getElementById('goodHireButton').innerHTML="MAXED OUT";
	} else if (gWorker >= 20 && gWorkerPrice == 40){
		gWorkerPrice++;
		gWorkerPrice++;
		document.getElementById('gWorkertest').innerHTML=gWorkerPrice + " apples for Good Picker" + '<span class="tooltiptext text">Gives 2 apples per cycle.</span>';
	}
	if (diaMiner >= 300){
		document.getElementById('minerHireButton').disabled="true";
		document.getElementById('minerHireButton').innerHTML="MAXED OUT";
	} else if (diaMiner >= 20 && diaMinerPrice == 10){
		diaMinerPrice++;
		diaMinerPrice++;
		document.getElementById('diaMinertest').innerHTML=diaMinerPrice + " Diamonds for Diamond Miner";
	}
	if (amethMiner >= 100){
		document.getElementById('amethystWorker').innerHTML="MAXED OUT";
		document.getElementById('amethystWorker').disabled="true";
	} else if (amethMiner >= 20 && amethMinerPrice == 10){
		amethMinerPrice++;
		amethMinerPrice++;
		document.getElementById('amethMinertest').innerHTML=amethMinerPrice + ' Amethyst for Amethyst Miner';
	}
}
function bWorkerBuy() {
	if(app <= 9){
		document.getElementById('badNoApple').innerHTML="How don't You have enough apples!";
		setTimeout(clearNos, 5000);
	}
	if (app >= 10 ){
		if(bWorker >= 600){
			document.getElementById('badHireButton').disabled="true";
		}
		bWorker++;
		document.getElementById('bWorkerAmount').innerHTML=bWorker + " Bad Apple Pickers";
		var appleRemove = 10;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
		setInterval(bWorkerGain, 5000 - bWorkerTime);
	}
}
function nWorkerBuy(){
	if(app <= nWorkerPrice - 1){
		document.getElementById('normNoApple').innerHTML ="You don't have enough apples!";
		setTimeout(clearNos, 5000);
	}
	if(app >= nWorkerPrice){
		nWorker++
		document.getElementById('workerAmount').innerHTML=nWorker + " Apple Pickers"
		var appleRemove = nWorkerPrice;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		setInterval(nWorkerGain, 5000 - nWorkerTime);
	}
}
function gWorkerBuy(){
	if(app <= gWorkerPrice - 1){
		document.getElementById('goodNoApple').innerHTML="You don't have enough Apples!";
		setTimeout(clearNos, 5000)
	}
	if(app >= gWorkerPrice){
		gWorker++;
		document.getElementById('gWorkerAmount').innerHTML= gWorker + " Good Apple Pickers";
		var appleRemove = gWorkerPrice;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		setInterval(gWorkerGain, 5000 - gWorkerTime);
	}
}
function diaMinerHire(){
	if (dia <= diaMinerPrice - 1){
		document.getElementById('minerNoDia').innerHTML="You don't have enough Diamonds!";
		setTimeout(clearNos, 5000);
	}
	if (dia >= diaMinerPrice){
		diaMiner++;
		var diamondRemove = diaMinerPrice;
		do {
			dia--;
			diamondRemove--;
		} while (diamondRemove >= 1)
		setInterval(diaMinerGain, 10000 - diaMinerTime);
		document.getElementById('diaMinerAmount').innerHTML= diaMiner + " Miner(s)";
		document.getElementById('diaAmount').innerHTML= dia + " Diamond(s)";
	}
}
function amethMinerBuy(){
	if(ameth <= amethMinerPrice - 1){
		document.getElementById('minerNoAmethyst').innerHTML="You don't have enough Amethyst!";
		setInterval(clearNos, 5000);
	}
	if(ameth >= amethMinerPrice){
		amethMiner++;
		var amethRemove = amethMinerPrice;
		do{
			ameth--;
			amethRemove--;
		} while (amethRemove >= 1)
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
		document.getElementById('amethystMinerAmount').innerHTML=amethMiner + " Amethyst Miner(s)";
		setInterval(amethGain, 15000 - amethMinerTime);
	}
}
function breadMakerBuy(){
	
}
//Get/Buy resources
function appleGain(){
	if (app > chk){
		window.alert("Do Not Cheat.");
		do {
			app--;
		} while (app + 10 > chk)
	}
	if (appleUp == true){
		app++;
		app++;
	}
	app++;
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
	if (app >= 1000000){
		document.getElementById('appleAchive').innerHTML="Wow, you actually got to 1,000,000 apples. Or did you leave it going over night?";
	}
	var finishCheck = app + dia + ameth;
	var chk = app + 10;
}
//When spacebar is pressed, app++
document.addEventListener('keyup', function (event) {
	if (event.defaultPrevented) {
		return;
	}
	var key = event.key || event.keyCode;
	if (key === 'Space' || key === ' ' || key === 49) {
		setTimeout(appleGain, 10);
	}
});
function diaGain(){
	if (app <= 49){
		document.getElementById('diaNoApple').innerHTML="You don't have enough Apples!";
		setTimeout(clearNos, 5000);
	}
	if (app >= 50){
		dia++;
		document.getElementById('diaAmount').innerHTML=dia + " Diamond(s)";
		var appleRemove = 50;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
	}
}
function amethBuy(){
	if(dia <= 19){
		document.getElementById('amethNodia').innerHTML="You don't have enough Diamonds!";
		setTimeout(clearNos, 5000)
	}
	if(dia >= 20){
		var diamondRemove = 20;
		ameth++;
		do {
			diamondRemove--;
			dia--;
		} while (diamondRemove >= 1)
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
		document.getElementById('diaAmount').innerHTML=dia + " Diamond(s)"
	}
}
function amethApple(){
	if(resetAmount <= 1){
		window.alert('You have achived the true ending. Well done.');
	}
	if(ameth <= 0){
		document.getElementById('appleNoAmethyst').innerHTML="You have no Amethyst!";
		setTimeout(clearNos, 5000);
	}
	if(ameth >= 1){
		ameth--;
		var appleAdd = 1000;
		do{
			app++;
			appleAdd--;
		} while (appleAdd >= 1)
		document.getElementById('amethAmount').innerHTML=ameth + " Amethyst";
		document.getElementById('appleAmount').innerHTML=app + " Apples";
	}
}
function breadBuy(){
	if(ameth <= 29){
		document.getElementById('breadNoAmethyst').innerHTML="You need more Amethyst!";
		setTimeout(clearNos, 5000);
	}
	if(ameth >= 30){
		bread++;
		var amethRemove = 30;
		do{
			ameth--;
			amethRemove--;
		} while(amethRemove >= 1)
		document.getElementById('breadAmount').innerHTML=bread + " bread";
	}
}
//Worker gather resources
function bWorkerGain(){
	var chance = Math.floor(Math.random()*5);
	if (chance = 0){
		app--;
		app--;
		app--;
		app--;
	} else {app++;}
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
}
function nWorkerGain(){
	app++;
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
}
function gWorkerGain(){
	app++;
	app++;
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
}
function diaMinerGain(){
	var chance = Math.floor(Math.random() * 5)
	if (chance == 5){
	dia++;
	}
	dia++
	document.getElementById('diaAmount').innerHTML=dia + " diamond(s)";
}
//Upgrades
function breadInvest(){
	if(app <= 49){
		document.getElementById('breadUpNoApple').innerHTML="You need more Apples!";
		setTimeout(clearNos, 5000);
	}
	if(app >= 50){
		var appleRemove = 50;
		do{
			app--;
			appleRemove--;
		} while(appleRemove >= 1)
		document.getElementById('breadUpgrade').innerHTML="Sold Out";
		document.getElementById('breadUpgrade').disabled="disabled";
		setInterval(breadInvestGain, 900000);
	}
}
function breadInvestGain(){
	bread++;
	document.getElementById('breadAmount').innerHTML=bread + " bread";
}
function workerSpeedUp(){
	if (dia <= 29){
	document.getElementById('speedNoDiamond').innerHTML="Not Enough Diamonds!.";
	setTimeout(clearNos, 5000);
	}
	if (dia >= 30){
		var timeSpeedUp = 50;
		var diamondRemove = 30;
		do{
			diamondRemove--;
			dia--;
		} while (diamondRemove >= 1)
		document.getElementById('nWorkerSpeed').disabled="true";
		document.getElementById('nWorkerSpeed').innerHTML="Sold Out"
	}
	document.getElementById('diaAmount').innerHTML=dia + " diamond(s)";
}
function clickUp(){
	if (dia <= 49){
		document.getElementById('clickNoDiamond').innerHTML = "You don't have enough Diamonds!";
		setTimeout(clearNos, 5000);
	}
	if (dia >= 50){
		var diamondRemove = 50
		appleUp = true;
		do {
			diamondRemove--;
			dia--;
		} while (diamondRemove >= 1)
		document.getElementById('clickUp').disabled="true";
		document.getElementById('diaAmount').innerHTML = dia + " diamond(s)";
		document.getElementById('clickUp').innerHTML="Sold Out"
	}
}
function amethGain(){
	ameth++;
	document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
	var finishCheck = app + dia + ameth;
}
function x2SpeedUp(){
	if(bread <= 9){
		document.getElementById('x2NoBread').innerHTML="You need more Bread!";
		setInterval(clearNos, 5000);
	}
	if(bread >= 10){
		var breadRemove = 10;
		do{
			bread--;
			breadRemove--;
		} while(breadRemove >= 1)
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
		document.getElementById('multiButton').innerHTML="Cooling Down";
		setInterval(x2Time, 1000);
	}
}
function x2Time(){
	cooldownSec--;
	document.getElementById('x2Countdown').innerHTML=cooldownSec + " second(s) remaining.";
	var x2SpeedUpvar = timeSpeedUp - 15;
	if(cooldownSec <= 0){
		clearInterval(x2Time);
	}
}
//Finish
function finishTry(){
	var finishCheck = app + dia + ameth + bread;
	if(finishCheck <= 10999){
		window.alert('You need more Resources!');
		console.log(finishCheck);
		setTimeout(clearNos, 5000);
	}
	if(finishCheck >= 11000){
		console.log(finishCheck);
		do {
			app--;
			var finishCheck = app + dia + ameth + bread;
		} while (app >= 6)
		do{
			dia--;
		}while(dia >= 1)
		do{
			ameth--;
		}while(ameth >= 1)
		do{
			bread--;
		} while (bread >= 1);
		console.log('Reset Complete.');
		resetAmount++;
		bWorker = 0;
		nWorker = 0;
		gWorker = 0;
		diaMiner = 0;
		amethMiner = 0;
		var timeSpeedUpRemove = 20;
		do{
			timeSpeedUp--;
			timeSpeedUpRemove--;
		} while (timeSpeedUpRemove >= 1)
		clearInterval(bWorkerGain);
		clearInterval(nWorkerGain);
		clearInterval(gWorkerGain);
		clearInterval(diaMinerGain);
		clearInterval(amethGain);
	}
	if(resetAmount == 1){
		window.alert("Well done.");
	}
}
//Save Managment
//Load
if(typeof(Storage) !==undefined){
	dia = localStorage.getItem("diamondCount");
	ameth = localStorage.getItem("amethCount");
	bread = localStorage.getItem("breadCount");
	nWorker = localStorage.getItem("nWorkerCount");
	gWorker = localStorage.getItem("gWorkerCount");
	diaMiner = localStorage.getItem("diaMinerCount");
	amethMiner = localStorage.getItem("amethMinerCount");
	timeSpeedUp = localStorage.getItem("nWorkerSpeed");		
	appleUp = localStorage.getItem("clickUp");
	resetAmount = localStorage.getItem("finishCount");
	console.log("Save Loaded Successfully.");
	setTimeout(interval, 100);
	setTimeout(removeNaN, 10);
} else {
	window.alert("Failed to load save");
}
//Save
function save(){
	if(typeof(Storage) !== undefined){
		localStorage.setItem("diamondCount", dia);
		localStorage.setItem("amethCount", ameth);
		localStorage.setItem("breadCount", bread);
		localStorage.setItem("nWorkerCount", nWorker);
		localStorage.setItem("gWorkerCount", gWorker);
		localStorage.setItem("diaMinerCount", diaMiner);
		localStorage.setItem("amethMinerCount", amethMiner);
		localStorage.setItem("nWorkerSpeed", timeSpeedUp);
		localStorage.setItem("clickUp", appleUp);
		localStorage.setItem("finishesDone", resetAmount);
		console.log("Game Saved.");
		clearTimeout(save);
	} else {
		window.alert("Your browser does not support this saving feature. Your progress will be saved for this session ONLY.");
	}
}
//Makes the Workers do their job after load
function interval(){
	if(nWorker >= 1){setInterval(nWorkerGain, 5000 - nWorkerTime);}
	if(gWorker >= 1){setInterval(gWorkerGain, 5000 - gWorkerTime);}
	if(diaMiner >= 1){setInterval(diaMinerGain, 10000 - diaMinerTime);}
	if(amethMiner >= 1){setInterval(amethGain, 15000 - amethMinerTime);}
	clearTimeout(interval);
}
//Debugging only
function debugReset(){
		do{app--;}while(app >= 6)
		do{app++;}while(app <= 4)
		console.log(app);
		do{dia--;}while(dia >= 0)
		do{dia++;}while(dia <= -1)
		console.log(dia);
		do{ameth--;}while(ameth >= 0)
		do{ameth++;}while(ameth <= -1)
		console.log(ameth);
		do{bread--;}while(bread >= 0)
		do{bread++;}while(bread <= -1)
		console.log(bread);
		appleUp = false;
		console.log(appleUp);
		do{bWorker--;}while(bWorker >= 0)
		do{bWorker++;}while(bWorker <= -1)
		do{nWorker--;}while(nWorker >= 0)
		do{nWorker++;}while(nWorker <= -1)
		do{gWorker--;}while(gWorker >= 0)
		do{gWorker++;}while(gWorker <= -1)
		console.log(bWorker + nWorker + gWorker);
		do{diaMiner--;}while(diaMiner >= 0)
		do{diaMiner++;}while(diaMiner <= -1)
		do{amethMiner--;}while(amethMiner >= 0)
		do{amethMiner++;}while(amethMiner <= -1)
		console.log(diaMiner + amethMiner);
		do{x2SpeedUpvar--;}while(x2SpeedUpvar >= 1)
		do{x2SpeedUpvar++;}while(x2SpeedUpvar <= -1)
		console.log(x2SpeedUpvar);
		do{timeSpeedUp--;}while(timeSpeedUp >= 1)
		do{timeSpeedUp++;}while(timeSpeedUp <= -1)
		console.log(timeSpeedUp);
		clickUp = false;
		var time = 100 - timeSpeedUp;
		var bWorkerTime = bWorker / time;
		var nWorkerTime = nWorker / time;
		var gWorkerTime = gWorker / time;
		var diaMinerTime = diaMiner / time;
		var amethMinerTime = amethMiner / time;
		do{resetAmount++;}while(resetAmount <= 3)
		do{resetAmount--;}while(resetAmount >= 4)
		console.log(resetAmount);
		var cooldownSec = 120;
		setTimeout(save, 100);
}