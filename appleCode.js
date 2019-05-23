//Random console msg
var msg = [
	"You bout to cheat? Or are you lookin for some Devolper stuff?",
	"Lookin for secrets? You wont find any here.",
	"Cheated apples go rotten faster than normal apples."
];
var msgnum = Math.floor(Math.random() * 3);
var msgout = msg[msgnum];
console.log(msgout);
//Global Vars
var app = 5;
var dia = 0;
var ameth = 0;
var bread = 0;
var gM = 0;
var appleUp = false;
var bWorker = 0;
var nWorker = 0;
var nWorkerPrice = 25;
var nWorkerCount = 30;
var gWorker = 0;
var gWorkerPrice = 40;
var gWorkerCount = 20;
var diaMiner = 0;
var diaMinerPrice = 10;
var diaMinerCount = 10;
var amethMiner = 0;
var amethMinerPrice = 10;
var amethMinerCount = 10;
var breadMaker = 0;
var breadMakerPrice = 5;
var breadMakerCount = 5;
var time = 100;
var bWorkerTime = bWorker / time;
var nWorkerTime = nWorker / time;
var gWorkerTime = gWorker / time;
var diaMinerTime = diaMiner / time;
var amethMinerTime = amethMiner / time;
var breadMakerTime = breadMaker / time;
var resetAmount = 0;
var cooldownSec = 120;
setInterval(workerCheck, 500);
setInterval(unlocker, 500);
setInterval(save, 30000);
//Other
function unlocker(){
	if (app >= 10){
		document.getElementById('badHireButton').style.backgroundColor ="#994d00";
	} else {
		document.getElementById('badHireButton').style.backgroundColor ="#323639";
	}
	if (app >= 50){
		document.getElementById('diaButton').style.backgroundColor="#00ffff";
		document.getElementById('breadUpgrade').style.backgroundColor="#86592d";
	} else {
		document.getElementById('diaButton').style.backgroundColor="#323639";
		document.getElementById('breadUpgrade').style.backgroundColor="#323639";
	}
	if (app >= nWorkerPrice){
		document.getElementById('hireButton').style.backgroundColor ="#78ff00";
	} else {
		document.getElementById('hireButton').style.backgroundColor ="#323639";
	}
	if (app >= gWorkerPrice){
		document.getElementById('goodHireButton').style.backgroundColor="#00beff";
	} else {
		document.getElementById('goodHireButton').style.backgroundColor="#323639"
	}
	if (dia >= diaMinerPrice){
		document.getElementById('minerHireButton').style.backgroundColor="#33d6ff";
	} else {
		document.getElementById('minerHireButton').style.backgroundColor="#323639";
	}
	if (dia >= 20){
		document.getElementById('amethystButton').style.backgroundColor="#8000ff";
	} else {
		document.getElementById('amethystButton').style.backgroundColor="#323639";
	}
	if (dia >= 30){
		document.getElementById('workerSpeed').style.backgroundColor="#007fff"
	} else {
		document.getElementById('workerSpeed').style.backgroundColor="#323639";
	}
	if (dia >= 50){
		document.getElementById('clickUp').style.backgroundColor="#ffffff";
	} else {
		document.getElementById('clickUp').style.backgroundColor="#323639";
	}
	if (ameth >= amethMinerPrice){
		document.getElementById('amethystWorker').style.backgroundColor="#7f00ff";
	} else {
		document.getElementById('amethystWorker').style.backgroundColor="#323639";
	}
	if (ameth >= 30){
		document.getElementById('breadButton').style.backgroundColor="#bf8040";
	} else {
		document.getElementById('breadButton').style.backgroundColor="#323639";
	}
	if (ameth >= 1){
		document.getElementById('amethystApple').style.backgroundColor="#ccff33";
	} else {
		document.getElementById('amethystApple').style.backgroundColor="#323639";
	}
	if (bread >= breadMakerPrice){
		document.getElementById('breadMakerButton').style.backgroundColor ="#b59a4a";
	} else {
		document.getElementById('breadMakerButton').style.backgroundColor ="#323639";
	}
}
//NaN and null Terminator
function removeNaN(){
	if(typeof(app) !== undefined && isNaN(app) == false){
		document.getElementById('appleAmount').innerHTML=app + " Apples";
	} else {
		app = 0;
		document.getElementById('appleAmount').innerHTML=app + " Apples";
	}
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
	if(typeof(breadMaker) !== undefined && isNaN(breadMaker) == false){
		document.getElementById('breadMakerAmount').innerHTML = breadMaker + " Bread Baker(s)";
	} else {
		breadMaker = 0;
		document.getElementById('breadMakerAmount').innerHTML = breadMaker + " Bread Baker(s)";
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
		resetAmount = 0;
	} else {
		console.log(resetAmount);
	}
	if(gM == undefined || gM == null){
		gM = 0;
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
	document.getElementById('bMakerNoBread').innerHTML=" ";
}
//Worker Functions
function workerCheck(){
	if (bWorker >= 500){
		document.getElementById('badHireButton').disabled="true";
		document.getElementById('badHireButton').innerHTML="MAXED OUT";
	}
	if (nWorkerPrice == null || nWorkerPrice == NaN || nWorkerPrice == undefined){
		nWorkerPrice = 25;
	}
	if (nWorker >= 500){
		document.getElementById('hireButton').disabled="true";
		document.getElementById('hireButton').innerHTML="MAXED OUT";
		if (nWorker >= 601){
			do {
				nWorker--;
			} while (nWorker >= 501)
		}
	}
	if (gWorkerPrice == null || gWorkerPrice == NaN || gWorkerPrice == undefined){
		gWorkerPrice = 40;
	}
	if (gWorker >= 500){
		document.getElementById('goodHireButton').disabled="true";
		document.getElementById('goodHireButton').innerHTML="MAXED OUT";
		if (gWorker >= 601){
			do {
				gWorker--;
			} while (gWorker >= 501)
		}
	}
	if (diaMinerPrice == undefined || diaMinerPrice == null || diaMinerPrice == NaN){
		diaMinerPrice = 10;
	}
	if (diaMiner >= 200){
		document.getElementById('minerHireButton').disabled="true";
		document.getElementById('minerHireButton').innerHTML="MAXED OUT";
		if (diaMiner >= 301){
			do {
				diaMiner--;
			} while (diaMiner >= 301)
		}
	}
	if (amethMinerPrice == undefined || amethMinerPrice == null || amethMinerPrice == NaN){
		amethMinerPrice = 10;
	}
	if (amethMiner >= 100){
		document.getElementById('amethystWorker').innerHTML="MAXED OUT";
		document.getElementById('amethystWorker').disabled="true";
		if (amethMiner >= 101){
			do {
				amethMiner--;
			} while (amethMiner >= 101)
		}
	}
	if (breadMakerPrice == undefined || breadMakerPrice == null || breadMakerPrice == NaN){
		breadMakerPrice = 5;
	}
	if (breadMaker >= 75){
		document.getElementById('breadMakerButton').innerHTML="MAXED OUT";
		document.getElementById('breadMakerButton').disabled="true";
		if (breadMaker >= 76){
			do {
				breadMaker--;
			} while (breadMaker >= 76)
		}
	}
}
function bWorkerBuy() {
	if(app <= 9){
		document.getElementById('badNoApple').innerHTML="How don't You have enough apples!";
		setTimeout(clearNos, 5000);
	}
	if (app >= 10){
		if(bWorker >= 600){
			document.getElementById('badHireButton').disabled="true";
		}
		bWorker++;
		document.getElementById('badWorkerAmount').innerHTML=bWorker + " Bad Apple Pickers";
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
function bWorkerSell(){
	if (bWorker >= 1){
		bWorker--;
		var appadd = 8;
		do {
			app++;
			appadd--;
		} while (appadd >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples Collected | Apple: The Game!";
		document.getElementById('badWorkerAmount').innerHTML=bWorker + " Bad Apple Pickers";
		if (bWorker == 0){
			clearInterval(bWorkerGain);
		}
	}
}
function nWorkerBuy(){
	if(app <= nWorkerPrice - 1){
		document.getElementById('normNoApple').innerHTML ="You don't have enough Apples!";
		setTimeout(clearNos, 5000);
	}
	if(app >= nWorkerPrice){
		nWorker++;
		nWorkerCount--;
		if (nWorkerCount == 0){
			nWorkerPrice++;
			nWorkerPrice++;
			do{
				nWorkerCount++;
			} while (nWorkerCount <= 29)
			document.getElementById('nWorkerPrice').innerHTML=nWorkerPrice;
		}
		document.getElementById('workerAmount').innerHTML=nWorker + " Apple Pickers";
		var appleRemove = nWorkerPrice;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		setInterval(nWorkerGain, 5000 - nWorkerTime);
		setInterval(nWorkerPay, 10000);
	}
}
function nWorkerPay(){
	app--;
	app--;
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
}
function nWorkerSell(){
	if (nWorker >= 1){
		nWorker--;
		var appadd = nWorkerPrice - 2;
		do {
			app++;
			appadd--;
		} while (appadd >= 1)
		document.getElementById('workerAmount').innerHTML=nWorker + " Apple Pickers";
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		if (nWorker == 0){
			clearInterval(nWorkerGain);
			clearInterval(nWorkerPay);
		}
	}
}
function gWorkerBuy(){
	if(app <= gWorkerPrice - 1){
		document.getElementById('goodNoApple').innerHTML="You don't have enough Apples!";
		setTimeout(clearNos, 5000)
	}
	if(app >= gWorkerPrice){
		gWorker++;
		gWorkerCount--;
		if (gWorkerCount == 0){
			gWorkerPrice++;
			gWorkerPrice++;
			do{
				gWorkerCount++;
			} while (gWorkerCount <= 39)
			document.getElementById('gWorkerPrice').innerHTML=gWorkerPrice;
		}
		document.getElementById('gWorkerAmount').innerHTML= gWorker + " Good Apple Pickers";
		var appleRemove = gWorkerPrice;
		do{
			app--;
			appleRemove--;
		} while (appleRemove >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		setInterval(gWorkerGain, 5000 - gWorkerTime);
		setInterval(gWorkerPay, 9000);
	}
}
function gWorkerPay(){
	app--;
	app--;
	document.getElementById('appleAmount').innerHTML=app + " Apples";
	document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
}
function gWorkerSell(){
	if (gWorker >= 1){
		gWorker--;
		var appadd = gWorkerPrice - 2;
		do {
			app++;
			appadd--;
		} while (appadd >= 1)
		document.getElementById('appleAmount').innerHTML=app + " Apples";
		document.getElementById('titleApples').innerHTML=app + " Apples collected | Apple: The Game!";
		document.getElementById('gWorkerAmount').innerHTML= gWorker + " Good Apple Pickers";
		if (gWorker == 0){
			clearInterval(gWorkerPay);
			clearInterval(gWorkerGain);
		}
	}
}
function diaMinerHire(){
	if (dia <= diaMinerPrice - 1){
		document.getElementById('minerNoDia').innerHTML="You don't have enough Diamonds!";
		setTimeout(clearNos, 5000);
	}
	if (dia >= diaMinerPrice){
		diaMiner++;
		diaMinerCount--;
		if (diaMinerCount == 0){
			diaMinerPrice++;
			diaMinerPrice++;
			do {
				diaMinerCount++;
			} while (diaMinerCount <= 9)
			document.getElementById('diaMinerPrice').innerHTML=diaMinerPrice;
		}
		var diamondRemove = diaMinerPrice;
		do {
			dia--;
			diamondRemove--;
		} while (diamondRemove >= 1)
		setInterval(diaMinerGain, 10000 - diaMinerTime);
		setInterval(diaMinerPay, 15000);
		document.getElementById('minerAmount').innerHTML= diaMiner + " Miner(s)";
		document.getElementById('diaAmount').innerHTML= dia + " Diamond(s)";
	}
}
function diaMinerPay(){
	dia--;
	document.getElementById('diaAmount').innerHTML= dia + " Diamond(s)";
}
function dMinerSell(){
	if (diaMiner >= 1){
		diaMiner--;
		var diaadd = diaMinerPrice - 2;
		do {
			dia++;
			diaadd--;
		} while (diaadd >= 1)
		document.getElementById('minerAmount').innerHTML= diaMiner + " Miner(s)";
		document.getElementById('diaAmount').innerHTML= dia + " Diamond(s)";
		if (diaMiner == 0){
			clearInterval(diaMinerGain);
			clearInterval(diaMinerPay);
		}
	}
}
function amethMinerBuy(){
	if(ameth <= amethMinerPrice - 1){
		document.getElementById('minerNoAmethyst').innerHTML="You don't have enough Amethyst!";
		setInterval(clearNos, 5000);
	}
	if(ameth >= amethMinerPrice){
		amethMiner++;
		amethMinerCount--;
		if (amethMinerCount == 0){
			amethMinerPrice++;
			amethMinerPrice++;
			do {
				amethMinerCount++;
			} while (amethMinerCount <= 9)
			document.getElementById('amethMinerPrice').innerHTML=amethMinerPrice;
		}
		var amethRemove = amethMinerPrice;
		do{
			ameth--;
			amethRemove--;
		} while (amethRemove >= 1)
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
		document.getElementById('amethystMinerAmount').innerHTML=amethMiner + " Amethyst Miner(s)";
		setInterval(amethGain, 15000 - amethMinerTime);
		setInterval(amethMinerPay, 20000)
	}
}
function aMinerSell(){
	if (amethMiner >= 1){
		amethMiner--;
		var amethadd = amethMinerPrice - 2;
		do {
			ameth++;
			amethadd--;
		} while (amethadd >= 1)
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
		document.getElementById('amethystMinerAmount').innerHTML=amethMiner + " Amethyst Miner(s)";
		if (amethMiner == 0){
			clearInterval(amethGain);
			clearInterval(amethMinerPay);
		}
	}
}
function amethMinerPay(){
	ameth--;
	document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
}
function breadMakerBuy(){
	if (bread <= breadMakerPrice - 1){
		document.getElementById('bMakerNoBread').innerHTML="You don't have enough Bread!";
		setInterval(clearNos, 5000);
	}
	if (bread >= breadMakerPrice){
		breadMaker++;
		breadMakerCount--;
		if (breadMakerCount == 0){
			breadMakerPrice++;
			do {
				breadMakerCount++;
			} while (breadMakerCount <= 4)
			document.getElementById('breadMakerPrice').innerHTML=breadMakerPrice;
		}
		var breadRemove = breadMakerPrice;
		do{
			bread--;
			breadRemove--;
		} while (breadRemove >= 1)
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
		document.getElementById('breadMakerAmount').innerHTML=breadMaker + " Bread Bakers";
	}
}
function breadMakerPay(){
	bread--;
	document.getElementById('breadAmount').innerHTML=bread + " Bread";
}
function bMakerSell(){
	if (breadMaker >= 1){
		breadMaker--;
		var breadadd = breadMakerPrice - 2;
		do {
			ameth++;
			amethadd--;
		} while (amethadd >= 1)
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
		document.getElementById('breadMakerAmount').innerHTML=breadMaker + " Bread Bakers";
		if (breadMaker == 0){
			clearInterval(breadMakerGain);
			clearInterval(breadMakerPay);
		}
	}
}
//Get/Buy resources
function appleGain(){
	document.addEventListener('keydown', function(event) {
		if (event.keyCode == 13 && app >= 6){
		app--;
		} else {return;}
	}, true);
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
}
//When spacebar is pressed, app++
var spaceclicked = false;
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 32 && spaceclicked == false) {
		setTimeout(appleGain, 10);
		spaceclicked = true;
	} else {
		return;
	}
}, true);
document.addEventListener('keyup', function(event){
	if (event.keyCode == 32){
		spaceclicked = false;
	}
}, true)
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
		document.getElementById('amethystNoDia').innerHTML="You don't have enough Diamonds!";
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
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
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
		document.getElementById('breadAmount').innerHTML=bread + " Bread";
		document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
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
	document.getElementById('diaAmount').innerHTML=dia + " Diamond(s)";
}
function amethGain(){
	ameth++;
	document.getElementById('amethystAmount').innerHTML=ameth + " Amethyst";
	var finishCheck = app + dia + ameth;
}
function breadMakerGain(){
	bread++;
	document.getElementById('breadAmount').innerHTML=bread + " Bread";
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
	document.getElementById('speedNoDia').innerHTML="You don't have enough Diamonds!";
	setTimeout(clearNos, 5000);
	}
	if (dia >= 30){
		var timeSpeedUp = 50;
		var diamondRemove = 30;
		do{
			diamondRemove--;
			dia--;
		} while (diamondRemove >= 1)
		document.getElementById('workerSpeed').disabled="true";
		document.getElementById('workerSpeed').innerHTML="Sold Out"
	}
	document.getElementById('diaAmount').innerHTML=dia + " diamond(s)";
}
function clickUp(){
	if (dia <= 49){
		document.getElementById('clickNoDia').innerHTML = "You don't have enough Diamonds!";
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
//Finish
function finishTry(){
	debugger;
	var finishCheck = app + dia + ameth + bread;
	if(app <= 9999 || dia <= 499 || ameth <= 299 || bread <= 99){
		window.alert('You need more Resources!');
		console.log(finishCheck);
		setTimeout(clearNos, 5000);
	}
	if(app >= 10000 && dia >= 500 && ameth >= 300 && bread >= 100){
		console.log(finishCheck);
		do {
			app--;
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
		resetAmount += 1;
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
	breadMaker = localStorage.getItem("breadBakers");
	timeSpeedUp = localStorage.getItem("nWorkerSpeed");		
	appleUp = localStorage.getItem("clickUp");
	resetAmount = localStorage.getItem("finishCount");
	nWorkerPrice = localStorage.getItem("nWorkPrice");
	gWorkerPrice = localStorage.getItem("gWorkPrice");
	diaMinerPrice = localStorage.getItem("dMinePrice");
	amethMinerPrice = localStorage.getItem("aMinePrice");
	breadMakerPrice = localStorage.getItem("bMakerPrice");
	nWorkerCount = localStorage.getItem("nWorkCount");
	gWorkerCOunt = localStorage.getItem("gWorkCount");
	diaMinerCount = localStorage.getItem("dMineCount");
	amethMinerCount = localStorage.getItem("aMineCount");
	breadMakerCOunt = localStorage.getItem("bMakeCount");
	gM = localStorage.getItem("gameMode");
	console.log("Save Loaded Successfully.");
	setTimeout(interval, 100);
	setTimeout(removeNaN, 10);
} else {
	window.alert("Failed to load save, Does your browser support this saving feature.");
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
		localStorage.setItem("breadBakers", breadMaker);
		localStorage.setItem("nWorkerSpeed", timeSpeedUp);
		localStorage.setItem("clickUp", appleUp);
		localStorage.setItem("finishesDone", resetAmount);
		localStorage.setItem("nWorkPrice", nWorkerPrice);
		localStorage.setItem("gWorkPrice", gWorkerPrice);
		localStorage.setItem("dMinePrice", diaMinerPrice);
		localStorage.setItem("aMinePrice", amethMinerPrice);
		localStorage.setItem("bMakerPrice", breadMakerPrice);
		localStorage.setItem("nWorkCount", nWorkerCount);
		localStorage.setItem("gWorkCount", gWorkerCount);
		localStorage.setItem("dMineCount", diaMinerCount);
		localStorage.setItem("aMineCount", amethMinerCount);
		localStorage.setItem("bMakeCount", breadMakerCount);
		localStorage.setItem("gameMode", gM);
		clearTimeout(save);
	}
}
//Makes the Workers do their job after load
function interval(){
	nWorkerTime = nWorker / time;
	gWorkerTime = gWorker / time;
	diaMinerTime = diaMiner / time;
	amethMinerTime = amethMiner / time;
	breadMakerTime = breadMaker / time;
	var nwre = nWorker;
	var gwre = gWorker;
	var dmre = diaMiner;
	var amre = amethMiner;
	var bmre = breadMaker;
	if(nWorker >= 1){
		do {
			setInterval(nWorkerGain, 5000 - nWorkerTime);
			nwre--;
		} while (nwre >= 0)
	}
	if(gWorker >= 1){
		do {
			setInterval(gWorkerGain, 5000 - gWorkerTime);
			gwre--;
		} while (gwre >= 1)
	}
	if(diaMiner >= 1){
		do {
			setInterval(diaMinerGain, 10000 - diaMinerTime);
			dmre--;
		} while (dmre >= 1)
	}
	if(amethMiner >= 1){
		do {
			setInterval(amethGain, 15000 - amethMinerTime);
			amre--;
		} while (amre >= 1)
	}
	if(breadMaker >= 1){
		do {
			setInterval(breadMakerGain, 15000 - amethMinerTime);
			bmre--;
		} while (bmre >= 1)
	}
	clearTimeout(interval);
}
//Debugging only
function debugReset(){
	var pro = prompt("Are you sure you want to reset? (y/n)");
	if (pro == "y" || pro == "Y"){
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
		do{resetAmount++;}while(resetAmount <= -1)
		do{resetAmount--;}while(resetAmount >= 1)
		console.log(resetAmount);
		nWorkerPrice = 25;
		gWorkerPrice = 40;
		diaMinerPrice = 10;
		amethMinerPrice = 10;
		breadMakerPrice = 5;
		nWorkerCount = 30;
		gWorkerCount = 20;
		diaMinerCount = 10;
		amethMinerCount = 10;
		breadMakerCount = 5;
		var cooldownSec = 120;
		setTimeout(removeNaN, 10)
		setTimeout(save, 100);
	} else { 
		return;
	}
}
//Extra Modes
function normal(){
	if(gM !== 0){
		var pro = prompt("Are you sure you want to continue? Y/n");
		if(pro == " " || pro == "Y" || pro == "y"){	
			document.getElementById("appleButton").disabled = false;
			gM = 0;
			app = 5;
			dia = 0;
			ameth = 0;
			bread = 0;
		}
	}
}
function slow(){
	if(gM !== 1){
		var pro = prompt("Are you sure you want to continue? Y/n");
		if(pro == " " || pro == "Y" || pro == "y"){
			document.getElementById("appleButton").disabled = true;
			gM = 1;
			app = 5;
			dia = 0;
			ameth = 0;
			bread = 0;
			nWorkerPrice = 25;
			gWorkerPrice = 40;
			diaMinerPrice = 10;
			amethMinerPrice = 10;
			breadMakerPrice = 5;
			bWorker = 0;
			nWorker = 0;
			gWorker = 0;
			diaMiner = 0;
			amethMiner = 0;
		}
	}
}
