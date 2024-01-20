const locator = require('../locators/KategoriLocator');

class KategoriPage {

    async clickKategoriMenu(){
        cy.xpath(locator.datatestid.KategoriMenu).click()
    }

    async clickAddCategory(){
        cy.xpath(locator.datatestid.BtnAddCategory).click()
    }

    async InputCategoryName(CategoryName){
        cy.xpath(locator.datatestid.FieldNama).type(CategoryName)
    }

    async clickSave(){
        cy.xpath(locator.datatestid.BtnSimpan).click()
    }

}

module.exports = new KategoriPage();