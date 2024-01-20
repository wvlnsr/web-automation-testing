const locator = require('../locators/PenggunaLocator');

class PenggunaPage {

    async clickPenggunaMenu(){
        cy.xpath(locator.datatestid.PenggunaMenu).click()
    }

    async clickAddPengguna(){
        cy.xpath(locator.datatestid.BtnAddPengguna).click()
    }

    async InputPenggunaName(PenggunaName){
        cy.xpath(locator.datatestid.FieldNamaPengguna).type(PenggunaName)
    }

    async InputPenggunaEmail(PenggunaEmail){
        cy.xpath(locator.datatestid.FieldEmailPengguna).type(PenggunaEmail)
    }

    async InputPenggunaPassword(PenggunaPassword){
        cy.xpath(locator.datatestid.FieldPasswordPengguna).type(PenggunaPassword)
    }

    async clickSave(){
        cy.xpath(locator.datatestid.BtnSimpan).click()
    }

}

module.exports = new PenggunaPage();