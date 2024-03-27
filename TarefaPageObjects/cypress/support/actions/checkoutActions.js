const profilePage = require("../pages/profile.page");

const checkoutActions = {

    login: (email, senha) => {
        cy.login(email, senha);
        cy.visit('/')
    },
    
    addProductToCart: () => {
        cy.get('[data-testid="search-products"]').click();
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.get('[data-testid="productName"]').click();
        cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk').click()
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > :nth-child(1) > .r-14lw9ot > :nth-child(2) > .css-175oi2r > .css-146c3p1').click()
        cy.get('.r-14lw9ot > .css-175oi2r.r-1udh08x > :nth-child(1) > .css-175oi2r').click()
        //cy.get('[style="color: rgb(0, 0, 0); font-family: Montserrat-Medium; margin-left: 10px;"]').click()
        //cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click()

        cy.wait(1000);
    },

    /*address: (nome, telefone, end1, cidade, estado, cep) => {
        cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz').type(nome);
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(telefone);
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(end1);
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(cidade);
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(estado);
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(cep);
        cy.wait(5000);
    },*/
    
    addNewAddress: (nome, telefone, end1, cidade, estado, cep) => {
        // Chame a função address diretamente
        cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').clear().type(nome)
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').clear().type(telefone)
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').clear().type(end1);
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').clear().type(cidade);
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').clear().type(estado);
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').clear().type(cep);
        cy.get('[data-testid="save"]').click()
        cy.wait(2000);

        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-1awozwy > [data-testid="back"] > .css-146c3p1').click()
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
        cy.get('[data-testid="completeCheckout"]').click()
        cy.wait(2000)
        //cy.get('[data-testid="completeCheckout"]').click()
        //cy.get('[data-testid="goBackHome"]').should('have.text', 'Go Back Home')
        //checkoutActions.address(nome, telefone, end1, cidade, estado, cep);
        
        //cy.get('[data-testid="addNewAddress"] > .r-lrvibr').click();
    }
};

module.exports = checkoutActions;
