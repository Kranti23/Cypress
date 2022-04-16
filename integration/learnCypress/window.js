describe('commands',()=>{
    it('cy.document',()=>{
       cy.visit('http://practice.automationtesting.in/')
       cy.document().then(doc=>{
          expect(doc.title).to.eq('Automation Practice Site')
       })
    })

       it('cy.document',()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.document().then(doc=>{
           expect(doc.title).to.eq('WebDriverUniversity.com')
        })
    })

    it('cy.window',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.window().then(win=>{ 
            cy.log(win.location)
            expect(win.location.href).to.eq('http://practice.automationtesting.in/')
            let newUrl = "https://twitter.com/krishnasakinala"
            win.location.href = newUrl
            cy.url().should('eq',"https://twitter.com/krishnasakinala")
        })
     })
     
     it.skip('hash commnad',()=>{
         cy.visit('https://mail.google.com/mail/')
         //log in to ur gmail
         cy.hash().should('eq','#inbox') 

     })

})