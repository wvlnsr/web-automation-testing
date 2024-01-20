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

    async SelectProduct(){
        cy.xpath(locator.datatestid.SelectedProduct).click()
    }
    
    async InputJumlah(Jumlah){
        cy.xpath(locator.datatestid.FieldJumlah).type(Jumlah)
    }

}

module.exports = new PembelianPage();