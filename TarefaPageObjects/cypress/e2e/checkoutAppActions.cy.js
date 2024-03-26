/// <reference types="cypress" />

const loginData = require("../fixtures/example.json");
const { nome, telefone, end1, cidade, estado, cep } = require("../fixtures/checkout.json");
const checkoutActions = require("../support/actions/checkoutActions");

describe("Teste de Checkout", () => {

    let email, senha;

    beforeEach(() => {
        email = loginData.email;
        senha = loginData.senha;
        cy.setCookie("ebacStoreVersion", "v2", { domain: "lojaebac.ebaconline.art.br" });
        cy.visit("/");
    });

    context('Adicionar Produto ao Carrinho', () => {

        it("Deve fazer o login com sucesso", () => {
            checkoutActions.login(email, senha);
        });  
        
        it('Deve adicionar produto ao carrinho', () => {
            checkoutActions.addProductToCart();

        });        

        it('Deve adicionar um novo endereço', () => {
            checkoutActions.addNewAddress(nome, telefone, end1, cidade, estado, cep);
        });  
      
    });
});
