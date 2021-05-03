/// <reference types = "Cypress"/>

import testeElementos from '../ElementosPage/testeElementos.js'
const Elementos = new testeElementos

const URL = Cypress.config("baseUrl")
class TestePage {
    abrirUrl(){
        cy.visit(URL)  }
    preencherCampoPrimeiroNome(){
        cy.get(Elementos.campoPrimeiroNome()).type('Leonardo')
    }

    preencherCampoSegundoNome(){
        cy.get(Elementos.campoSegundoNome()).type('Ribeiro')
    }

    preencherCampoEndereco(){
        cy.get(Elementos.campoEndereco()).type('Rua 50, Casa 210, Vila Nova - São Sebastião')
    }

    preencherCampoEmail(){
        cy.get(Elementos.campoEmail()).type('leonardoses8@gmail.com')
    }

    preencherCampoTelefone(){
        cy.get(Elementos.campoTelefone()).type('61 993293959')
    }

    preencherCampoSexo(){
        cy.get(Elementos.campoSexo()).check('Male')
    }

    preencherCampoHobbies(){
        cy.get(Elementos.campoHobbies()).check(['Movies'])
    }


    selecionarLinguas(){
        cy.get(Elementos.campoLinguagem()).click({force: true})
        cy.get('.ui-corner-all').contains('Portuguese').click()
        cy.get('.ui-corner-all').contains('English').click()
    
    }
    
    // escolherLocalizacao(){
    //     cy.get(Elementos.campoPais()).click({force: true})
    //     cy.get('.select2-search__field').type('aus').click()
    //     cy.get('.select2-search__field').type('{enter}')
    // } 

    selecionarLabelSkill(){
       
        cy.get(Elementos.LabelSkill()).contains('Skills').click()   
    }

    selecionoSkill(){
       
        cy.get(Elementos.campoSkill()).select("PHP")       
    }

    
    escolherLocalizacao(){
        cy.get(Elementos.campoPais()).select('Brazil')
        
    }

    escolherLocal(){
        cy.get(Elementos.campoLocal()).select('Japan',{force: true})
        
    }

    selecionarAno(){
        cy.get(Elementos.campoAno()).select('1998')
        
    }
     selecionarMes(){
         cy.get(Elementos.campoMes()).select('April')
     }
     selecionarDia(){
         cy.get(Elementos.campoDia()).select('17')
     }
    preencherCampoSenha(){
        cy.get(Elementos.CampoSenha()).type('40028922')
    }

    preencherCampoConfirmarSenha(){
        cy.get(Elementos.CampoConfirmarSenha()).type('40028922')
    }
    
    clicarbotaoRefresh(){
        cy.get(Elementos.botaorefresh()).click()
    }
    validarTelaLimpa(){
        cy.wait(2000)
        cy.screenshot()
    }
}
export default TestePage;
