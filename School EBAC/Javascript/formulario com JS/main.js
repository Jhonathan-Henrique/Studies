const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault()


    const nomeBeneficiario = document.getElementById('nomeBeneficiario')
    const numeroConta = document.getElementById('contaBeneficiario')
    const ValorDepositado = document.getElementById('valorDeposito')
    const mensagemSucesso = `Montante de: ${ValorDepositado.value} Depositado com sucesso para Beneficiario: ${nomeBeneficiario.value}, Conta: ${numeroConta.value}`

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert (mensagemSucesso)

        nomeBeneficiario.value = ''
        numeroConta.value = '' 
        ValorDepositado.value = ''
    } else {
        alert ('O nome não está completo')
    }
})