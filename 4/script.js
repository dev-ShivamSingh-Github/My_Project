var current = new Date();
var ms = 0; //milliseconds

const form = document.getElementById('dob');
const heading = document.getElementById("heading");
const stdYear = document.getElementById("years");
const stdMonth = document.getElementById("months");
const stdWeek = document.getElementById("weeks");
const stdDay = document.getElementById("days");
const stdHour = document.getElementById("hours");
const stdMinute = document.getElementById("minutes");
const stdSecond = document.getElementById("seconds");

form[0].setAttribute("max", current.toISOString().split("T")[0]);

form.addEventListener('submit', function (e){
	e.preventDefault();

	form[0].disabled = true;
	form[1].disabled = true;
	form[2].disabled = true;
	form[3].disabled = false;

	const DOB = e.target[0].value;
	const TOB = e.target[1].value ? e.target[1].value : "00:00";
	const DTobj = new Date(DOB + 'T' + TOB);
	ms = current.getTime() - DTobj.getTime();

	heading.innerText = `You are ${current.getFullYear() - DTobj.getFullYear()}* Years old`;

	document.getElementById("realTime").setAttribute("style", "display: initial;");

	const target = {
		Year: current.getFullYear() + 1,
		Month: current.getMonth() + 2,
		Date: current.getDate() + 1,
		Hour: current.getHours() + 1,
		Minute: current.getMinutes() + 1,
		Second: current.getSeconds() + 1,
		Time: current.getTime(),
		refresh: () => {
			this.Year = current.getFullYear() + 1;
			this.Month = current.getMonth() + 2;
			this.Date = current.getDate() + 1;
			this.Hour = current.getHours() + 1;
			this.Minute = current.getMinutes() + 1;
			this.Second = current.getSeconds() + 1;
	}};

	stdYear.value = Math.floor(ms * 0.000000000031689);
	stdMonth.value = Math.floor(ms * 0.00000000038026);
	stdWeek.value = Math.floor(ms * 0.0000000016534);
	stdDay.value = Math.floor(ms * 0.000000011574);
	stdHour.value = Math.floor(ms * 0.00000027778);
	stdMinute.value = Math.floor(ms * 0.000016667);
	stdSecond.value = Math.floor(ms * 0.001);
	setInterval(() => {
		current = new Date();
		ms = current.getTime() - DTobj.getTime();

		stdSecond.value = Math.floor(ms * 0.001);
		if(current.getMinutes() >= target.Minute){
			stdMinute.value = Math.floor(ms * 0.000016667);
			target.refresh();
		}if(current.getHours() >= target.Hour){
			stdHour.value = Math.floor(ms * 0.00000027778);
			target.refresh();
		}if(current.getDate() >= target.Date){
			stdDay.value = Math.floor(ms * 0.000000011574);
			target.refresh();
		}if(current.getMonth() + 1 >= target.Month){
			stdMonth.value = Math.floor(ms * 0.00000000038026);
			if(Number(stdMonth.value) > 7){
				stdWeek.value = stdMonth.value % 7;
				stdMonth.value /= 7;
			}
			target.refresh();
		}if(current.getYear() >= target.Year){
			stdYear.value = Math.floor(ms * 0.000000000031689);
			target.refresh();
		}
	}, 1000);

});

form.addEventListener('reset', function (e){
	window.location.reload();
});