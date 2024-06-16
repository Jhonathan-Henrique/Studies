//Podemos selecionar elementos com Javascript da seguinte forma:

document.getElementsByTagName() // Aqui selecionamos o elemento HTML pela tag.
document.getElementById()// Aqui selecionamentos o elemento HTML pelo Id.
document.getElementsByClassName()//Aqui selecionamentos o elemento HTML pela classe.
document.getElementsByName()//Aqui selecionamentos o elemento pelo nome.
document.querySelector()//Aqui podemos fazer uma busca mais inteligente por exemplo buscar os elementos Button da pagina etc. se usarmos ele pra selecionar um input ele busca o primeiro
document.querySelector('input[type=number]')//Aqui ele vai buscar qual inpui é do tpo number.
document.querySelectorAll('input[type=number]')//Aqui ele vai selecionar todos elementos com essa consulta.
document.querySelectorAll('input#numero-conta')//aqui estamos buscando esse elemento com o id
document.body//aqui conseguimos acessar todo conteudo do body
document.head//aqui podemos acessar todas metatags da head