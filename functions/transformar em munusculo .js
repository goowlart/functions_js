var str = "ALEX ";

function lowercase (str) {
	var backup="";
	var c =''; 

	for(var i = 0; i < str.length; i++) {
	    c = str.charAt(i)
		 backup = backup + c.toLowerCase()
		}
		return backup;
			}

var strItens = lowercase(str); 

console.log (strItens);


