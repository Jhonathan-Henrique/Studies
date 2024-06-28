const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault()


    const nomeBeneficiario = document.getElementById('nomeBeneficiario')
    const numeroConta = document.getElementById('contaBeneficiario')
    const ValorDepositado = document.getElementById('valorDeposito')
    const mensagemSucesso = `Montante de: <b>${ValorDepositado.value}</b> Depositado com sucesso para Beneficiario: <b>${nomeBeneficiario.value}</b>, Conta: <b>${numeroConta.value}</b>`


    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagem = document.querySelector('.mensagemSucesso')
        containerMensagem.innerHTML = mensagemSucesso
        containerMensagem.style.display = 'block'

        nomeBeneficiario.value = ''
        numeroConta.value = ''
        ValorDepositado.value = ''
    } else {
        alert('O nome não está completo')
    }
})