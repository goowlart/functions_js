// Map, Filter e Reduce

/* Você provavelmente já passou por alguma situação em que era necessário por exemplo iterar sobre um array,
 ou então verificar se existe alguma propriedade nele ou mesmo simplesmente gerar um novo array com base no primeiro.

 Os métodos map, filter e reduce nos ajudam nessas situações além de começarmos a pensar mais em termos de programação funcional. */


// Map:


/* Dado um array qualquer, como podemos fazer para transformá-lo, ou mapeá-lo, em um outro array? 
Existe a forma difícil (sem map): */


var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
];

var shortNameMonths = [];
for (var i = 0; i < months.length; i++) {
    shortNameMonths.push(months[i].shortName);
}

console.log(shortNameMonths); // ['JAN', 'FEB', ...]


// E existe a forma fácil (com map):

var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
];

var shortNameMonths = months.map(function(month) {
    return month.shortName;
});

console.log(shortNameMonths); // ['JAN', 'FEB', ...]


// Filter:


/* Dado o mesmo array, como podemos gerar um novo filtrando apenas os 6 primeiros meses do ano?

Com o filter é bem fácil fazer isso: */


var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
];

var firstSemester = months.filter(function(month) {
    return month.number <= 6;
});

console.log(firstSemester); // ['JAN', 'FEB', .. , 'JUN']


// Reduce:


/* Dado o array de meses que temos trabalhado até então, como podemos fazer para gerar uma acumulação de valores,
 ou reduzi-lo, em algum valor específico?

Com o reduce seria mais ou menos assim: */


var months = [
    {shortName: 'JAN', fullName: 'January',  number: 1},
    {shortName: 'FEB', fullName: 'February', number: 2},
];

var monthsAcc = months.reduce(function(acc, month) {
    return acc + '/' + month.shortName;
}, '');

console.log(monthsAcc); // /JAN/FEB/MAR/APR...


/* Pra quem conhece o Redux (um state container muito comum em aplicações que usam o React),
 uma curiosidade é que a ideia dele está basicamente resumida na ideia de uma função reduce: a Reducer Function.
Qual a importância?

Os métodos map, filter e reduce são a base da programação funcional não só em JavaScript,
mas em diversas outras linguagens. E sem saber programação funcional não há como tirar 100% de proveito de JavaScript e do seu ecossistema. */



