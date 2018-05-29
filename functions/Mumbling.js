function accum(str) {
	var res = [];
	for(var i = 0; i < str.length; i++) {
		var row = '';
		for(var j = 0; j < i + 1; j++) {
			row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
		}
		res.push(row);
	}
	return res.join('-');
} 

appreciation0 =  accum("abcd");
appreciation1 =  accum("RqaEzty");
appreciation2 =  accum("cwAt");

console.log(appreciation0 + "\n" ,appreciation1 + "\n" ,appreciation2);