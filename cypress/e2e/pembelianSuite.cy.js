const LoginPage = require('../support/pages/LoginPage');
const ProdukPage = require('../support/pages/ProdukPage');
const PembelianPage = require('../support/pages/PembelianPage');
const UserData = require('../support/data/UserData');

describe('Pembelian', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        ProdukPage.clickProdukMenu();
        ProdukPage.clickAdd();
        ProdukPage.InputProductName(UserData.ProductName);
        ProdukPage.InputHargaBeli(UserData.HargaBeli);
        ProdukPage.InputHargaJual(UserData.HargaJual);
        ProdukPage.InputStok(UserData.Stok);
        ProdukPage.SelectCategory(UserData.CategoryName);
        ProdukPage.clickSave();
    });

  it('Add Puchase', () => {
    PembelianPage.clickPembelianMenu();
    PembelianPage.clickAdd();
    PembelianPage.clickSearchProduct();
    PembelianPage.SelectProduct(UserData.ProductName);
    PembelianPage.InputJumlah(UserData.Jumlah);
    PembelianPage.clickSave();
    cy.get('.chakra-alert__desc').should('contain', 'item ditambahkan');
  })

})
