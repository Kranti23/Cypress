
class Minskole {
    electricityBill = 'img[alt="Electricity bill"]';

    visitApp() {
        cy.visit('https://www.amazon.in/')
    }

    visitWithParameters(url, newUrl) {
        cy.visit(url)
        cy.get(this.electricityBill).click()
        cy.url().should('includes', newUrl)
    }

}
export default Minskole;
