/// <reference types="cypress" />
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Teste do Carrinho de Compras", () => {
    before(() => {
        cy.setCookie("ebacStoreVersion", "v2", { domain: "lojaebac.ebaconline.art.br" })
        cy.visit("/")
    });

    beforeEach(() => {
        cy.login(email, senha);
    });

    it("Adicionar, Remover e Atualizar", () => {

        //Adicionar Produto
        cy.intercept('POST','**/public/addToCart', {fixture: 'addToCart'}).as('addToCart')
        homePage.openSearchProduct()
        homePage.addItemToCart()
        homePage.cartItems().should('have.text','Continue to payment')

        //Remover Produto
        cy.intercept('POST','**/public/removeItem', {fixture: 'removeItem'}).as('removeItem')
        homePage.removeFromCart().should('have.text','Remove')

        //Atualizar Quantidade do Produto
        cy.intercept('POST','**/public/updateItem', {fixture: 'updateItem'}).as('updateItem')
        homePage.updateFromCart().should('have.length', 1)
        cy.wait(3000)
    }); 
});
