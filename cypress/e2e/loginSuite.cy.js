const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const data = require('../support/data');

describe('Login', () => {

  beforeEach(() => {
    cy.visit('');
  });

  it('Happy flow', () => {
    LoginPage.fillEmail(data.registration.validEmail);
    LoginPage.fillPassword(data.registration.validPassword);
    LoginPage.clickLoginBtn();
    DashboardPage.verifyDashboardPage();
  })

  it('Login with valid email and invalid password', () => {
    LoginPage.fillEmail(data.registration.validEmail);
    LoginPage.fillPassword(data.registration.invalidPassword);
    LoginPage.clickLoginBtn();
    LoginPage.verifyWrongCredential();
  })

  it('Login with valid email and empty password', () => {
    LoginPage.fillEmail(data.registration.validEmail);
    LoginPage.clickLoginBtn();
    LoginPage.verifyEmptyField();
  })

  it('Login with invalid email and valid password', () => {
    LoginPage.fillEmail(data.registration.invalidEmail);
    LoginPage.fillPassword(data.registration.validPassword);
    LoginPage.clickLoginBtn();
    LoginPage.verifyWrongCredential();
  })

  it('Login with empty email and valid password', () => {
    LoginPage.fillPassword(data.registration.validPassword);
    LoginPage.clickLoginBtn();
    LoginPage.verifyEmptyField();
  })

  it('Login with space-only email and valid password', () => {
    LoginPage.fillEmail(data.spaceOnly);
    LoginPage.fillPassword(data.registration.validPassword);
    LoginPage.clickLoginBtn();
    LoginPage.verifyEmptyField();
  })

  it('Login with valid email and space-only password', () => {
    LoginPage.fillEmail(data.registration.invalidEmail);
    LoginPage.fillPassword(data.spaceOnly);
    LoginPage.clickLoginBtn();
    LoginPage.verifyWrongCredential();
  })

})