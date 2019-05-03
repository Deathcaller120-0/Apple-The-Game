var cheatList = [
	"list",
	"konami",
	"autoApp",
	"breadMaker",
	"morseRoads",
	"removeNaN"
]
var koEx = false;
var autoAppEx = false;
var breMakEx = false;
//Cheat Loader
function loader(){
	var scriptOutObj;
	scriptOutObj = document.getElementById('scriptOut');
	var input = document.getElementById('input').value;
	if (isNaN(input) != false){ //If number, give error
		switch (input) {
			case "konami":
				if(koEx == true){
					break;
				}
				koEx = true;
				setTimeout(konami, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = input + " Loaded";
				break;
			case "autoApp":
				if(autoAppEx == true){
					break;
				}
				autoAppEx = true;
				setTimeout(autoApp, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = input + " Loaded";
				break;
			case "breadMaker":
				if(breMakEx == true){
					break;
				}
				breMakEx = true;
				setInterval(breadAutoMaker, 120000);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = input + " Loaded";
				break;
			case "removeNaN":
				setTimeout(removeNaN, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = "NaN values removed succesfully";
				break;
			case "debugReset":
				setTimeout(debugReset, 100);
				scriptOutObj.innerHTML="Reset Sucessful";
				break;
			case "list":
				setTimeout(list, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = input + " Loaded";
				break;
			case "morseRoads":
				window.alert("almost heaven, west virginia, blue ridge mountains, shenandoah river, life is old there, older than the trees, younger than the mountains, blowing like a breeze, country roads, take me home, to the place i belong, west virginia, mountain mama take me home, country roads, all my memories gather round her, miner s lady, stranger to blue water, dark and dusty, painted on the sky, misty taste of moonshine, teardrop in my eye, country roads, take me home, to the place i belong, west virginia, mountain mama, take me home, country roads, i hear her voice, in the morning hour she calls me, the radio reminds me of my home far away, and driving down the road, i get a feeling, that i should have been home yesterday, yesterday, country roads, take me home, to the place i belong, west virginia, mountain mama, take me home, country roads, country roads, take me home to the place i belong, west virginia, mountain mama, take me home, country roads, take me home, down country roads, take me home, down country roads")
				window.alert(".- .-.. -- --- ... - / .... . .- ...- . -. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -... .-.. ..- . / .-. .. -.. --. . / -- --- ..- -. - .- .. -. ... --..-- / ... .... . -. .- -. -.. --- .- .... / .-. .. ...- . .-. --..-- / .-.. .. ..-. . / .. ... / --- .-.. -.. / - .... . .-. . --..-- / --- .-.. -.. . .-. / - .... .- -. / - .... . / - .-. . . ... --..-- / -.-- --- ..- -. --. . .-. / - .... .- -. / - .... . / -- --- ..- -. - .- .. -. ... --..-- / -... .-.. --- .-- .. -. --. / .-.. .. -.- . / .- / -... .-. . . --.. . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / .- .-.. .-.. / -- -.-- / -- . -- --- .-. .. . ... / --. .- - .... . .-. / .-. --- ..- -. -.. / .... . .-. --..-- / -- .. -. . .-. .----. ... / .-.. .- -.. -.-- --..-- / ... - .-. .- -. --. . .-. / - --- / -... .-.. ..- . / .-- .- - . .-. --..-- / -.. .- .-. -.- / .- -. -.. / -.. ..- ... - -.-- --..-- / .--. .- .. -. - . -.. / --- -. / - .... . / ... -.- -.-- --..-- / -- .. ... - -.-- / - .- ... - . / --- ..-. / -- --- --- -. ... .... .. -. . --..-- / - . .- .-. -.. .-. --- .--. / .. -. / -- -.-- / . -.-- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / .. / .... . .- .-. / .... . .-. / ...- --- .. -.-. . --..-- / .. -. / - .... . / -- --- .-. -. .. -. --. / .... --- ..- .-. / ... .... . / -.-. .- .-.. .-.. ... / -- . --..-- / - .... . / .-. .- -.. .. --- / .-. . -- .. -. -.. ... / -- . / --- ..-. / -- -.-- / .... --- -- . / ..-. .- .-. / .- .-- .- -.-- --..-- / .- -. -.. / -.. .-. .. ...- .. -. --. / -.. --- .-- -. / - .... . / .-. --- .- -.. --..-- / .. / --. . - / .- / ..-. . . .-.. .. -. --. --..-- / - .... .- - / .. / ... .... --- ..- .-.. -.. / .... .- ...- . / -... . . -. / .... --- -- . / -.-- . ... - . .-. -.. .- -.-- --..-- / -.-- . ... - . .-. -.. .- -.-- --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.. --- .-- -. / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.. --- .-- -. / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..--");
				break;
			default:
				scriptOutObj.style.color="red";
				scriptOutObj.innerHTML = "Hey, if you need to know the cheats, use 'list'.";
			break;	
		}
	}
}
//Grab Cheat List
function list(){
	var arr = 0;
	setInterval(listf, 5000)
	function listf(){
		if(arr >= cheatList.length){
			document.getElementById('List').innerHTML = "Use 'list' for Cheats";
			arr++;
		} else if(arr <= cheatList.length){
			var disp = cheatList[arr];
			document.getElementById('List').innerHTML = disp;
			arr++;
		}
	}
}
//Cheats
function konami(){
	var pro = prompt("This is the first cheat that can be used, Do you want to continue? Y/n (Y is selected default)");
	if(pro == "y" || pro == " " || pro == "Y"){
		window.alert("So you're that desperate huh,");
		var konami = 1000;
		do {
			app++;
			app++;
			app++;
			dia++;
			dia++;
			ameth++;
			konami--;
		} while (konami >= 1)
	} else if(pro == "n" || pro == "N"){
		window.alert("Congrats! You're not a disappointment! Have 20 Good Apple Pickers.");
		var konami = 20
		do {
			gWorker++;
		} while (konami >= 1) 
	}
}
function autoApp(){
	app = -100;
	setTimeout(appleGain, 500);
}
function breadAutoMaker(){
	bread++;
}
