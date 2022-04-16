describe("learn iframes", () => {
    it("Handling iframes with jquery", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then($el => {
            cy.wrap($el.contents().find('body')).as('iframeBody');
            cy.get('@iframeBody').should('have.attr', "data-id");
            cy.get('@iframeBody').find('p').should('have.text', "Your content goes here.");
            cy.get('@iframeBody').find('p').click().clear()
            .then(()=> {
            cy.get('@iframeBody').type("welcome to the world of Automation");
            })
        })
    })


    it("handling iframes with JS",()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(el =>{
            cy.wrap((el['0'].contentDocument.body)).as('iframeBody')
            cy.get('@iframeBody').find('p').click().type('Be Consistent')
        })
    })
    it("iframes with Jquery",()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(($iframeElem)=>{
            cy.wrap($iframeElem.contents().find('body')).as('frameBody')
            cy.get('@frameBody').find('.active').find('a').should('have.text',"Home")
        })
    })
    it('iframe with JS',()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(frameElem =>{
          cy.wrap((frameElem['0'].contentDocument.body)).as('frameBody')
          cy.get('@frameBody').find('.active').find('a').should('have.text',"Home")
        })
    })

})








Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })