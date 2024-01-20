const LoginPage = require('../support/pages/LoginPage');
const KategoriPage = require('../support/pages/KategoriPage');
const UserData = require('../support/data/UserData');

describe('Kategori', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        KategoriPage.clickPembelianMenu();
    });

  it('Add Category', () => {
    KategoriPage.clickAdd();
    KategoriPage.FieldNama(UserData.CategoryName);
  })

})