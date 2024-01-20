const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const UserData = require('../support/data/UserData');

describe('Login', () => {

  beforeEach(() => {
    cy.visit('');
  });

  it('Login successfully with valid email and valid password', () => {
    LoginPage.fillEmail(UserData.validEmail);
    LoginPage.fillPassword(UserData.validPassword);
    LoginPage.clickLoginBtn();
    DashboardPage.verifyDashboardPage();
  })

  it('Login with valid email and invalid password', () => {
    LoginPage.fillEmail(UserData.validEmail);
    LoginPage.fillPassword(UserData.invalidPassword);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah');
  })

  it('Login with valid email and empty password', () => {
    LoginPage.fillEmail(UserData.validEmail);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', '"password" is not allowed to be empty');
  })

  it('Login with invalid email and valid password', () => {
    LoginPage.fillEmail(UserData.invalidEmail);
    LoginPage.fillPassword(UserData.validPassword);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah');
  })

  it('Login with empty email and valid password', () => {
    LoginPage.fillPassword(UserData.validPassword);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', '"email" is not allowed to be empty');
  })

  it('Login with space-only email and valid password', () => {
    LoginPage.fillEmail(UserData.spaceOnly);
    LoginPage.fillPassword(UserData.validPassword);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', '"email" is not allowed to be empty');
  })

  it('Login with valid email and space-only password', () => {
    LoginPage.fillEmail(UserData.invalidEmail);
    LoginPage.fillPassword(UserData.spaceOnly);
    LoginPage.clickLoginBtn();
    cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah');
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

})