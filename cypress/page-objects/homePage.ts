class HomePage {
    visit() {
      cy.visit('https://www.chorotega.una.ac.cr/');
    }

    getTitle() {
      return cy.title();
    }

    getNavBar() {
      return cy.get('.nav.navbar-nav.level0');
    }

  }
  export default new HomePage()