const LoginPage = require('../support/pages/LoginPage');
const PembelianPage = require('../support/pages/PembelianPage');
const UserData = require('../support/data/UserData');

describe('Pembelian', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        PembelianPage.clickPembelianMenu();
    });

  it('Add Sales', () => {
    PembelianPage.clickAdd();
    PembelianPage.clickSearchProduct();
    PembelianPage.InputProductName(UserData.ProductName);
  })

})