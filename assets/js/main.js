function clock() {
	let hour = document.getElementById('hour');
	let minute = document.getElementById('minute');
	let second = document.getElementById('second');
	let ampm = document.getElementById('ampm');

	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	var am = 'AM';

	// Convert 24 hour time into 12 hour

	if ( h > 12) {
		h = h-12;
		var am = 'PM';
	}

	// Add 0 to the beginnig of number if less than 10

	h = ( h < 10 ) ? '0' + h : h;
	m = ( m < 10 ) ? '0' + m : m;
	s = ( s < 10 ) ? '0' + s : s;

	hour.innerHTML = h;
	minute.innerHTML = m;
	second.innerHTML = s;
	ampm.innerHTML = am;
}

var interval = setInterval(clock, 1000);