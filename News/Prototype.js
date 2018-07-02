// Prototype

/* A herança em JavaScript é feita através dos prototypes. 
Ela funciona de uma maneira um pouco diferente da herança clássica, 
o que pode gerar um pouco de confusão mesmo para os mais desenvolvedores mais experientes em JavaScript.

Podemos pensar em objetos em JavaScript como agregadores de propriedades dinâmicas. 
E quando um objeto tenta acessar qualquer propriedade sua e não a encontrar, ela procurará no seu prototype. 
E se não estiver lá, no prototype de seu prototype até que a propriedade seja encontrada ou então essa corrente, 
chamada de Prototype Chain, se acabe: */

var Animal = {
    walk: function() {
        console.log("I'm walking...");
    }
};

var Dog = Object.create(Animal);

Animal.walk(); // I'm walking...
Dog.walk(); // I'm walking... 

var Airplane = {
    fly: function() {
        console.log("I'm flying...");
    }
};

Airplane.walk(); // Uncaught TypeError: Airplane.walk is not a function(…)

/* Animal consegue invocar o método walk porque o mesmo pertence a ele. 
Dog também consegue invocar porque apesar do mesmo não pertencer a ele pertence a seu prototype. 
No caso de Airplane porém, nem ele e nenhum prototype seu encontrou o método walk até o fim da Prototype Chain.

Qual a importância?

Um dos conceitos mais usados em qualquer linguagem de programação é a Herança e com JavaScript ela é feita através do Prototype. 
Entender bem não apenas o Prototype como também o Prototype Chain é fundamental para dominar o JavaScript. */
