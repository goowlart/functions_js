function retornarOcorrencias(str){
	var ocorrencias = {};
	for(var i = 0; i < str.length; i++){
		var n = str[i];
		ocorrencias[n] = ocorrencias[n] ? ocorrencias[n] + 1: 1;
	}
	return ocorrencias;
}

var str = 'Goiaba';
var num = '001549954607410';

var strItens = retornarOcorrencias(str); 
var numItens = retornarOcorrencias(num); 

console.log(strItens); // {G=1, o=1, i=1, a=2, b=1}
console.log(numItens); // {0=4, 1=2, 4=3, 5=2, 6=1, 7=1, 9=2}
console.log(strItens['a']); // 2