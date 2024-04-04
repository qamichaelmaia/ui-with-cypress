//Validações dinâmicas

/// <reference types="cypress" />
const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Enviroment Variables", () => {
    beforeEach(() => {
        cy.login(email, senha);
    });

    it(`Deve pesquisar os produtos e ter um valor listado`, () => {
        homePage.openSearchProduct();
        homePage.searchProduct('i')
        homePage.products().should('have.length.greaterThan', 0)

        homePage.products().each(product =>{
            let price = product.find('[data-testid="price"]').text()
            expect(price).to.contain('R$')
        })

        cy.compareSnapshot(Cypress.currentTest.title, 1);
    });
});
