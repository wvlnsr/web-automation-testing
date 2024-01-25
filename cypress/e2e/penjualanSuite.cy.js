const LoginPage = require('../support/pages/LoginPage');
const PenjualanPage = require('../support/pages/PenjualanPage');
const data = require('../support/data');

describe('Sales', () => {

  beforeEach(() => {
    cy.visit('');
    LoginPage.fillEmail(data.registration.validEmail);
    LoginPage.fillPassword(data.registration.validPassword);
    LoginPage.clickLoginBtn();
    PenjualanPage.clickPenjualanMenu();
  });

  it('Verify Sales Page', () => {
    PenjualanPage.verifyPenjualanPage();
  })

  // Can't access Sales Page due to invalid date

})