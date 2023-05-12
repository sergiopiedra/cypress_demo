class HomePage {
    visit() {
      cy.visit('https://www.chorotega.una.ac.cr/');
    }

    getTitle() {
      return cy.title();
    }
  }
  export default new HomePage()