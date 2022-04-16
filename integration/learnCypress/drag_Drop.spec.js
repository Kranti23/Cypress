describe("learn Drag and Drop", () => {

    it('tc-1: drag and drop using drag method directly', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-ice-cream').drag('#plate-items')
    })

    it('tc-2: drag and drop using drag method directly', () => {
        cy.visit('https://codenboxautomationlab.com/')
        cy.contains('Contact Us').scrollIntoView()
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
        cy.get('footer').scrollIntoView()
    })

    it('tc-3: add to cart and checkout', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type="search"]').last().type('Ca')
        cy.get('h4[class="product-name"]').each((el, index) => {
            if (el.text() == 'Cashews - 1 Kg') {
                cy.get('div[class="product-action"] button').eq(index).click()
            }

        })
        cy.get('[class="cart-icon"]').click()
        cy.get('div[class="action-block"] button').first().click()
        cy.contains('Place Order').click()
        cy.get('div[class="products"] select').select('India')
        cy.get('[class="chkAgree"]').check()
        cy.contains('Proceed').click()
    })


})



