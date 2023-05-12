import HomePage from '../page-objects/homePage'

describe('Home Page', () => {
  before(() => {
    HomePage.visit()
  })

  it('should have the correct title', () => {
    HomePage.getTitle().should('eq', 'Sede Regional Chorotega');
  })
})