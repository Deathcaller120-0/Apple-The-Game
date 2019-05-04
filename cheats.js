var cheatList = [
	"list",
	"konami",
	"autoApp",
	"breadMaker",
	"morseRoads",
	"removeNaN",
	"phil"
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
			case "phil":
				document.getElementById('backImg').style.background = "#ffffff url('data:image/jpeg;base64,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') no-repeat fixed center";
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
