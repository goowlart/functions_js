function repeatStr (n, s) { // n = number s = string
var str="";
for(var i=0; i < n; i++) // = 0 enquanto o N for superior a 0 a gente repete
	str+=s; // += adiciona o mesmo valor ja existente 
	return str; // quarda o resultado na variavel 
}

resultat = repeatStr(6, "I") // coloca pra apreciaçao da function
resultat2 = repeatStr(5, "Hello") // coloca pra apreciaçao da function

console.log(resultat , resultat2 );