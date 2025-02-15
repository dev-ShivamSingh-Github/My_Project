/*
Some Variables required for working of the game.
*/
var win=0, loose=0, tie=0, stp=null;
var arr = ['', '', '', '', '', '', '', '', ''];
const btn = document.querySelectorAll('.buttons');
/*
A function to generate a random move from the computer side.
*/
function computer(){
	do{
		var random = Math.ceil(Math.random()*9)-1;
		if(stp){
			console.log(`if`);
			random = null;
			break;
		}
		else{
			console.log(`else`);
			if(arr[random]==='X' || arr[random]==='O'){
				console.log(`else of if`);
				var random = Math.ceil(Math.random()*9)-1;
			}
			else{
				console.log(`else of else`);
				break;
			}			
		}
		console.log(`do while`);
	}while(true);
	if(random!=null){
		arr[random] = 'X';
		console.log(`arr[${random}]: ${arr[random]}`);
		btn[random].style.backgroundColor = "#ff9800";
		btn[random].disabled = true;
		//score();
	}
	else{
		score();
	}
}
/*
A function to stop computer() function making any further random guesses
*/
function stop(){
	var c = 0;
	for(let i=0; i<9; i++){
		switch(arr[i]){
			case 'X':c++;break;
			case 'O':c++;break;
			default:break;
		}
	}
	if(c===9){
		stp = true;
	}
	else{
		stp = false;
	}
}
/*
A segment of code that will in-take user input and....
*/
btn.forEach(button => {
	button.addEventListener('click', () => {
		button.disabled = true;
		button.style.backgroundColor = "#108b8c";
		arr[button.id] = 'O';
		console.log(`arr[${button.id}]: ${arr[button.id]}`);
		score();
		stop();
		computer();
	});
});
/*
A function to play the game again without resetting the scores.
*/
function restart(){
	random = null;
	stp = null;
	console.log(`Game restarted`);
	console.log(`random: ${random}`);
	console.log(`stp: ${stp}`);
	for(let i=0; i<9; i++){
		arr[i] = '\0';
		console.log(`arr[${i}]: ${arr[i]}`);
	}
	btn.forEach(button => {
		button.disabled = false;
		button.style.backgroundColor = null;
		button.style.display = "revert";
	});
	document.getElementById("hide").style.display = "none";
}
/*
A function to check the winner.
*/
function score(){
	if(arr[0]===arr[1] && arr[1]===arr[2]){
		console.log(`1 if`);
		switch(arr[0]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[3]===arr[4] && arr[4]===arr[5]){
		console.log(`2 if`);
		switch(arr[3]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[6]===arr[7] && arr[7]===arr[8]){
		console.log(`3 if`);
		switch(arr[6]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[0]===arr[3] && arr[3]===arr[6]){
		console.log(`4 if`);
		switch(arr[0]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[1]===arr[4] && arr[4]===arr[7]){
		console.log(`5 if`);
		switch(arr[1]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[2]===arr[5] && arr[2]===arr[8]){
		console.log(`6 if`);
		switch(arr[2]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[0]===arr[4] && arr[4]===arr[8]){
		console.log(`7 if`);
		switch(arr[0]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else if(arr[2]===arr[4] && arr[4]===arr[6]){
		console.log(`8 if`);
		switch(arr[2]){
			case 'O':win++;break;
			case 'X':loose++;break;
			default:break;
		}
	}
	else{
		console.log(`It is getting lengthy`);
	}
	if(win>0){
		btn.forEach(button => {
			button.style.display = "none";
		});
		document.getElementById("hide").style.display = "inline";
		document.getElementById("hide").textContent = "You WIN";
	}
	if(loose>0){
		btn.forEach(button => {
			button.style.display = "none";
		});
	}
	document.getElementById('r_w').textContent = win;
	document.getElementById('r_l').textContent = loose;
	document.getElementById('r_t').textContent = tie;
	console.log("Checking Winner....");
}
/*

*/
function change_after_win_or_loose(){
	
}
/*
A reset function that will reload the page to play from 0.
*/
function reset(){
	window.location.reload();
}