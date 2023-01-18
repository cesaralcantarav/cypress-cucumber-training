class CheckoutStepTwoPage {
    elements = {
        btnFinish: () => cy.get("#finish")
    }

    finish(){
        this.elements.btnFinish().click();
    }
}

export const checkoutStepTwoPage = new CheckoutStepTwoPage();