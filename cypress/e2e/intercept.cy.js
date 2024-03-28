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

    it("Categories should be visit", () => {
        cy.intercept('GET','**/public/getCategories', {fixture: 'categories.json'}).as('getCategories')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length.greaterThan', 1)
    });

    it("Categories should be empty", () => {
        cy.intercept('GET','**/public/getCategories', {fixture: 'noCategories.json'}).as('getCategoriesEmpty')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length', 1)
    });

    it.only("Categories should be empty with error", () => {
        cy.intercept('GET','**/public/getCategories', {statusCode: 500}).as('getCategoriesError')
        homePage.openSearchProduct()
        homePage.openCategoriesFilter()
        homePage.categories().should('have.length', 1)
    });
});
