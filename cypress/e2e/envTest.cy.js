//Variáveis de Ambiente

/// <reference types="cypress" />
const { email, senha } = require("../fixtures/example.json");
const { homePage } = require("../support/pages/home.page.js");

describe("Enviroment Variables", () => {
    beforeEach(() => {
        cy.setCookie("ebacStoreVersion", Cypress.env("ebacStoreVersion"), {
            domain: "lojaebac.ebaconline.art.br",
        }); // cy.setCookie = entrar pela cookie criada no DevTools

        cy.fixture(`${Cypress.env("MY_ENV")}/data.json`).then((data) => {
            cy.log(data.email);
        });
    });

    it("Default Env", () => {
        cy.log(Cypress.env("MY_ENV"));
        cy.log(Cypress.env("ebacStoreVersion"));
        cy.visit("/");
    });

    it(
        "Config test env",
        {
            env: {MY_ENV: "local"},
        },
        () => {
            cy.log(Cypress.env("MY_ENV"));
        }
    );
});
