const RegisterPage = require('../support/pages/RegisterPage');
const LoginPage = require('../support/pages/LoginPage');
const data = require('../support/data');

describe('Register', () => {

    beforeEach(() => {
        cy.visit('');
        RegisterPage.clickLinkRegister();
      });

  it('Happy flow', () => {
    RegisterPage.fillStore(data.registration.validStoreName);
    RegisterPage.fillEmail(data.registration.validEmail);
    RegisterPage.fillPassword(data.registration.validPassword);
    RegisterPage.clickRegisterBtn();
    RegisterPage.verifySuccessfullyRegistered();
    LoginPage.verifyLoginPage();
  })

  it('Register with empty store name, valid email, and valid password', () => {
    RegisterPage.fillEmail(data.registration.validEmail);
    RegisterPage.fillPassword(data.registration.validPassword);
    RegisterPage.clickRegisterBtn();
    RegisterPage.verifyEmptyField();
  })

  it('Register with valid store name, empty email, and valid password', () => {
    RegisterPage.fillStore(data.registration.validStoreName);
    RegisterPage.fillPassword(data.registration.validPassword);
    RegisterPage.clickRegisterBtn();
    RegisterPage.verifyEmptyField();
  })

  it('Register with valid store name, valid email, and empty password', () => {
    RegisterPage.fillStore(data.registration.validStoreName);
    RegisterPage.fillEmail(data.registration.validEmail);
    RegisterPage.clickRegisterBtn();
    RegisterPage.verifyEmptyField();
  })

  it('Register with space-only store name, valid email, and empty password', () => {
    RegisterPage.fillStore(data.registration.validStoreName);
    RegisterPage.fillEmail(data.registration.validEmail);
    RegisterPage.clickRegisterBtn();
    RegisterPage.verifyEmptyField();
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

})