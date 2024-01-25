const LoginPage = require('../support/pages/LoginPage');
const KategoriPage = require('../support/pages/KategoriPage');
const ProdukPage = require('../support/pages/ProdukPage');
const data = require('../support/data');

describe('Add Product', () => {

    beforeEach(() => {       
        cy.visit('');
        LoginPage.fillEmail(data.registration.validEmail);
        LoginPage.fillPassword(data.registration.validPassword);
        LoginPage.clickLoginBtn();
        KategoriPage.clickKategoriMenu();
        KategoriPage.clickAddCategory();
        KategoriPage.InputCategoryName(data.category.name);
        KategoriPage.clickSave();
    });

  it('Happy flow', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaJual);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifySuccessfullyAdded();
  })

  it('Add product with empty product code', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.clearProductCode();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaJual);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyEmptyField();
  })

  it('Add product with empty name', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaJual);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyEmptyField();
  })
  
  it('Add product with empty category', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaJual);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.clickSave();
    ProdukPage.isRequired();
  })

  it('Add product with price is lesser than cost', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaJual2);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyPriceMustBeGreater();
  })

  it('Add product with price equals to cost', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaBeli);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyPriceMustBeGreater();
  })

  it('Add product with price equals to cost', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaBeli(data.product.hargaBeli);
    ProdukPage.InputHargaJual(data.product.hargaBeli);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyPriceMustBeGreater();
  })

  it('Add product with cost equals to 0', () => {
    ProdukPage.clickProdukMenu();
    ProdukPage.clickAdd();
    ProdukPage.InputProductName(data.product.productName);
    ProdukPage.InputHargaJual(data.product.hargaBeli);
    ProdukPage.InputStok(data.product.stok);
    ProdukPage.SelectCategory(data.category.name);
    ProdukPage.clickSave();
    ProdukPage.verifyCostMustBeGreaterThan0();
  })

})