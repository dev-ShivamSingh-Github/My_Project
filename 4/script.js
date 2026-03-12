const {DateTime} = luxon;
var current = DateTime.now();

const form = document.getElementById('dob');
const heading = document.getElementById("heading");
const stdYear = document.getElementById("years");
const stdMonth = document.getElementById("months");
const stdWeek = document.getElementById("weeks");
const stdDay = document.getElementById("days");
const stdHour = document.getElementById("hours");
const stdMinute = document.getElementById("minutes");
const stdSecond = document.getElementById("seconds");

form[0].setAttribute("max", current.toISO().split("T")[0]);

form.addEventListener('submit', function (e){
	e.preventDefault();

	form[0].disabled = true;
	form[1].disabled = true;
	form[2].disabled = true;
	form[3].disabled = false;

	const DOB = e.target[0].value;
	const TOB = e.target[1].value ? e.target[1].value : "00:00:00";
	const DTobj = DateTime.fromJSDate(new Date(DOB + 'T' + TOB));

	const diff = () => {
		return current.diff(DTobj, ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']).toObject();
	};

	document.getElementById("realTime").setAttribute("style", "display: initial;");
	heading.innerText = `You are ${current.year - DTobj.year}* Years old`;

	setInterval(() => {
		current = DateTime.now();
		stdSecond.value = Math.floor(diff().seconds);
		stdMinute.value = diff().minutes;
		stdHour.value = diff().hours;
		stdDay.value = diff().days;
		stdWeek.value = diff().weeks;
		stdMonth.value = diff().months;
		stdYear.value = diff().years;
	}, 500);

});

form.addEventListener('reset', function (e){
	window.location.reload();
});