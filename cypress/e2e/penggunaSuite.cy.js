const LoginPage = require('../support/pages/LoginPage');
const PenggunaPage = require('../support/pages/PenggunaPage');
const data = require('../support/data');

describe('Add User', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(data.registration.validEmail);
        LoginPage.fillPassword(data.registration.validPassword);
        LoginPage.clickLoginBtn();
        PenggunaPage.clickPenggunaMenu();
    });

  it('Happy flow', () => {
    PenggunaPage.clickAddPengguna();
    PenggunaPage.InputPenggunaName(data.user.name);
    PenggunaPage.InputPenggunaEmail(data.user.email);
    PenggunaPage.InputPenggunaPassword(data.user.password);
    PenggunaPage.clickSave();
    PenggunaPage.verifySuccessfullyAdded();
  })

})