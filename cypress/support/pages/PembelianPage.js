const locator = require('../locators/PembelianLocator');

class PembelianPage {

    async clickPembelianMenu(){
        cy.xpath(locator.datatestid.PembelianMenu).click()
    }

    async clickAdd(){
        cy.xpath(locator.datatestid.BtnAdd).click()
    }

    async clickSearchProduct(){
        cy.xpath(locator.datatestid.BtnProduk).click()
    }

    async InputProductName(ProductName){
        cy.xpath(locator.datatestid.FieldSearchProduct).type(ProductName)
    }

}

module.exports = new PembelianPage();