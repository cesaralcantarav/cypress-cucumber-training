class CheckoutCompletePage {
    elements = {
        txtHeader: () => cy.get("#checkout_complete_container")
    }
}

export const checkoutCompletePage = new CheckoutCompletePage();