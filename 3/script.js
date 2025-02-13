var win = loose = tie = 0;
var arr = [0,0,0,0,0,0,0,0,0];
const btn = document.querySelectorAll('.buttons');

btn.forEach(button => {
	button.addEventListener('click', () => {
		button.disabled = true;
		button.style.backgroundColor = "#108b8c";
		console.log(button.id);
		console.log(btn[button.id]);
		arr[button.id] = 1;
		device(arr[device.id]);
	});
});

function main(){
	console.log(`Main Function`);
}
function device(arr){
	do{
		var random = Math.ceil(Math.random()*9)-1;
		if(random==arr){
			var random = Math.ceil(Math.random()*9)-1;
		}
		else{
			break;
		}	
	}while(0==0);
	btn[random].style.backgroundColor = "#ff9800";	
}
function checkWinner(){
	//Check Rows
	for(var i=0; i<3; i++){
		if(arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2]){
			win++;
		}
	}
	//Check Column
	for(i=0; i<3; i++){
		if(arr[0][i] == arr[1][i] && arr[0][i] == arr[2][i]){
			win++;
		}
	}
	//Check Diagonal
	for(i=0; i<3; i++){
		if(arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]){
			win++;
		}
	}
	for(i=0; i<3; i++){
		if(arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]){
			win++;
		}
	}
	tie++;
}
function restart(){
	console.log(`Game restarted`);
}

function reset(){
	window.location.reload();
}

main();