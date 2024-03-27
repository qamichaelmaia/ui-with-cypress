/// <reference types="cypress" />

const loginData = require("../fixtures/example.json");
const { nome, telefone, end1, cidade, estado, cep } = require("../fixtures/checkout.json");
const checkoutActions = require("../support/actions/checkoutActions");

describe("Teste de Checkout", () => {
    let email, senha;
    let nome = "Maia";
    let telefone = "77777777";
    let end1 = " rua do cajueiro";
    let cidade = "Jacobina";
    let estado = " Bahia";
    let cep = "77777777";

    before(() => {
        // Executa apenas uma vez antes de todos os testes
        email = loginData.email;
        senha = loginData.senha;
        cy.setCookie("ebacStoreVersion", "v2", { domain: "lojaebac.ebaconline.art.br" });
        cy.visit("/");
        checkoutActions.login(email, senha); // Realiza o login uma vez
    });

    context('Adicionar Produto ao Carrinho', () => {

        it('Deve fazer o checkout completo', () => {
            checkoutActions.addProductToCart();
            checkoutActions.addNewAddress(nome, telefone, end1, cidade, estado, cep);
        });
        /*it('Deve adicionar um novo endereço', () => {

        });*/
    });
});
