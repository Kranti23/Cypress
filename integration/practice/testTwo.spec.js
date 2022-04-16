const cypress = require("cypress")

describe('verify the lofin functionalityt',function(){

    it('check login with valid credentials',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('input[value = "LOGIN"]').click()
        cy.get('img[alt = "OrangeHRM"]').should('be.visible')

    })

    it ("check login with Invalid Credentials",()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name = "txtUsername"]').type("admi")
        cy.get('#txtPassword').type('admin@123')
        cy.get('input[value = "LOGIN"]').click()
        cy.get('#spanMessage').should('be.visible')

    })

})