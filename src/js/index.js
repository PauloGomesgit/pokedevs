/*
quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokedev

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokedevs

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão mostrar
-remover a classe ativo que marca o pokedev selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev')

listaSelecaoPokedevs.forEach(pokedev => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokedevs

    pokedev.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokedevAberto = document.querySelector('.aberto')        
        cartaoPokedevAberto.classList.remove('aberto')

        //ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão mostrar
        const idPokedevSelecionado = pokedev.attributes.id.value

        const idDoCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir)
        cartaoPokedevParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokedev selecionado
        const pokedevAtivoNaListagem = document.querySelector('.ativo')
        pokedevAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado)
        pokedevSelecionadoNaListagem.classList.add('ativo')
    })
})