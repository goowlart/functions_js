var table = [30.6,50,10,70,30,90,10];

function tableau (table) {
	var soma = 0;
	var n = table.length 
for(var i = 0; i < table.length; i++) {
	soma = soma + table[i];

}
return soma / n
}

var resultat = tableau(table);  
console.log(resultat);