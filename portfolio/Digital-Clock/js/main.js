var div = document.getElementById('currenttime')

function time(){
var today = new Date()
// today.setHours(0)
// today.setMinutes(59)
var month = today.getMonth()+1
var date = today.getDate()
var year = today.getFullYear()
var hours = today.getHours()
var minutes = today.getMinutes()
var seconds = today.getSeconds()
var ampm = "am"

if (seconds<10) {
	seconds = "0" + seconds
}

if (minutes<10) {
	minutes = '0' + minutes
}

if (hours<1) {
	hours = 12
} else if (hours == 12) {
	ampm = "pm"
} else if (hours>12) {
	ampm = "pm"
	hours = hours-12
}

var timenow = hours + ":" + minutes + ':' + seconds + "  " + ampm
div.innerHTML = timenow
}


setInterval(time, 1000)