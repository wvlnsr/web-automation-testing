const LoginPage = require('../support/pages/LoginPage');
const PenjualanPage = require('../support/pages/PenjualanPage');
const DashboardPage = require('../support/pages/DashboardPage');
const UserData = require('../support/data/UserData');

describe('Penjualan', () => {

  beforeEach(() => {
    
  });

  it('Add sales successfully', () => {
    PenjualanPage.fillEmail(UserData.validEmail);
    PenjualanPage.fillPassword(UserData.validPassword);
    PenjualanPage.clickLoginBtn();
    DashboardPage.verifyDashboardPage();
  })

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

})