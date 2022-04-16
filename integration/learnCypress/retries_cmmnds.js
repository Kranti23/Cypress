
describe('Learn RETRIES n other commands', () => {

    it.skip("tc1: Retries in open mode",()=>{
                   // to pass testcase ,visit the url
        cy.title().should('include',"amazon")    //will fail
    })

    it('tc2: Retries in title ', function () {
        cy.visit('https://www.amazon.in/')
        cy.title().
            should('have.text',
     "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    })

     it.only("tc3: GO ",()=>{
         cy.visit('https://www.amazon.in/')
         cy.get('img[alt="Electricity bill"]').click()
        cy.go('back')     //yo can write cy.go or cy.go(-1)
        cy.go('forward')   //or cy.go(1)
     })
   
     it("tc4: Reload",()=>{
         cy.visit('https://www.amazon.in/')
         cy.reload()
     })
  
})
