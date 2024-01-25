const locator = require('../locators');
const data = require('../data');

class ProdukPage {
    async clickProdukMenu(){
        cy.xpath(locator.product.ProdukMenu).click()
    }
    async clickAdd(){
        cy.xpath(locator.product.BtnAdd).click()
    }
    async InputProductName(productName){
        cy.xpath(locator.product.FieldNama).type(productName)
    }
    async InputHargaBeli(hargaBeli){
        cy.xpath(locator.product.FieldHargaBeli).type(hargaBeli)
    }
    async InputHargaJual(hargaJual){
        cy.xpath(locator.product.FieldHargaJual).type(hargaJual)
    }
    async InputStok(stok){
        cy.xpath(locator.product.FieldStok).clear().type(stok)
    }
    async SelectCategory(name){
        cy.xpath(locator.product.FieldDropdownKategori).click()
        cy.xpath(locator.product.SearchCategoryField).type(name)       
        cy.xpath(locator.product.selectCategory).click() 
    }
    async clickSave(){
        cy.xpath(locator.product.BtnSimpan).click()
    }
    async verifySuccessfullyAdded() {
        cy.contains(data.message.successMessage).should('be.visible');
    }
    async verifyEmptyField() {
        cy.contains(data.message.emptyField).should('be.visible');
    }
    async verifyPriceMustBeGreater() {
        cy.contains(data.message.priceMustBeGreater).should('be.visible');
    }
    async verifyCostMustBeGreaterThan0() {
        cy.contains(data.message.costMustBeGreaterThan0).should('be.visible');
    }
    async clearProductCode() {
        cy.get(locator.product.FieldCode).clear();
    }
    async isRequired() {
        cy.contains(data.message.required).should('be.visible');
    }
}

module.exports = new ProdukPage();