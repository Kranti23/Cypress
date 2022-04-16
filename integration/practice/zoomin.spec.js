
describe("verify the login functionality", () => {

    it('verify the login with valid credentials', () => {
        cy.visit("https://www.zoomin.cogn-in?%2Fm/si")
        cy.get('input[name="name"]').type('Kranti C')
        cy.get('input[name="email"]').type("chavankranti99@gmail.com");
        cy.get('.number-input').type(8329582996)
        cy.get('input[name="password"]').type("kranti@23")
       // cy.get('button[type="submit"]').click()
        //cy.get('span[class="navbar-logo"] > a > img').should("be.visible"); 

        cy.contains('SIGN UP').click()
        cy.get('a[href="/sign-in?%2F"]').should('be.visible')

    })

})