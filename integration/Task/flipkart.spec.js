describe('Flipkart', () => {
    it('Search mobiles on flipkart which have cost upto 10000 rs', () => {
        let cost = 10000
        cy.visit("https://www.flipkart.com/")
        cy.get('input[type="text"]').type('mobiles').type('{enter}')
        cy.wait(3000)
        cy.get('select[class="_2YxCDZ"]').last().select(String(cost))
        cy.wait(3000)
        cy.get('._30jeq3._1_WHN1').each((el) => {
            cy.wrap(Number(el.text().replace(/₹|,/gi, ""))).should('be.lte', cost)
        })
    })
})