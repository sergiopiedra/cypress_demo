class registerPage {
    getUserNameInput() {
        return cy.get('#name');
    }
    getEmailInput() {
        return cy.get('#email');
    }
    getPasswordInput() {
        return cy.get('#password');
    }
    getConfirmPasswordInput() {
        return cy.get('#password-confirm');
    }
    getRegisterButton() {
        return cy.get('button.btnregister.btn.btn-primary');
    }
}
export default new registerPage()