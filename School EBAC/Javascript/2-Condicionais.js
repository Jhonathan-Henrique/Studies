//Aqui o valor boleano vai decidir sobre verdadeiro ou falso, criando uma condição.

let idade1 = prompt ('Bem vindo ao sistema eleitoral! digite sua idade')

if(idade >= 16){
	alert('Certo! vamos prosseguir com o cadastramento')
} else {
	alert('Voce não tem idade suficiente para se cadastrar')
}

//==========================================================

//simplifica o codigo com ternaria:

let idade2 = prompt ('Bem vindo ao sistema eleitoral! digite sua idade')

const resultado = idade >= 16 ? 'certo! vamos prosseguir com o cadastramento' : 'Para prosseguir, o eleitor deve ter o minimo 16 anos.'

alert(resultado)

