function reset(){
	window.location.reload();
}
var x1 = document.getElementById("x1");
var x2 = document.getElementById("x2");
var x3 = document.getElementById("x3");
var y1 = document.getElementById("y1");
var y2 = document.getElementById("y2");
var y3 = document.getElementById("y3");
var z1 = document.getElementById("z1");
var z2 = document.getElementById("z2");
var z3 = document.getElementById("z3");
function main(){
	x1.onclick = function(){
		x1.textContent = "O";
	};
	x2.onclick = function(){
		x2.textContent = "O";
	};
	x3.onclick = function(){
		x3.textContent = "O";
	};
	y1.onclick = function(){
		y1.textContent = "O";
	};
	y2.onclick = function(){
		y2.textContent = "O";
	};
	y3.onclick = function(){
		y3.textContent = "O";
	};
	z1.onclick = function(){
		z1.textContent = "O";
	};
	z2.onclick = function(){
		z2.textContent = "O";
	};
	z3.onclick = function(){
		z3.textContent = "O";
	};
}
main();