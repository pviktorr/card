'use strict'

const cidades = [
    {nome: 'Itapevi', cor : 'red', icon : 'download.png'},
    {nome: 'Jandira', cor : 'orange', icon : 'download.png'},
    {nome: 'Barueri', cor : 'blue', icon : 'download.png', },
    {nome: 'Osasco', cor : 'white', icon : 'download.png'},
]
const imagens = [
    {nome : 'Memphis', imagem: ''}
    {nome : 'Yuri', imagem: ''},
    {nome : 'Garro', imagem: ''},
    {nome : 'Bidu', imagem: ''},
    {nome : 'Talles', imagem: ''}
    
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

function criarCard(card){
    const
}

cidades.forEach(criarMenu)