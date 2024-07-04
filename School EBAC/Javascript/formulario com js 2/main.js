const nomeBeneficiario = document.getElementById('nome-Beneficiario')
const form = document.getElementById('form-deposito')
const numeroConta = document.getElementById('numero-conta')
const valorDeposito = document.getElementById('valor-deposito')

function validaNome (nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let mensagemSucesso = `O deposito de: <b>${valorDeposito.value}</b> foi depositado com sucesso para o beneficiario <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`
    let mensagemError = `O nome não esta completo`

    if (!validaNome(nomeBeneficiario.value)) {
        nomeBeneficiario.style.border = '1px solid red'

        let error = document.querySelector('.mensagem-error')
        error.innerHTML = mensagemError
        error.style.display = 'block'

    }   else {
    
        let sucess = document.querySelector('.mensagem-sucesso')
        sucess.innerHTML = mensagemSucesso
        sucess.style.display = 'block'
        
        nomeBeneficiario.value = ' '
        numeroConta.value = ' '
        valorDeposito.value = ' ' 
    }
})

