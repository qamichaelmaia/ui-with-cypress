//Validações dinâmicas

/// <reference types="cypress" />
const { categories } = require('../fixtures/categories.json')
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Enviroment Variables", () => {
    beforeEach(() => {
        cy.login(email, senha)
    });

    categories.forEach(category => {
        it(`Validação categoria ${category.name}`, () => {//Utilizando uma fixures de categoria para separar os testes na mesma it
            homePage.openSearchProduct()//teste
            homePage.openCategoriesFilter()
            homePage.categories().should('contain.text', category.name)
        });
    })
});
