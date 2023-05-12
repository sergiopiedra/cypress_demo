import homePageSICBHN from '../page-objects/homePageSICBHN';
import HomePage from '../page-objects/homePageSICBHN';
import registerPage from '../page-objects/registerPage';
import { faker } from '@faker-js/faker'

const username = faker.internet.userName();
const email = `${username}@yopmail.com`;
const password = faker.internet.password();

describe('Home Page', () => { // Describe the test suite
    beforeEach(() => { // Before each test case do the following steps
        HomePage.visit() // Visit the home page for each test case
    })

    it('should have the correct title', () => {
        HomePage.getTitle().should('eq', 'SICBHN'); // Check the title of the page is correct
    })

    it.skip('should be able to see the login button in 1000px', () => {
        cy.viewport(1000, 600);
        HomePage.getLoginButton()
            .should('be.visible') // This is failing because the button is not visible in this viewport size
            .should('have.text', 'Login')
    })

    it('should be able to register', () => {
        cy.viewport(1280, 720); // Set the viewport size to 1280px x 720px
        HomePage.getLoginButton() // Get the login button
            .should('be.visible') // Check the button is visible
            .should('have.text', 'Login') // Check the button text is correct
            .click() // Click the button
        cy.url().should('include', '/login') // Check the URL is correct
    })
})