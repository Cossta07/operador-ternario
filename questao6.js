/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é múltiplo de 5. A variável numero contém o valor a 
ser verificado. Atribua o resultado à variável resultado.
*/
let numero = 19;
let multiplos = numero % 5 === 0 ? "é múltiplo de 5" : "não é múltiplo de 5";
console.log("O número " + numero + " " + multiplos + ".");