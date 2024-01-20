const locator = require('../locators/pelangganLocator');

class PelangganPage {

    async clickPelangganMenu(){
        cy.xpath(locator.datatestid.PelangganMenu).click()
    }

    async clickAddPelanggan(){
        cy.xpath(locator.datatestid.BtnAddPelanggan).click()
    }

    async InputPelangganName(PelangganName){
        cy.xpath(locator.datatestid.FieldNamaPelanggan).type(PelangganName)
    }

    async InputNoHPPelanggan(PelangganNoHP){
        cy.xpath(locator.datatestid.FieldNoHPPelanggan).type(PelangganNoHP)
    }

    async InputPelangganAlamat(PelangganAlamat){
        cy.xpath(locator.datatestid.FieldAlamatPelanggan).type(PelangganAlamat)
    }

    async clickSave(){
        cy.xpath(locator.datatestid.BtnSimpan).click()
    }

}

module.exports = new PelangganPage();