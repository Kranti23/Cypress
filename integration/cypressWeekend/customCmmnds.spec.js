describe('learn custom commands',()=>{
    it('verify the functionality for login',()=>{
        cy.login('Admin','admin123')
    })

    it("verify the functionality of Tables",()=>{
        cy.validateTable(1,159)
        cy.validateTable(2,163)
    })
})

