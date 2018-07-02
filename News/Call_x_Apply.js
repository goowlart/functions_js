// As funções call e apply nos deixam invocar métodos como se estivéssemos no contexto de um outro objeto:

var myself = { firstName: 'Matheus', lastName: 'Lima' };

function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

showFullName.call(myself);
// Matheus Lima

showFullName.apply(myself);
// Matheus Lima


// Enquanto apply aceita um array, call requer parâmetros divididos por vírgulas:


var myself2 = { age: 26 };

function isOlderThan() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(this.age < arguments[i]);
    }
}

isOlderThan.call(myself2, 30, 40, 15);
// true true false

isOlderThan.apply(myself2, [30, 40, 15]);
// true true false

//Qual a importância?
// A importância desses dois métodos e o porquê deles serem tão usados (principalmente em libs) é bem simples: apply e call nos permitem pegar métodos emprestados reduzindo assim a quantidade total de código gerada e seguindo o DRY.