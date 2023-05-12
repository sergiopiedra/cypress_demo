import HomePage from '../page-objects/homePageUNA'

describe('Home Page', () => {
  beforeEach(() => {
    HomePage.visit()
  })

  it('should have the correct title', () => {
    HomePage.getTitle().should('eq', 'Sede Regional Chorotega');
  })

  it('should have the correct nav bar elements', () => {
    HomePage.getNavBar().should('be.visible');
  })

})