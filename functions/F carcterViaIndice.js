var nome = "Alex";
var taille = nome.length;
var nome1 = nome[1]
var valor = 3;

function carcterViaIndice(nome, valor) {
	return nome[valor]
}


var resultat = carcterViaIndice("Alex", 3)
console.log(resultat);