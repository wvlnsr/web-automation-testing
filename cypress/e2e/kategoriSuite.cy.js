const LoginPage = require('../support/pages/LoginPage');
const KategoriPage = require('../support/pages/KategoriPage');
const UserData = require('../support/data/UserData');

describe('Kategori', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(UserData.validEmail);
        LoginPage.fillPassword(UserData.validPassword);
        LoginPage.clickLoginBtn();
        KategoriPage.clickKategoriMenu();
    });

  it('Add Category', () => {
    KategoriPage.clickAddCategory();
    KategoriPage.InputCategoryName(UserData.CategoryName);
    KategoriPage.clickSave();
    cy.get('.chakra-alert__desc').should('contain', 'item ditambahkan');
  })

})