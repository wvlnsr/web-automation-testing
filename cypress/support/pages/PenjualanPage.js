const locator = require('../locators/PenjualanLocator');

class PenjualanPage {

    async clickPenjualanMenu(){
        cy.xpath(locator.datatestid.PenjualanMenu).click()
    }

    async verifyPenjualanPage(){
        cy.xpath('//div[contains(text(),"Request failed with status code 400")]').should('be.visible')
    }

}

module.exports = new PenjualanPage();