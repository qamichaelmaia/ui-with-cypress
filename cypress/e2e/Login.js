/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { profilePage } = require("../support/pages/profile.page");

//Dado
Given("que estou na página inicial", () => {
    cy.setCookie("ebacStoreVersion", "v2", {// Define um cookie para a versão da loja
        domain: "lojaebac.ebaconline.art.br",// Especifica o domínio do cookie
    });
    cy.visit("/");
});
//Quando
When("eu faço login com o usuario {string} e senha {string}", (email, senha) => {// Define um passo When para o cenário de teste, que espera dois parâmetros: email e senha
    cy.login(email, senha);// Realiza o login com o email e a senha fornecidos
});
//Então
Then("o nome do usuário deve aparecer na página de perfil", () => {
    profilePage.customerName().should("have.text", "EBAC Cliente");
});
