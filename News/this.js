// THIS

/* A palavra-chave this no JavaScript funciona de uma maneira um pouco diferente das outras linguagens. Em linguagens OO comuns o this se refere a instância da classe corrente. Porém, no JavaScript o valor de this é determinado pelo contexto de invocação da função e onde elas foram chamadas.
Escopo Global

No escopo global (em um browser) o this se refere ao objeto window, tanto dentro quanto fora de uma função: */

document.write(this);  //[object Window]

function func() {
    return this;
}
document.write(func());  //[object Window]


// Método de objeto
// Quando usado dentro de um método de um objeto, o this se refere ao próprio objeto:


var object = {
    func: function() {
        return this;
    }
};
document.write(object.func());  //[object Object]


// E no caso de objetos aninhados, o this vai se referir ao objeto pai mais próximo:

var father = {
    name: "father",
    child: {
        name: "child",
        func: function() {
            return this.name;
        }
    }            
}

document.write(father.child.func()); 
//child

// É bem comum esquecermos a regra acima, principalmente no uso de loops:


'use strict';

var object = {
    name: 'Matheus',
    friends: ['João', 'Ana' ],
    loop: function() {
        this.friends.forEach(function(friend) {
            console.log(this.name + ' knows ' + friend);
        });
    }
};

object.loop();
// TypeError: Cannot read property 'name' of undefined




// Uma forma fácil de corrigir esse problema é simplesmente guardar o valor do this em uma variável e ao invés de chamar o this, chamar essa variável:

var self = this;
loop: function() {
    this.friends.forEach(function(friend) {
        console.log(self.name + ' knows ' + friend);
    });
}


//Função sem contexto

//Quando usamos o this numa função invocada sem contexto então o bind é feito no contexto global, mesmo se a função for definida dentro de um objeto:

var context = "global";

var object = {  
    context: "object",
    method: function () {                  
        function func() {
            var context = "function";
            return this.context; 
        };
        return func(); // INVOCADO SEM CONTEXTO
    }
};

document.write(object.method()); //global



