/*O escopo é importante pois ele vai permitir que a gente crie 
o codigo javascript de maneira bem funcional e que nao ocorra erro de continuidade.*/

let nome = 'John'

function bemVindo(){
    return console.log(`Olá, ${nome}! seja bem vindo.`)
}

// nesse caso vai conseguir acessar a variavel nome porque ela esta no escopo global, mas podemos fazer com que seja no escopo local.

function escopoLocal(){
    let nome = 'Jhonathan'
    return console.log(`Olá, ${nome}! seja bem vindo`)
}

console.log(nome)

console.log(escopoLocal())


/*Closures é importante pois algumas funções vai necessitar que tenha outras funções por dentro delas.*/ 

function apresentandoAlguem(){
    let nome = "Jhonathan Henrique"
    function saudacao(){
        console.log(`Ola, ${nome}!`)
    }
    function despedida(){
        console.log(`tchau,${nome}`)
    }
    return{
        saudacao: saudacao,
        despedida: despedida
    }
}

const pessoa = apresentandoAlguem()

pessoa.saudacao()
pessoa.despedida()