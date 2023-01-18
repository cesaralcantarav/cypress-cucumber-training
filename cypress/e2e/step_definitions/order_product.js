import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/login_page";
import { inventoryPage } from "../../pages/inventory_page";
import { menuPage } from "../../pages/menu_page";
import { cartPage } from "../../pages/cart_page";
import { checkoutStepOnePage } from "../../pages/checkout_step_one_page";
import { checkoutStepTwoPage } from "../../pages/checkout_step_two_page ";
import { checkoutCompletePage } from "../../pages/checkout_complete_page";

Given("que el Cliente se encuentra en la página SauceDemo", () => {
    cy.visit("/")
});

When("inicia sesión con las credenciales: {string}, {string}", (user, password) => {
    loginPage.submitLogin(user, password)
});

Then("el login es satisfactorio", () => {
    cy.url().should("contains", "/inventory.html") 
});

When("agrega al carrito de compras el primer producto", () => {
    inventoryPage.addCart()
});

When("compra el producto con sus datos: Nombre: {string}, Apellido: {string}, y Código Postal: {string}", (firstName, lastName, postalCode) => {
    menuPage.goToShoppingCar();
    cartPage.checkout();
    checkoutStepOnePage.enterInformationData(firstName, lastName, postalCode);
    checkoutStepTwoPage.finish();
});

Then("el pedido es satisfactorio", () => {
    cy.url().should("contains", "/checkout-complete.html") 
    checkoutCompletePage.elements.txtHeader().contains("THANK YOU FOR YOUR ORDER")
});