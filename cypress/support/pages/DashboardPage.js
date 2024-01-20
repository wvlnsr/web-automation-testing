class DashboardPage {
    async verifyDashboardPage(){
        cy.xpath('//dt[contains(text(),"Sinar Jaya")]',{timeout:10000}).should('be.visible')
        cy.xpath('//dd[contains(text(),"hai")]',{timeout:10000}).should('be.visible')
    }
}

module.exports = new DashboardPage();