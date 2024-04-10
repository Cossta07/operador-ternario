/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel.
*/ 
let idade = 65;
let sexo = 'masculino';
let elegivel = (sexo === 'feminino' && idade >= 62) || (sexo === 'masculino' && idade >= 65) ? 'pode aposentaa' : 'nao pode aposentar';
console.log(elegivel);