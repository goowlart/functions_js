function anacyclique(c) {
	var resultat = "";
	for (var i = c.length - 1; i >= 0; i--) {
		resultat = resultat + c[i];
	}
	return resultat;
}

var resultat1 = anacyclique("Alex")
console.log(resultat1);

