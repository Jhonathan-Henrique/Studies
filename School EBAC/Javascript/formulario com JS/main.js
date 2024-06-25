const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nomeBeneficiario')
    if (!validaNome(nomeBeneficiario.value)) {
        alert('O nome não esta completo')
    } else {
        alert('Tudo certo')
    }
})

console.log(form)