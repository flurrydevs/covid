
var today = new Date();
var dayOfMonth = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

window.onload = function() {
    var covidTime = document.getElementById('covidData');
	covidTime.innerHTML = '<h1> Koronawirus <br>' + dayOfMonth + '-0' + month + '-' + year + '</h1>';
};
