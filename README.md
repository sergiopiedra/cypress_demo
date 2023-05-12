# cypress_demo

## Documentation
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- [Cypress API](https://docs.cypress.io/api/api/table-of-contents.html)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)
- [Creating a Cypress Test Case](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

## How to start using Cypress
### 1. Install node.js
- Go to (https://nodejs.org/en/download/) and download the appropriate installer for your operating system (Windows, macOS, or Linux).
- Once the download is complete, run the installer and follow the instructions on the screen. The installer will install both Node.js and npm.
- After the installation is complete, you can verify that Node.js and npm are installed correctly by opening a terminal or command prompt and typing the following commands:
```
node -v
```
```
npm -v
```
### 2. Install Cypress
- Open a terminal or command prompt and navigate to the root directory of your project/folder.
- Initialize a new npm project in the directory:
```
npm init -y
```
######  `npm init -y` *will generate a package.json file with default settings, without prompting you to enter any information.*
- Install Cypress and typescript as a devs dependencies:
```
npm install cypress --save-dev typescript @types/node @types/cypress
```
######  *This will download and install the latest version of Cypress and TypeScript, as well as the TypeScript definitions for Node.js and Cypress.*
- Once Cypress is installed, you can open it by running the following command in your terminal or command prompt:
```
npx cypress open
```
######  *This will open the Cypress Test Runner, which will allow you to run your tests and view the results.*

### 3. Create a Cypress Test Case
- In the Cypress folder, create a new folder called `page-objects`.
- In this folder, create a new file called `homePage.ts`.
- In the `homePage.ts` file, add the following code:
```
class HomePage {
  visit() {
    cy.visit('https://www.chorotega.una.ac.cr/');
  }

  getTitle() {
    return cy.title();
  }
}
export default new HomePage()
```
- In the Cypress folder, create a new folder called `integrations`.
-  In the `integrations` folder, create a new file called `testNameDemo.spec.ts`.
-  In the `testNameDemo.spec.ts` file, add the following code:
```
import HomePage from '../page-objects/HomePage'

describe('Home Page', () => {
  before(() => {
    HomePage.visit()
  })

  it('should have the correct title', () => {
    HomePage.getTitle().should('eq', 'Sede Regional Chorotega');
  })
})
```
- Save the file.
- In the Cypress Test Runner, click on the `testNameDemo.spec.ts` file to run the test.