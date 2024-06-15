/*Principal objetivo: trazer comportamento na pagina.

Primeira coisa que devemos saber é porque criar uma função?
Bom a função vai ser um codigo que vamos criar para ser reutilizavel.

por exemplo função para descobrir a idade de uma pessoa:*/

function descobrirIdade (anoNascimento) {
	return 2024 - anoNascimento
}

descobrirIdade(1995)
<29

//===========================================================================

function somarNumeros(numeroA, numeroB, numeroC){
	return numeroA + numeroB + numeroC
}

somarNumeros(10,20,30)
<60

//=============================================================================

function somarNumeros(numeroA, numeroB, numeroC){
	let resultado = numeroA,numeroB,numeroC
	return console.log('O resultado da soma dos numeros foi: ' + resultado)
}

somarNumeros(20,30,70)

//O resultado da soma dos numeros foi: 120
