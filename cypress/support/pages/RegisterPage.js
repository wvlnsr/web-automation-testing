const locator = require('../locators/RegisterLocator');

class RegisterPage {

    async fillStore(storeName){
        cy.xpath(locator.datatestid.store_name).type(storeName)
    }

    async fillEmail(email){
        cy.xpath(locator.datatestid.email_field).type(email)
    }

    async fillPassword(password){
        cy.xpath(locator.datatestid.password_field).type(password)
    }

    async clickLinkRegister(){
        cy.xpath(locator.datatestid.link_register).click()
    }

    async clickRegisterBtn(){
        cy.xpath(locator.datatestid.btn_register).click()
    }

}

module.exports = new RegisterPage();