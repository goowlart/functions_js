// Hoisting

/* A tradução de hoist é içar, levantar ou suspender. 
E é isso que acontece em JavaScript quando declaramos uma variável: ela é levantada até o topo do escopo.

Qual o retorno da função abaixo?*/

var n = 1;
function init(){
    console.log(n);
    var n = 2;
}
init();

/* As respostas mais comuns são 1 ou 2, mas a resposta correta é undefined. 
A declaração de variáveis em JavaScript é hoisted (ou elevada), mas não sua inicialização. 

Portanto o código acima é equivalente a esse:*/

var n;
function init() {
    var n;
    console.log(n);
    n = 2;
}
n = 1;
init();

/* Para evitar problemas inesperados, tente sempre declarar todas a variáveis no topo do escopo, 
mesmo que você não as tenha inicializado ainda. 

Ou então atualize para o ES6 e passe a usar as keywords let e const. Elas funcionam da maneira esperada:*/

// com var, o valor do segundo console.log não é esperado
function var() {
  var n = 1;
  if (true) {
    var n = 2;
    console.log(n); // 2
  }
  console.log(n); // 2 
}

// com let, o valor do segundo console.log é esperado
function let() {
  let n = 1;
  if (true) {
    let n = 2;
    console.log(n); // 2
  }
  console.log(n);  // 1
}

/* Qual a importância?

Evitar futuros bugs ao entender uma das partes mais problemáticas da linguagem. */