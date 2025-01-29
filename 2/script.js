/*
1 = Rock
2 = Paper
3 = Scissor
*/
var win = lose = tie = 0;
function r(){
	var random = Math.ceil(Math.random()*3);
	if(random == 1){
		document.getElementById("c_m").textContent = `Rock`;
		document.getElementById("p_m").textContent = `Rock`;
		document.getElementById("g_r").textContent = `It is a TIE`;
		tie++;
	}
	else if(random == 2){
		document.getElementById("c_m").textContent = `Paper`;
		document.getElementById("p_m").textContent = `Rock`;
		document.getElementById("g_r").textContent = `You lose`;
		lose++;
	}
	else if(random == 3){
		document.getElementById("c_m").textContent = `Scissors`;
		document.getElementById("p_m").textContent = `Rock`;
		document.getElementById("g_r").textContent = `You WIN`;
		win++;
	}
	else{
		window.alert(`SOMETHING WENT WRONG`);
		window.location.reload();
	}
	document.getElementById("r_w").textContent = win;
	document.getElementById("r_l").textContent = lose;
	document.getElementById("r_t").textContent = tie;
}
function p(){
	var random = Math.ceil(Math.random()*3);
	if(random == 1){
		document.getElementById("c_m").textContent = `Rock`;
		document.getElementById("p_m").textContent = `Paper`;
		document.getElementById("g_r").textContent = `You WIN`;
		win++;
	}
	else if(random == 2){
		document.getElementById("c_m").textContent = `Paper`;
		document.getElementById("p_m").textContent = `Paper`;
		document.getElementById("g_r").textContent = `It is a TIE`;
		tie++;
	}
	else if(random == 3){
		document.getElementById("c_m").textContent = `Scissors`;
		document.getElementById("p_m").textContent = `Paper`;
		document.getElementById("g_r").textContent = `You lose`;
		lose++;
	}
	else{
		window.alert(`SOMETHING WENT WRONG`);
		window.location.reload();
	}
	document.getElementById("r_w").textContent = win;
	document.getElementById("r_l").textContent = lose;
	document.getElementById("r_t").textContent = tie;
}
function s(){
	var random = Math.ceil(Math.random()*3);
	if(random == 1){
		document.getElementById("c_m").textContent = `Rock`;
		document.getElementById("p_m").textContent = `Scissors`;
		document.getElementById("g_r").textContent = `You lose`;
		lose++;
	}
	else if(random == 2){
		document.getElementById("c_m").textContent = `Paper`;
		document.getElementById("p_m").textContent = `Scissors`;
		document.getElementById("g_r").textContent = `You WIN`;
		win++;
	}
	else if(random == 3){
		document.getElementById("c_m").textContent = `Scissors`;
		document.getElementById("p_m").textContent = `Scissors`;
		document.getElementById("g_r").textContent = `It is a TIE`;
		tie++;
	}
	else{
		window.alert(`SOMETHING WENT WRONG`);
		window.location.reload();
	}
	document.getElementById("r_w").textContent = win;
	document.getElementById("r_l").textContent = lose;
	document.getElementById("r_t").textContent = tie;
}

function reset(){
	window.location.reload();
}