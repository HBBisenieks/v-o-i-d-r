var output = '';
var intervalID = 0;

function scream()
{
	const textarea = document.getElementById('scream');
	if (textarea.value != "") {
		output = textarea.value;
		textarea.value = '';
		textarea.placeholder = '';
		document.getElementById("thevoid").innerHTML = output;
		output = '';
		intervalID = 0;
		document.getElementById("screamButton").disabled = true;
		fadeout();
	}
}

function fadeout()
{
	intervalID = setInterval(hide, 200);
}

function hide()
{
	var opacity = 0;
	var voidDiv = document.getElementById("thevoid");
	opacity = Number(window.getComputedStyle(voidDiv).getPropertyValue("opacity"));

	if (opacity > 0) {
		opacity = opacity - 0.02;
		voidDiv.style.opacity = opacity;
	} else {
		clearInterval(intervalID);
		document.getElementById("thevoid").innerHTML = "";
		voidDiv.style.opacity = 1;
		document.getElementById("screamButton").disabled = false;
	}
}

function uwu()
{
	const checkbox = document.getElementById('uwuOwo');
	if (checkbox.checked) {
		document.getElementById('screamButton').innerHTML = "screm";
	} else {
		document.getElementById('screamButton').innerHTML = "Scream";
	}
}

function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}