
function Compare(choice1, choice2) {
if (choice1 === "paper") {
	if (choice2 === "rock") {
		return "paper wins";
	} else {
		if (choice2 === "scissors") {
			return "scissors wins";
		}
	}
	if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "rock wins";
		} else {
			if (choice2 === "paper") {
				return "scissors wins";
			}
		}
	}
}
}
resultat = Compare("paper", "rock"); //compare <-- minha function ("","")<-- as duas Chaines que eu quero comparar. resultat <-- variavel que estoca meu resultado 
console.log(resultat);


