/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado.
*/
let ano = 1999; 
let valor = (ano % 4 == 0) ? "bissexto" : " não bissexto"
console.log(valor);