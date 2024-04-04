//Cypress Intercept

/// <reference types="cypress" />
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Teste de Autenticação", () => {
    before(() => {
        cy.setCookie("ebacStoreVersion", "v2", { domain: "lojaebac.ebaconline.art.br" })
        cy.visit("/")
    });

    beforeEach(() => {
        cy.login(email, senha);
    });

    it.only("Adicionar", () => {
        cy.intercept('POST','**/public/addToCart', {fixture: 'addToCart'}).as('addToCart')
        homePage.openSearchProduct()
        homePage.addItemToCart()
        //homePage.cartItems().should('have.length.greaterThan', 1)


        /*
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length.greaterThan', 1)

        cy.compareSnapshot(Cypress.currentTest.title, 1);*/
    });

    it("Remover", () => {
        cy.intercept('GET','**/public/getCategories', {fixture: 'noCategories.json'}).as('getCategoriesEmpty')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length', 1)

        cy.compareSnapshot(Cypress.currentTest.title, 1);
    });

    it("Atualizar", () => {
        cy.intercept('GET','**/public/getCategories', {statusCode: 500}).as('getCategoriesError')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length', 1)

        cy.compareSnapshot(Cypress.currentTest.title, 1);
    });
});
