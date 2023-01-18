import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/login_page";

Given("que el Cliente se encuentra en la página SauceDemo", () => {
    cy.visit("/")
});

When("inicia sesión con las credenciales: {string}, {string}", (user, password) => {
    loginPage.submitLogin(user, password)
});

Then("el login es satisfactorio", () => {
    cy.url().should("contains", "/inventory.html") 
});