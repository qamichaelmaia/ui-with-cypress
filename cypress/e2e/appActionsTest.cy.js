/// <reference types="cypress" />

const { email, senha } = require("../fixtures/example.json");
const { profilePage } = require("../support/pages/profile.page");

/// e-mail e senha encontram-se na pasta ./fixtures/example.json
describe("Teste de Autenticação", () => {
    it("Deve fazer o login com sucesso", () => {
        cy.login(email, senha);
        profilePage.customerName().should("have.text", "EBAC Cliente");
    });
});
