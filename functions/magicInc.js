var test = magicInc(0.5,'inc');

function magicInc(number,str) {
	var n = number;
	var f = n.toString().length * 100 / 100; //size of my variable n 

	function positive() {
		let str = 1;
		for (let i = 1; i < f; i++) {
			str = str + '0';
		}
		return str
	}

	function negative() {
		let str = 1;
		for (let i = 1; i < f; i++) {
			str = str + '0';
		}
		return str
	}

	switch (str) {
		case 'inc':
			if (n < -0.1 ) {
				n += 0.1;
				n = n.toFixed(1);
			} else if (n >= 0.1 && n < 1.0) {
				n += 0.1;
				n = n.toFixed(1);
			} else if (n > 0 && n <= 9) {
				n += 1;
			} else if (n >= 10) {
				let str = positive(n)
				n = (parseInt(n / str, 10) + 1) * str;
			}
			console.log(n);
			break;
		case 'dec':
			if (n > 0.1 && n < 1) {
				n -= 0.1;

			} else if (n >= 1 && n <= 9) {
				n -= 1;

			} else if (n <= -1 && n > -10) {
				n -= 1;

			} else if (n < -0.1 && n >= -10) {
				n -= 0.1;
				n = n.toFixed(1);

			} else if (n <= -10) {
				n -= 10;
			} else if (n >= 10) {
				let str = negative(n);
				n = (parseInt(n / str, 10) + 1) * str;
			}
			console.log(n);
			break;
		default:
			console.log(n);
	}
}
