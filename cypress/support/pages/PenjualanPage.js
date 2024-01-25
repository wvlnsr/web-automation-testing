const locator = require('../locators');
const data = require('../data');

class PenjualanPage {
    async clickPenjualanMenu(){
        cy.xpath(locator.sales.PenjualanMenu).click()
    }
    async verifyPenjualanPage(){
        cy.contains(data.message.error400).should('be.visible');
    }
}

module.exports = new PenjualanPage();