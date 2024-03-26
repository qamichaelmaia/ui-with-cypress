const profilePage = require("../pages/profile.page");

const checkoutActions = {

    login: (email, senha) => {
        cy.login(email, senha);
    },
    
    addProductToCart: () => {
        cy.get('[data-testid="search-products"]').click();
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.get('[data-testid="productName"]').click();
        cy.wait(2000);
    },

    address: (nome, telefone, end1, cidade, estado, cep) => {
        cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome);
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(telefone);
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(end1);
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(cidade);
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(estado);
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep);
        cy.wait(5000);
    },
    
    addNewAddress: (nome, telefone, end1, cidade, estado, cep) => {
        // Chame a função address diretamente
        checkoutActions.address(nome, telefone, end1, cidade, estado, cep);
        cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click();
    }
};

module.exports = checkoutActions;
