Feature: Automação site netshoes

    Scenario: Preencher campo de pesquisa
        Given que acesso o site netshoes
        When pesquisar produto
        And adicionar ao carrinho
        Then produto escolhido deverá estar no carrinho
         

  