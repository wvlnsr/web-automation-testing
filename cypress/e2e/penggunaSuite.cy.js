const LoginPage = require('../support/pages/LoginPage');
const PenggunaPage = require('../support/pages/PenggunaPage');
const UserData = require('../support/data/UserData');

describe('Pengguna', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        PenggunaPage.clickPenggunaMenu();
    });

  it('Add User', () => {
    PenggunaPage.clickAddPengguna();
    PenggunaPage.InputPenggunaName(UserData.PenggunaName);
    PenggunaPage.InputPenggunaEmail(UserData.PenggunaEmail);
    PenggunaPage.InputPenggunaPassword(UserData.PenggunaPassword);
    PenggunaPage.clickSave();
    cy.get('.chakra-alert__desc').should('contain', 'item ditambahkan');
  })

})