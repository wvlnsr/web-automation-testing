const RegisterPage = require('../support/pages/RegisterPage');
const LoginPage = require('../support/pages/LoginPage');
const UserData = require('../support/data/UserData');

describe('Register', () => {

    beforeEach(() => {
        cy.visit('');
        RegisterPage.clickLinkRegister();
      });

  it('Register successfully with valid store name, valid email, and valid password', () => {
    RegisterPage.fillStore(UserData.validStoreName);
    RegisterPage.fillEmail(UserData.validEmail);
    RegisterPage.fillPassword(UserData.validPassword);
    RegisterPage.clickRegisterBtn();
    cy.get('#chakra-toast-manager-top-right').should('contain', 'Toko berhasil didaftarkan')
    LoginPage.verifyLoginPage();
  })

  it('Register with empty store name, valid email, and valid password', () => {
    RegisterPage.fillEmail(UserData.validEmail);
    RegisterPage.fillPassword(UserData.validPassword);
    RegisterPage.clickRegisterBtn();
    cy.get('.chakra-alert').should('contain', '"name" is not allowed to be empty')
  })

  it('Register with valid store name, empty email, and valid password', () => {
    RegisterPage.fillStore(UserData.validStoreName);
    RegisterPage.fillPassword(UserData.validPassword);
    RegisterPage.clickRegisterBtn();
    cy.get('.chakra-alert').should('contain', '"email" is not allowed to be empty')
  })

  it('Register with valid store name, valid email, and empty password', () => {
    RegisterPage.fillStore(UserData.validStoreName);
    RegisterPage.fillEmail(UserData.validEmail);
    RegisterPage.clickRegisterBtn();
    cy.get('.chakra-alert').should('contain', '"password" is not allowed to be empty')
  })

  it('Register with space-only store name, valid email, and empty password', () => {
    RegisterPage.fillStore(UserData.validStoreName);
    RegisterPage.fillEmail(UserData.validEmail);
    RegisterPage.clickRegisterBtn();
    cy.get('.chakra-alert').should('contain', '"password" is not allowed to be empty')
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

})