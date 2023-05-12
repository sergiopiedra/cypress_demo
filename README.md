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
- Install Cypress as a dev dependency:
```
npm install cypress --save-dev
```
######  *This will download and install the latest version of Cypress and save it as a dev dependency in your project's package.json file.*
- Once Cypress is installed, you can open it by running the following command in your terminal or command prompt:
```
npx cypress open
```
######  *This will open the Cypress Test Runner, which will allow you to run your tests and view the results.*