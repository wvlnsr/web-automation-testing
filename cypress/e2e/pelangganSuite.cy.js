const LoginPage = require('../support/pages/LoginPage');
const PelangganPage = require('../support/pages/PelangganPage');
const data = require('../support/data');

describe('Add Customer', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(data.registration.validEmail);
        LoginPage.fillPassword(data.registration.validPassword);
        LoginPage.clickLoginBtn();
        PelangganPage.clickPelangganMenu();
    });

  it('Happy Flow', () => {
    PelangganPage.clickAddPelanggan();
    PelangganPage.InputPelangganName(data.customer.name);
    PelangganPage.InputNoHPPelanggan(data.customer.phoneNumber);
    PelangganPage.InputPelangganAlamat(data.customer.address);
    PelangganPage.clickSave();
    PelangganPage.verifySuccessfullyAdded();
  })

  it('Add Customer with Empty Name', () => {
    PelangganPage.clickAddPelanggan();
    PelangganPage.InputNoHPPelanggan(data.customer.phoneNumber);
    PelangganPage.InputPelangganAlamat(data.customer.address);
    PelangganPage.clickSave();
    PelangganPage.verifyEmptyField();
  })

  it('Add Customer and Input Space-Only Phone Number', () => {
    PelangganPage.clickAddPelanggan();
    PelangganPage.InputPelangganName(data.customer.name);
    PelangganPage.InputNoHPPelanggan(data.spaceOnly);
    PelangganPage.InputPelangganAlamat(data.customer.address);
    PelangganPage.clickSave();
    PelangganPage.verifyNumberOnly();
  })

  it('Add Customer and Input Symbols for Phone Number', () => {
    PelangganPage.clickAddPelanggan();
    PelangganPage.InputPelangganName(data.customer.name);
    PelangganPage.InputNoHPPelanggan(data.symbols);
    PelangganPage.InputPelangganAlamat(data.customer.address);
    PelangganPage.clickSave();
    PelangganPage.verifyNumberOnly();
  })

})