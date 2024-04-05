/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },//commands.js

    openSearchProduct(){
        cy.visit('/')
        cy.get('[data-testid="search-products"]').click()

    },
    addItemToCart(){
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click

        cy.visit('/')
        cy.get(':nth-child(1) > .r-1nteefp > .r-1awozwy').click()
        cy.get(':nth-child(2) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()

        cy.visit('/')
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click()
    },
    cartItems(){
        return cy.get('[data-testid="selectAddressOrContinueToPayment"]')
    },
    removeFromCart(){
        return cy.get(':nth-child(2) > [data-testid^="remove"]'),
            cy.get(':nth-child(2) > [data-testid="remove"]').click()
    },
    updateFromCart(){
        cy.get('[data-testid="addItem"] > .css-146c3p1').click()
        return cy.get('[data-testid^="itemsQty"]')
    }
}