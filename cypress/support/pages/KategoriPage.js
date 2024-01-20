const locator = require('../locators/KategoriLocator');

class KategoriPage {

    async clickKategoriMenu(){
        cy.xpath(locator.datatestid.KategoriMenu).click()
    }

    async clickAdd(){
        cy.xpath(locator.datatestid.BtnAdd).click()
    }

}

module.exports = new KategoriPage();