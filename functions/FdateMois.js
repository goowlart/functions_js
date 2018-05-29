
function dateMois(date) {
	var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
	var numero = date[3] + date[4]
	
	for (var i = 0; i < numero; i++) {
		return mois[numero - 1]

	}
	

}


var resultat = dateMois("09/11/2017" )
console.log(resultat);
