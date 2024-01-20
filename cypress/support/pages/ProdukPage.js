const locator = require('../locators/ProdukLocator');

class ProdukPage {

    async clickProdukMenu(){
        cy.xpath(locator.datatestid.ProdukMenu).click()
    }

    async clickAdd(){
        cy.xpath(locator.datatestid.BtnAdd).click()
    }

    async InputProductName(ProductName){
        cy.xpath(locator.datatestid.FieldNama).type(ProductName)
    }

    async InputHargaBeli(HargaBeli){
        cy.xpath(locator.datatestid.FieldHargaBeli).type(HargaBeli)
    }

    async InputHargaJual(HargaJual){
        cy.xpath(locator.datatestid.FieldHargaJual).type(HargaJual)
    }

    async InputStok(Stok){
        cy.xpath(locator.datatestid.FieldStok).clear().type(Stok)
    }

    async SelectCategory(CategoryName){
        cy.xpath(locator.datatestid.FieldDropdownKategori).click()
        cy.xpath(locator.datatestid.SearchCategoryField).type(CategoryName)
    }

    async clickSave(){
        cy.xpath(locator.datatestid.BtnSimpan).click()
    }

}

module.exports = new ProdukPage();