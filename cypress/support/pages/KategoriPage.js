const locator = require('../locators');
const data = require('../data');

class KategoriPage {
    async clickKategoriMenu(){
        cy.xpath(locator.category.menu).click()
    }
    async clickAddCategory(){
        cy.xpath(locator.category.btnAdd).click()
    }
    async InputCategoryName(CategoryName){
        cy.xpath(locator.category.fieldName).type(CategoryName)
    }
    async InputDescription(description){
        cy.xpath(locator.category.fieldDescription).type(description)
    }
    async clickSave(){
        cy.xpath(locator.category.btnSave).click()
    }
    async verifySuccessfullyAdded() {
        cy.contains(data.message.successMessage).should('be.visible');
    }
    async verifyEmptyField() {
        cy.contains(data.message.emptyField).should('be.visible');
    }
}

module.exports = new KategoriPage();