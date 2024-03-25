/// <reference types="cypress" />

const { email, senha } = require("../fixtures/example.json");
const { profilePage } = require("../support/pages/profile.page");

describe("Teste de Autenticação", () => {
    beforeEach(function () {
        cy.visit("/");
    });

    it("deve fazer o login com sucesso", () => {
        cy.login(email, senha);
        profilePage.customerName().should("have.text", "Maia Michael");
    });
});
