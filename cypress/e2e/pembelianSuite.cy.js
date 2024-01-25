const LoginPage = require('../support/pages/LoginPage');
const ProdukPage = require('../support/pages/ProdukPage');
const PembelianPage = require('../support/pages/PembelianPage');
const data = require('../support/data');

describe('Add Purchase', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(data.registration.validEmail);
        LoginPage.fillPassword(data.registration.validPassword);
        LoginPage.clickLoginBtn();
        ProdukPage.clickProdukMenu();
        ProdukPage.clickAdd();
        ProdukPage.InputProductName(data.product.name);
        ProdukPage.InputHargaBeli(data.product.hargaBeli);
        ProdukPage.InputHargaJual(data.product.hargaJual);
        ProdukPage.InputStok(data.product.stok);
        ProdukPage.SelectCategory(data.category.name);
        ProdukPage.clickSave();
    });

  it('Happy Flow', () => {
    PembelianPage.clickPembelianMenu();
    PembelianPage.clickAdd();
    PembelianPage.clickSearchProduct();
    PembelianPage.SelectProduct(data.product.name);
    PembelianPage.InputJumlah(data.product.jumlah);
    PembelianPage.clickSave();
    PembelianPage.verifySuccessfullyAdded();
  })

})
