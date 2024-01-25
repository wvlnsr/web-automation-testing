const locator = require('../locators');

class DashboardPage {
    async verifyDashboardPage(){
        cy.xpath(locator.dashboard.storeName).should('be.visible')
        cy.xpath(locator.dashboard.greeting).should('be.visible')
    }
}

module.exports = new DashboardPage();