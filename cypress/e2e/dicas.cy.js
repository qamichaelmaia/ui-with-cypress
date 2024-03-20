/// <reference types="cypress" />
///Ainda em desenvolvimento
const { email, senha } = require("../fixtures/example.json");
const { profilePage } = require("../support/pages/profile.page");

describe("Teste de Autenticação", () => {
    before(() => {
        cy.setCookie("ebacStoreVersion", "v2", {
            domain: "lojaebac.ebaconline.art.br",
        }); ///cy.setCookie = entrar pela cookie criada no DevTools
    });

    beforeEach(() => {
        cy.visit("/");
        cy.login(email, senha);
    });

    it("Deve fazer o login com sucesso", () => {
        profilePage.customerName().should("have.text", "EBAC Cliente");
    });

    afterEach(() => {

    });

    after(() => {
        
    });
});
