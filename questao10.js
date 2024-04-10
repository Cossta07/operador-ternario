/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode entrar em um clube. A variável idade contém 
a idade da pessoa e a variável temConvite indica se ela possui um convite. 
Atribua o resultado à variável status. 
*/

let idade = 16;
let temConvite = true;
let status = (idade >= 18 && temConvite) ? "Pode entrar no clube." : "Não pode entrar no clube.";
console.log(status);