const locator = require('../locators/LoginLocator');

class LoginPage {

    async verifyLoginPage(){
        cy.xpath(locator.datatestid.email_field).should('be.visible')
        cy.xpath(locator.datatestid.password_field).should('be.visible')
    }

    async fillEmail(email){
        cy.xpath(locator.datatestid.email_field).type(email)
    }

    async fillPassword(password){
        cy.xpath(locator.datatestid.password_field).type(password)
    }

    async clickLoginBtn(){
        cy.xpath(locator.datatestid.btn_login).click()
    }

}

module.exports = new LoginPage();