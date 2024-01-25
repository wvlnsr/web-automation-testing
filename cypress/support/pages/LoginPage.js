const locator = require('../locators');
const data = require('../data');

class LoginPage {

    async verifyLoginPage(){
        cy.xpath(locator.login.fieldEmail).should('be.visible')
        cy.xpath(locator.login.fieldPassword).should('be.visible')
    }
    async fillEmail(email){
        cy.xpath(locator.login.fieldEmail).type(email)
    }
    async fillPassword(password){
        cy.xpath(locator.login.fieldPassword).type(password)
    }
    async clickLoginBtn(){
        cy.xpath(locator.login.btnLogin).click()
    }
    async verifyWrongCredential() {
        cy.contains(data.message.wrongCredential).should('be.visible');
    }
    async verifyEmptyField() {
        cy.contains(data.message.emptyField).should('be.visible');
    }
}

module.exports = new LoginPage();