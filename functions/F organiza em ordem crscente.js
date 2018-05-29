var arr = [5, 3, 1, 4, 2];

console.log('Array original:', arr);

arr.sort(function(a, b) {
	return a - b;
});

console.log('Array ordenado:', arr);