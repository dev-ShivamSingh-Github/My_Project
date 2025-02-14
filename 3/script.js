var win,loose,ties;
var arr = [0,0,0,0,0,0,0,0,0];
const btn = document.querySelectorAll('.buttons');

btn.forEach(button => {
	button.addEventListener('click', () => {
		button.disabled = true;
		button.style.backgroundColor = "#108b8c";
		arr[button.id] = 1;
		//console.log(`arr[${button.id}]: ${arr[button.id]}`);
		device();
	});
});

function main(){
	console.log(`Main Function`);
}
function device(){
	do{
		var random = Math.ceil(Math.random()*9)-1;
		if(arr.every(val => val === arr[0])){
			//console.log(`if`);
			random = null;
			break;
		}
		else{
			//console.log(`else`);
			if(arr[random]===1){
				//console.log(`else of if`);
				var random = Math.ceil(Math.random()*9)-1;
			}
			else{
				//console.log(`else of else`);
				break;
			}			
		}
		//console.log(`do while`);
	}while(true);
	if(random!=null){
		arr[random] = 1;
		//console.log(`arr[${random}]: ${arr[random]}`);
		btn[random].style.backgroundColor = "#ff9800";
		btn[random].disabled = true;
	}
	else{
		//pass
	}
}

function restart(){
	//console.log(`Game restarted`);
	random = null;
	//console.log(`random: ${random}`);
	for(let i=0; i<9; i++){
		arr[i] = 0;
		//console.log(`arr[${i}]: ${arr[i]}`);
	}
	btn.forEach(button => {
		button.disabled = false;
		button.style.backgroundColor = null;
	});
}

function reset(){
	window.location.reload();
}

main();

/*function checkWinner(){
	//Check Rows
	for(let i=0; i<3; i++){
		if(arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2]){
			win++;
		}
	}
	//Check Column
	for(let i=0; i<3; i++){
		if(arr[0][i] == arr[1][i] && arr[0][i] == arr[2][i]){
			win++;
		}
	}
	//Check Diagonal
	for(let i=0; i<3; i++){
		if(arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]){
			win++;
		}
	}
	for(let i=0; i<3; i++){
		if(arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]){
			win++;
		}
	}
	tie++;
}*/