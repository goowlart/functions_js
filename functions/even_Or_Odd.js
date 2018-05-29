function evenOrOdd(number) {
	if (Math.abs(number) % 2 === 0) {
		return "Even";
	} else if (Math.abs(number) % 2 === 1) {
		return "Odd";
	}
}
console.log(evenOrOdd(2));
