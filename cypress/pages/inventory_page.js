class InventoryPage {
    elements = {
        btnAddCart1: () => cy.get("#add-to-cart-sauce-labs-backpack")
    }

    addCart(){
        this.elements.btnAddCart1().click();
    }
}

export const inventoryPage = new InventoryPage();