class LoginPage {
    elements = {
        usernameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginBtn: () => cy.get("#login-button")
    }

    submitLogin(username, password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }
}

export const loginPage = new LoginPage();