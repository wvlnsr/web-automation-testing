const locator = require('../locators');
const data = require('../data');

class PenggunaPage {
    async clickPenggunaMenu(){
        cy.xpath(locator.user.PenggunaMenu).click()
    }
    async clickAddPengguna(){
        cy.xpath(locator.user.BtnAddPengguna).click()
    }
    async InputPenggunaName(name){
        cy.xpath(locator.user.FieldNamaPengguna).type(name)
    }
    async InputPenggunaEmail(email){
        cy.xpath(locator.user.FieldEmailPengguna).type(email)
    }
    async InputPenggunaPassword(password){
        cy.xpath(locator.user.FieldPasswordPengguna).type(password)
    }
    async clickSave(){
        cy.xpath(locator.user.BtnSimpan).click()
    }
    async verifySuccessfullyAdded() {
        cy.contains(data.message.successMessage).should('be.visible');
    }
}

module.exports = new PenggunaPage();