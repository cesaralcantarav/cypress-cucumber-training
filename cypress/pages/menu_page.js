class MenuPage {
    elements = {
        btnShoppingCar: () => cy.get("#shopping_cart_container")
    }

    goToShoppingCar(){
        this.elements.btnShoppingCar().click();
    }
}

export const menuPage = new MenuPage();