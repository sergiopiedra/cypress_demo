class HomePage {
    visit() {
        cy.visit('http://138.197.129.143/');
    }

    getTitle() {
        return cy.title();
    }

    getLoginButton() {
        return cy.get('a.btn.btn-success');
    }

    getRegisterButton() {
        return cy.get('a.btn.btn-link[href="/register"]');
    }
}
export default new HomePage()