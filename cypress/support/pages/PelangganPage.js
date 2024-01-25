const locator = require('../locators');
const data = require('../data');

class PelangganPage {

    async clickPelangganMenu(){
        cy.xpath(locator.customer.PelangganMenu).click()
    }
    async clickAddPelanggan(){
        cy.xpath(locator.customer.BtnAddPelanggan).click()
    }
    async InputPelangganName(name){
        cy.xpath(locator.customer.FieldNamaPelanggan).type(name)
    }
    async InputNoHPPelanggan(phoneNumber){
        cy.xpath(locator.customer.FieldNoHPPelanggan).type(phoneNumber)
    }
    async InputPelangganAlamat(address){
        cy.xpath(locator.customer.FieldAlamatPelanggan).type(address)
    }
    async clickSave(){
        cy.xpath(locator.customer.BtnSimpan).click()
    }
    async verifySuccessfullyAdded() {
        cy.contains(data.message.successMessage).should('be.visible');
    }
    async verifyEmptyField() {
        cy.contains(data.message.emptyField).should('be.visible');
    }
    async verifyNumberOnly() {
        cy.contains(data.message.numberOnly).should('be.visible');
    }

}

module.exports = new PelangganPage();