var cheatList = [
	"list",
	"konami",
	"autoApp",
	"breadMaker",
	"morseRoads",
	"removeNaN",
	"phil",
	"waldo"
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
				document.getElementById('input').innerHTML = " ";
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
				document.getElementById('input').innerHTML = " ";
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
				document.getElementById('input').innerHTML = " ";
				break;
			case "removeNaN":
				setTimeout(removeNaN, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = "NaN values removed succesfully";
				document.getElementById('input').innerHTML = " ";
				break;
			case "list":
				setTimeout(list, 100);
				scriptOutObj.style.color="lime";
				scriptOutObj.style.fontfamily="arial";
				scriptOutObj.innerHTML = input + " Loaded";
				document.getElementById('input').innerHTML = " ";
				break;
			case "morseRoads":
				window.alert("almost heaven, west virginia, blue ridge mountains, shenandoah river, life is old there, older than the trees, younger than the mountains, blowing like a breeze, country roads, take me home, to the place i belong, west virginia, mountain mama take me home, country roads, all my memories gather round her, miner s lady, stranger to blue water, dark and dusty, painted on the sky, misty taste of moonshine, teardrop in my eye, country roads, take me home, to the place i belong, west virginia, mountain mama, take me home, country roads, i hear her voice, in the morning hour she calls me, the radio reminds me of my home far away, and driving down the road, i get a feeling, that i should have been home yesterday, yesterday, country roads, take me home, to the place i belong, west virginia, mountain mama, take me home, country roads, country roads, take me home to the place i belong, west virginia, mountain mama, take me home, country roads, take me home, down country roads, take me home, down country roads")
				window.alert(".- .-.. -- --- ... - / .... . .- ...- . -. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -... .-.. ..- . / .-. .. -.. --. . / -- --- ..- -. - .- .. -. ... --..-- / ... .... . -. .- -. -.. --- .- .... / .-. .. ...- . .-. --..-- / .-.. .. ..-. . / .. ... / --- .-.. -.. / - .... . .-. . --..-- / --- .-.. -.. . .-. / - .... .- -. / - .... . / - .-. . . ... --..-- / -.-- --- ..- -. --. . .-. / - .... .- -. / - .... . / -- --- ..- -. - .- .. -. ... --..-- / -... .-.. --- .-- .. -. --. / .-.. .. -.- . / .- / -... .-. . . --.. . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / .- .-.. .-.. / -- -.-- / -- . -- --- .-. .. . ... / --. .- - .... . .-. / .-. --- ..- -. -.. / .... . .-. --..-- / -- .. -. . .-. .----. ... / .-.. .- -.. -.-- --..-- / ... - .-. .- -. --. . .-. / - --- / -... .-.. ..- . / .-- .- - . .-. --..-- / -.. .- .-. -.- / .- -. -.. / -.. ..- ... - -.-- --..-- / .--. .- .. -. - . -.. / --- -. / - .... . / ... -.- -.-- --..-- / -- .. ... - -.-- / - .- ... - . / --- ..-. / -- --- --- -. ... .... .. -. . --..-- / - . .- .-. -.. .-. --- .--. / .. -. / -- -.-- / . -.-- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / .. / .... . .- .-. / .... . .-. / ...- --- .. -.-. . --..-- / .. -. / - .... . / -- --- .-. -. .. -. --. / .... --- ..- .-. / ... .... . / -.-. .- .-.. .-.. ... / -- . --..-- / - .... . / .-. .- -.. .. --- / .-. . -- .. -. -.. ... / -- . / --- ..-. / -- -.-- / .... --- -- . / ..-. .- .-. / .- .-- .- -.-- --..-- / .- -. -.. / -.. .-. .. ...- .. -. --. / -.. --- .-- -. / - .... . / .-. --- .- -.. --..-- / .. / --. . - / .- / ..-. . . .-.. .. -. --. --..-- / - .... .- - / .. / ... .... --- ..- .-.. -.. / .... .- ...- . / -... . . -. / .... --- -- . / -.-- . ... - . .-. -.. .- -.-- --..-- / -.-- . ... - . .-. -.. .- -.-- --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . / - --- / - .... . / .--. .-.. .- -.-. . / .. / -... . .-.. --- -. --. --..-- / .-- . ... - / ...- .. .-. --. .. -. .. .- --..-- / -- --- ..- -. - .- .. -. / -- .- -- .- --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.. --- .-- -. / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..-- / - .- -.- . / -- . / .... --- -- . --..-- / -.. --- .-- -. / -.-. --- ..- -. - .-. -.-- / .-. --- .- -.. ... --..--");
				document.getElementById('input').innerHTML = " ";
				break;
			case "phil":
				document.getElementById('backImg').style.backgroundImage = "url('https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/09/phil_a.jpg')";
				document.getElementById('appleButton').innerHTML = "Get Phil";
				document.getElementById('input').innerHTML = " ";
				break;
			case "waldo":
				document.getElementById('backImg').style.backgroundImage = "url('https://media.golfdigest.com/photos/5ac259d2b312500b48a85018/master/pass/waldo2.jpg')";
				document.getElementById('input').innerHTML = " ";
				break;
			default:
				scriptOutObj.style.color="red";
				scriptOutObj.innerHTML = "Hey, if you need to know the cheats, use 'list'.";
				document.getElementById('input').innerHTML = " ";
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
