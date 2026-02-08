var current = new Date();
const form = document.getElementById('dob');
const rt = document.getElementById("realTime");
const heading = document.getElementById("heading");
form[0].setAttribute("max", new Date().toISOString().split("T")[0]);
form.addEventListener('submit', function (e){
	e.preventDefault();
	form[0].disabled = true;
	form[1].disabled = true;
	form[2].disabled = true;
	form[3].disabled = false;
	const DOB = e.target[0].value;
	const TOB = e.target[1].value ? e.target[1].value : "00:00";
	const DTobj = new Date(DOB + 'T' + TOB);
	const user = {
		Year: DTobj.getFullYear(),
		Month: DTobj.getMonth() + 1,
		Date: DTobj.getDate(),
		Hour: DTobj.getHours(),
		Minute: DTobj.getMinutes(),
		Second: DTobj.getSeconds(),
		Time: DTobj.getTime(),
	};
	rt.setAttribute("style", "display: initial;");
	heading.innerText = `You are ${current.getFullYear() - user.Year}* Years old`;
	setInterval(() => {
		current = new Date();
		rt.lastChild.value = current.getTime() - user.Time;
	}, 10);
});
form.addEventListener('reset', function (e){
	window.location.reload();
});