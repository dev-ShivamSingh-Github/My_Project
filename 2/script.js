//1 = Rock | 2 = Paper | 3 = Scissors
var win = 0, lose = 0, tie = 0, random = 0;
const btn = document.querySelectorAll('button');
function another_helper(c_m, p_m, g_r){
	document.getElementById("c_m").textContent = c_m;
	document.getElementById("p_m").textContent = p_m;
	document.getElementById("g_r").textContent = g_r;
}
function helper(random, user){
	if(random == 1){
		if(user==='Rock'){another_helper('Rock', user, 'It is a Tie'); tie++}
		else if(user==='Paper'){another_helper('Rock', user, 'You Win'); win++;}
		else{another_helper('Rock', user, 'You Lose'); lose++;}
	}
	else if(random == 2){
		if(user==='Rock'){another_helper('Paper', user, 'You Lose'); lose++;}
		else if(user==='Paper'){another_helper('Paper', user, 'It is a Tie'); tie++;}
		else{another_helper('Paper', user, 'You Win'); win++;}
	}
	else if(random == 3){
		if(user==='Rock'){another_helper('Scissors', user, 'You Win'); win++;}
		else if(user==='Paper'){another_helper('Scissors', user, 'You Lose'); lose++;}
		else{another_helper('Scissors', user, 'It is a Tie'); tie++;}
	}
	else{
		window.alert(`SOMETHING WENT WRONG`);
		window.location.reload();
	}
	document.getElementById("r_w").textContent = win;
	document.getElementById("r_l").textContent = lose;
	document.getElementById("r_t").textContent = tie;
}
btn.forEach(button => {
	button.addEventListener('click', () => {
		random = Math.ceil(Math.random()*3);
		if(button.id==='r'){helper(random, 'Rock');}
		else if(button.id==='p'){helper(random, 'Paper');}
		else if(button.id==='s'){helper(random, 'Scissors');}
		else{window.location.reload();}
	});
});