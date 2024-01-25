const locator = require('../locators');
const data = require('../data');

class RegisterPage {
    async fillStore(validStoreName){
        cy.xpath(locator.register.fieldName).type(validStoreName)
    }
    async fillEmail(validEmail){
        cy.xpath(locator.register.fieldEmail).type(validEmail)
    }
    async fillPassword(validPassword){
        cy.xpath(locator.register.fieldPassword).type(validPassword)
    }
    async clickLinkRegister(){
        cy.xpath(locator.register.linkRegister).click()
    }
    async clickRegisterBtn(){
        cy.xpath(locator.register.btnRegister).click()
    }
    async verifySuccessfullyRegistered() {
        cy.contains(data.message.successStore).should('be.visible');
    }
    async verifyEmptyField() {
        cy.contains(data.message.emptyField).should('be.visible');
    }
}

module.exports = new RegisterPage();