const LoginPage = require('../support/pages/LoginPage');
const PenjualanPage = require('../support/pages/PenjualanPage');
const UserData = require('../support/data/UserData');

describe('Penjualan', () => {

  beforeEach(() => {
    cy.visit('');
    LoginPage.fillEmail(UserData.validEmail);
    LoginPage.fillPassword(UserData.validPassword);
    LoginPage.clickLoginBtn();
  });

  it('Verify Penjualan Page', () => {
    PenjualanPage.clickPenjualanMenu();
    PenjualanPage.verifyPenjualanPage();
  })

  // Because Sales Page is unavailable right now, so i only test to verify the page

})