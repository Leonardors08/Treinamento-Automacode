/// <reference types = "Cypress"/>

import testeElementos from '../ElementosPage/testeElementos.js'
const Elementos = new testeElementos

const URL = Cypress.config("baseUrl")
class TestePage {
    abrirUrl(){
        cy.visit(URL)  
    
        cy.fixture('dados').then((dados) => {
        this.dados = dados
        
        cy.get(Elementos.campoPesquisar()).type(this.dados.produto, 'Cypress.io{enter}')
        cy.get(Elementos.iconeLupa()).click()
        cy.get(Elementos.addcarrinho()).click()(this.dados.produto, '')
        cy.get(Elementos.addProduto()).click()

    })

}
}
export default TestePage;
