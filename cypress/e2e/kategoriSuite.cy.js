const LoginPage = require('../support/pages/LoginPage');
const KategoriPage = require('../support/pages/KategoriPage');
const data = require('../support/data');

describe('Add category', () => {

    beforeEach(() => {
        cy.visit('');
        LoginPage.fillEmail(data.registration.validEmail);
        LoginPage.fillPassword(data.registration.validPassword);
        LoginPage.clickLoginBtn();
        KategoriPage.clickKategoriMenu();
    });

    it('Happy flow', () => {
      KategoriPage.clickAddCategory();
      KategoriPage.InputCategoryName(data.category.name);
      KategoriPage.InputDescription(data.category.description);
      KategoriPage.clickSave();
      KategoriPage.verifySuccessfullyAdded();
    })

    it('Add category with empty name', () => {
      KategoriPage.clickAddCategory();
      KategoriPage.InputDescription(data.category.description);
      KategoriPage.clickSave();
      KategoriPage.verifyEmptyField();
    })

})