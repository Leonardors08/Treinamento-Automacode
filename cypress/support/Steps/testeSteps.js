/*global Given, Then, When, And*/

import testePage from '../pageobjects/testePage'
const Pagina = new testePage

Given("que acesso o site netshoes", () => {
    Pagina.abrirUrl();
})
When("pesquisar produto", ( )=> {
    Pagina.preencherCampoPesquisa();    
})

And("adicionar ao carrinho", () => {
    Pagina.addcarrinho();
})

Then("produto escolhido deverá estar no carrinho", () => {
    Pagina.VisualizarProduto();

})
