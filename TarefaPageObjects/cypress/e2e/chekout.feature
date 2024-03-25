Feature: Checkout
  Como cliente
  Eu quero verificar o processo de checkout
  Para garantir que funcione corretamente

  Scenario: Adicionar item ao carrinho
    Given que estou na página inicial
    When eu adiciono um item ao carrinho
    Then o item deve estar no carrinho

  Scenario: Finalizar compra
    Given que estou na página do carrinho
    When eu clico em "Finalizar Compra"
    Then devo ser redirecionado para a página de checkout
    And devo ver as opções de pagamento