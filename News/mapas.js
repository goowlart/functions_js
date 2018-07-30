let movies = new Map();
movies.set(1, 'The Godfather');
movies.set(2, 'The Shawshank Redemption');
movies.set(3, 'Schindler’s List');
movies.set(4, 'Raging Bull');
movies.set(5, 'Casablanca');
movies.set(6, 'Citizen Kane');
movies.set(7, 'Gone with the Wind');
movies.set(8, 'The Wizard of Oz');
movies.set(9, 'One Flew Over the Cuckoo’s Nest');
movies.set(10, 'Lawrence of Arabia');
 
console.log(movies.get(5));     //GET me envia o resultado do valor na lista 
console.log(movies.has(19));   //HAS me diz se o valor existe
console.log(movies.size);     //SIZE me envia a quantidade de intens na lista 
//movies.delete(4);            Deleta um item da lista      
//movies.clear();              Deleta todos os itens da lista 

movies.set(11, 'American Beautiful');   //A qualquer momento eu posso fazer im inserçao  dessa forma 

for (let movie of movies){     //interaçao com a lista 
	console.log(movie)
}


