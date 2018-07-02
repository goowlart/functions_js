// Método bind.
/* O bind é muito semelhante ao call e apply: serve para passarmos um contexto para uma função,
 que não é dela, e podermos executá-la. A diferença é que call e apply invocam a função imediatamente: */

var person = {  
  name: "Matheus",
  hello: function(thing) {
    console.log(this.name + " disse Olá " + thing);
  }
}

person.hello.call(person, "Mundo"); // Matheus disse Olá Mundo

// Enquanto bind retorna uma nova função que quando for executada terá o contexto que passamos.

var person = {  
  name: "Matheus",
  hello: function(thing) {
    console.log(this.name + " disse Olá " + thing);
  }
}

var hello = person.hello.bind(person);
hello("Mundo"); // Matheus disse Olá Mundo

// É comum usarmos o bind para o disparo de eventos:

/* code */

element.addEventListener('click', this.onClick.bind(this));

// E também no mundo React:

render: function() {
    return (
      <div>
        {this.props.items.map(function(item, i) {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
          );
        }, this)}
      </div>
    );
}

// Qual a importância?
// Basicamente a mesma de apply e call.