
describe('verify the url',function(){

    it('verify the url in contact us page',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')

    })

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        //   #contact-us---> css selector --- returns html element 
        cy.url().should('contain','Contact-Us')
        cy.get('input[name= "first_name"]').type('chinmay')
        cy.get('input[name= "last_name"]').type('deshpande')
        cy.get('input[name= "email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name= "message"]').type('hello')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('verify the functionality reset button',function(){

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')
        cy.get('input[name= "first_name"]').type('chinmay')
        cy.get('input[name= "last_name"]').type('deshpande')
        cy.get('input[name= "email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name= "message"]').type('hello')
        cy.get('input[type="reset"]').click()
        cy.get('input[type="submit"]').click()
        cy.contains('Error: all fields are required')

    })
})


    // <h1 id = "hello" class="hello1">Hello</h1>
    // cy.get('h1')
    /// cy.get('h1[id = "hello"]')
    /// cy.get('#hello')
    // cy.get('.hello1')
    // cy.contains('Hello')


    