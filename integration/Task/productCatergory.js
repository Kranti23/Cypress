describe('use of utilities and utility functions', () => {
    var bkNm = ''

    it("Shop product by Filtering the price", () => {
        cy.visit('http://practice.automationtesting.in/shop/');
        cy.get('div.price_slider_wrapper span.ui-slider-handle').last().invoke('attr', 'style', 'left: 84%;')
        cy.get('span.price').children().not('del').each(el => {
            let prs = el.text().replace('₹', '').replace('.00', '')
            //cy.log(Number(prs))
            expect(Number(prs)).to.be.within(150, 500)
        })
    })

    it("product categories functionality for particular category", () => {
        cy.visit('http://practice.automationtesting.in/shop/');
        cy.get('ul.product-categories li a').each((el, index) => {
            var bkNm = el.text();
            cy.log(bkNm)
            if (bkNm === 'HTML') {
                cy.wrap(el).click()
            }
        })
        var bkLow = bkNm.toLowerCase()
        cy.url().should('include', bkLow)
        cy.get('nav.woocommerce-breadcrumb').then(el => {
            cy.log(el.text())
            expect(el.text()).to.include(bkNm)
        })


    })

    it("product categories functionality for each category", () => {
        cy.visit('http://practice.automationtesting.in/shop/');
        cy.get('ul.product-categories li a').each((el, index) => {
            var bkNm = el.text();
            cy.log(bkNm)
            cy.get('ul.product-categories li a').eq(index).click()

        })
        var bkLow = bkNm.toLowerCase()
        cy.url().should('include', bkLow)
        cy.get('nav.woocommerce-breadcrumb').then(el => {
            cy.log(el.text())
            expect(el.text()).to.include(bkNm)
        })
    })
})







