/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

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
    },
    cartItems(){
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr')
    },
    searchProduct(product){
        cy.get('[data-testid="searchInput"]').type(product)
    },
    products(){
        return cy.get ('[data-testid="browse-product-list"] [data-testid="productDetails"]')
    },
    openCategoriesFilter(){
        cy.get('[data-testid="Category"]').click()
    },
    categories(){
        return cy.get('[data-testid^="search-category-"]')
    }
}