'use strict'

const cidades = [
    {nome: 'Itapevi', cor : 'red', icon : 'download.png'},
    {nome: 'Jandira', cor : 'orange', icon : 'download.png'},
    {nome: 'Barueri', cor : 'blue', icon : 'download.png', },
    {nome: 'Osasco', cor : 'white', icon : 'download.png'},
]



function criarMenu(cidades) {

const novoItem = document.createElement('li')
const novoLink = document.createElement('a')

const menu = document.getElementById('menu')
const novaImagem = document.createElement('img')

novaImagem.src = `./img/${cidades.icon}`

novoLink.href = '#'
novoLink.textContent = cidades.nome


novoItem.appendChild(novaImagem)
novoItem.appendChild(novoLink)
novoItem.style = `--cor-hover: ${cidades.cor}`

menu.appendChild(novoItem)

}

const produtos = [
    { 
        nome: 'Corinthians', 
        img: 'corinthians-.png', 
        preco: 'R$499,99', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Sport Clube Corinthians Paulista"'
    },
    { 
        nome: 'Palmeiras', 
        img: 'porcada.png', 
        preco: 'R$00,00', 
        cor: 'blueviolet', 
        estrelas: 0,
        descricao: 'Sem Mundial'
    },
    { 
        nome: 'Santos', 
        img: 'santos.png', 
        preco: 'R$60,00', 
        cor: 'blueviolet', 
        estrelas: 4,
        descricao: 'Time da Baixada Santista'
    },
    { 
        nome: 'São Paulo', 
        img: 'sp-time ruim.png', 
        preco: 'R$24,00', 
        cor: 'blueviolet', 
        estrelas: 5,
        descricao: 'Iphone 16 Pro Max'
    }
]
function criarCard(produto) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('Card')

    card.innerHTML = `
        <img src="./img/${produto.img}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p class="price">${produto.preco}</p>
        <div class="stars">${'★'.repeat(produto.estrelas)}${'☆'.repeat(5 - produto.estrelas)}</div>
        <button class="${produto.cor}">Comprar Agora</button>
    `

    container.appendChild(card)
}


cidades.forEach(criarMenu)