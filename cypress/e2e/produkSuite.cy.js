const LoginPage = require('../support/pages/LoginPage');
const KategoriPage = require('../support/pages/KategoriPage');
const ProdukPage = require('../support/pages/ProdukPage');
const UserData = require('../support/data/UserData');

describe('Produk', () => {

    beforeEach(() => {       
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        KategoriPage.clickKategoriMenu();
        KategoriPage.clickAddCategory();
        KategoriPage.InputCategoryName(UserData.CategoryName);
        KategoriPage.clickSave();
    });

  it('Add Product', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(UserData.ProductName);
    ProdukPage.InputHargaBeli(UserData.HargaBeli);
    ProdukPage.InputHargaJual(UserData.HargaJual);
    ProdukPage.InputStok(UserData.Stok);
    ProdukPage.SelectCategory(UserData.CategoryName);
    ProdukPage.clickSave();
  })

})