
describe("Acess env variables from cypress.json file", () => {

    it.only("Tc-01: register on my accounts page", () => {
        cy.visit('http://practice.automationtesting.in/my-account/')

        cy.get('#username').type('chavankranti99@gmail.com')
        cy.get('#password').type('KkkChavan@99')
        cy.get('input[name="login"]').click()
        cy.wait(5000)
        cy.get('nav[class="woocommerce-MyAccount-navigation"] > ul > li').eq(1)
        .click()
        cy.get('.woocommerce-MyAccount-content > .woocommerce-Message > a')
        .should("have.class","woocommerce-Button button")
    
    })


    it("Tc-01: register on my accounts page", () => {
        //cy.log(Cypress.env('shopUrl'))
        cy.visit(Cypress.env('pageUrl'))
        cy.visit(Cypress.env('acntUrl')).then(() => {

            cy.get('#reg_email').type('chavankranti99@gmail.com')
            cy.get('#reg_password').type('KkkChavan@99')
            cy.get('input[value="Register"]').click({ force: true })
            cy.wait(4000)
            cy.get('.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--orders.is-active').click()
            cy.get('woocommerce-Message.woocommerce-Message--info.woocommerce-info')
                .should('have.class', "woocommerce-Button button")
        })

    })





    it("tc-2: its method", () => {
        // gives the value of the property

        cy.visit('http://practice.automationtesting.in/shop/')
        let elemLen = cy.get('li.cat-item').its('length')

        elemLen.then((len) => {
            cy.log(len)
        })
        cy.get('li.cat-item').then((count) => {
            cy.log(Cypress.$(count).length)
        })
    })

})