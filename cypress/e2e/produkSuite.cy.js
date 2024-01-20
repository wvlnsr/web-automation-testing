const LoginPage = require('../support/pages/LoginPage');
const ProdukPage = require('../support/pages/ProdukPage');
const UserData = require('../support/data/UserData');

describe('Produk', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        ProdukPage.clickProdukMenu();
    });

  it('Add Product', () => {
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(UserData.ProductName);
    ProdukPage.InputHargaBeli(UserData.HargaBeli);
    ProdukPage.InputHargaJual(UserData.HargaJual);
    ProdukPage.InputStok(UserData.Stok);
    ProdukPage.SelectCategory(UserData.CategoryName);
    ProdukPage.clickSave();
  })

})