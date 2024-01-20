const LoginPage = require('../support/pages/LoginPage');
const PelangganPage = require('../support/pages/PelangganPage');
const UserData = require('../support/data/UserData');

describe('Pelanggan', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        PelangganPage.clickPelangganMenu();
    });

  it('Add Customer', () => {
    PelangganPage.clickAddPelanggan();
    PelangganPage.InputPelangganName(UserData.PelangganName);
    PelangganPage.InputNoHPPelanggan(UserData.PelangganNoHP);
    PelangganPage.InputPelangganAlamat(UserData.PelangganAlamat);
    PelangganPage.clickSave();
    cy.get('.chakra-alert__desc').should('contain', 'item ditambahkan');
  })

})