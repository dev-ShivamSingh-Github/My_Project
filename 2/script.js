/*
Some Variables required for working of the game.
*/
var win = 0,lose = 0,tie = 0,winner;
var arr = ['', '', '', '', '', '', '', '', ''];
const btn = document.querySelectorAll('.buttons');
/*
A reset function that will reload the page to play from 0.
*/
function reset(){
	window.location.reload();
}
/*
A function to play the game again without resetting the scores.
*/
function restart(){
	for(let i=0; i<9; i++){
		arr[i] = '';
	}
	btn.forEach(button => {
		button.disabled = false;
		button.style.backgroundColor = null;
		button.style.display = null;
	});
	document.getElementById('hide').style.display = 'none';
}
/*
A function to generate a random move from the computer side.
*/
function computer(){
	do{
		var random = Math.ceil(Math.random()*9)-1;
		if(arr[random]==='X' || arr[random]==='O'){
			var random = Math.ceil(Math.random()*9)-1;
		}
		else{
			break;
		}
	}while(true);
	arr[random] = 'X';
	btn[random].style.backgroundColor = "#ff9800";
	btn[random].disabled = true;
}
/*
A helper function for checkWinner function
*/
function cW(x, y, z){
	if(arr[x] == arr[y] && arr[x] == arr[z]){
		if(arr[x]=='X' || arr[x]=='O'){
			return true;			
		}
	}
}
/*
A function to check the winner.
*/
function checkWinner(){
	//Check Rows
	if(cW(0, 1, 2)){return arr[0];}
	else if(cW(3, 4, 5)){return arr[3];}
	else if(cW(6, 7, 8)){return arr[6];}
	//Check Column
	else if(cW(0, 3, 6)){return arr[0];}
	else if(cW(1, 4, 7)){return arr[1];}
	else if(cW(2, 5, 8)){return arr[2];}
	//Check Diagonal
	else if(cW(0, 4, 8)){return arr[0];}
	else if(cW(2, 4, 6)){return arr[2];}
	else{
		let i,x=0;
		for(i=0; i<9; i++){
			if(arr[i]=='X' || arr[i]=='O'){x++;}
		}
		if(x===9){return "tie";}
		else{return '';}
	}
}
/*
A helper function for the function showWinner
*/
function sW(id, value, status){
	document.getElementById(id).textContent = value;
	btn.forEach(button => {
		button.disabled = true;
		button.style.backgroundColor = null;
		button.style.display = 'none';
	});
	document.getElementById('hide').style.display = 'inline';
	document.getElementById('hide').textContent = status;
}
/*
A function to change score as per the winner
*/
function showWinner(winner){
	if(winner=='O'){
		win++;
		sW("r_w", win, "You Win");
		return 'over';
	}
	else if(winner=='X'){
		lose++;
		sW("r_l", lose, "You lose");
		return 'over';
	}
	else if(winner==="tie"){
		tie++;
		sW("r_t", tie, "It is a TIE");
		return 'over';
	}
	else{}
}
/*
A segment of main code
*/
btn.forEach(button => {
	button.addEventListener('click', () => {
		button.disabled = true;
		button.style.backgroundColor = "#108b8c";
		arr[button.id] = "O";
		winner = checkWinner();
		/*should game continue*/
		let sgc = showWinner(winner);
		if(sgc!=='over'){
			computer();
			winner = checkWinner();
			showWinner(winner);
		}
	});
});