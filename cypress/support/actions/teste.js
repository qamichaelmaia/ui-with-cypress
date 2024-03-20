import { homePage } from "./pages/home.page";
import loginPage from "./pages/login.page";

Cypress.Commands.add("login", (email, senha) => {
    homePage.openMenu("Account");
    loginPage.login(email, senha);
    homePage.openMenu("Account");
    
});