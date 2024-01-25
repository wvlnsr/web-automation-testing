const locator = require('../locators');
const data = require('../data');

class PembelianPage {
    async clickPembelianMenu(){
        cy.xpath(locator.purchase.PembelianMenu).click()
    }
    async clickAdd(){
        cy.xpath(locator.purchase.BtnAdd).click()
    }
    async clickSearchProduct(){
        cy.xpath(locator.purchase.BtnProduk).click()
    }
    async SelectProduct(){
        cy.xpath(locator.purchase.SelectedProduct).click()
    }
    async InputJumlah(Jumlah){
        cy.xpath(locator.purchase.FieldJumlah).type(Jumlah)
    }
    async clickSave(){
        cy.xpath(locator.purchase.BtnSimpan).click()
    }
    async verifySuccessfullyAdded() {
        cy.contains(data.message.successMessage).should('be.visible');
    }
}

module.exports = new PembelianPage();