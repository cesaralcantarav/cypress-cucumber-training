class CheckoutStepOnePage {
    elements = {
        firstNameInput: () => cy.get("#first-name"),
        lastNameInput: () => cy.get("#last-name"),
        postalCodeInput: () => cy.get("#postal-code"),
        btnContinue: () => cy.get("#continue")
    }

    enterInformationData(firstName, lastName, postalCode){
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.postalCodeInput().type(postalCode);
        this.elements.btnContinue().click();
    }
}

export const checkoutStepOnePage = new CheckoutStepOnePage();