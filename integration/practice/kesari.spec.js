describe("Traverse Methods", () => {
    beforeEach(function(){
        cy.visit('https://www.kesari.in/')
    })
    it("Multiple methods", () => {
      //  cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children').eq(6).should('contain', "Cruises")
        cy.get('.menu.list-unstyled.mb-0').children().eq(9).contains('About Us')
        cy.get('.menu.list-unstyled.mb-0').children().first().should('have.attr', 'class')
        cy.get('.menu.list-unstyled.mb-0').children().last().should('have.class', 'menu-item-has-children')  
    })

    it('tc-2',()=>{
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first().next()
        .should('contain', 'Speciality')  
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(9).prev()
        .should('contain', 'Best')  
    })

    it('tc-3: passing css to siblings',()=>{
        cy.get('ul[class="menu list-unstyled mb-0"]').children().eq(1)
        .siblings('#tailor-made-holidays')
        .should('contain', 'Tailormade')
        cy.get('ul[class="menu list-unstyled mb-0"]').children().first()
        .siblings('.menu-item-has-children').should('contain', 'About Us')
    })

    it.only("tc-4",()=>{
        cy.get('ul[class="menu list-unstyled mb-0"]').children()
        .filter('li[class="menu-item-has-children"]').should('contain','Travel')
    })

})










beforeEach('hit url', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
})