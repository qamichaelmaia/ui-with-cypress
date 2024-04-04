//Cypress Intercept

/// <reference types="cypress" />
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Teste de Autenticação", () => {
    before(() => {

    });

    beforeEach(() => {
        cy.login(email, senha);
    });

    it.only("Adicionar", () => {
        cy.intercept('POST','**/public/getCategories', {fixture: 'categories.json'}).as('getCategories')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length.greaterThan', 1)

        cy.compareSnapshot(Cypress.currentTest.title, 1);
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
