class CartPage {
    elements = {
        btnCheckout: () => cy.get("#checkout")
    }

    checkout(){
        this.elements.btnCheckout().click();
    }
}

export const cartPage = new CartPage();