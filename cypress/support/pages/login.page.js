/// <reference types="cypress" />

class LoginPage {
    get #email() {
        return cy.get('[data-testid="email"]');
    }
    get #password() {
        return cy.get('[data-testid="password"]');
    }
    get #btnLogin() {
        return cy.get('[data-testid="btnLogin"]');
    }
    get #profile() {
        return cy.get('[href="/Tab/Account"]');
    }

    login(email, password) {
        this.#email.type(email);
        this.#password.type(password);
        this.#btnLogin.click();
        this.#profile.click();
    }
}

module.exports = new LoginPage();
