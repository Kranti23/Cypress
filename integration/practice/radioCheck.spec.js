
describe('verify the functionality for radio button,checkbox,dropdown',()=>{

    it('verify the functionality of checkbox using click()',()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value ="option-1"]').click().should('be.checked')
        cy.get('input[value ="option-1"]').click().should('not.be.checked')

    })

    it('verify the functionality of checkbox using click using check()',()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value ="option-1"]').check().should('be.checked')
        cy.get('input[value ="option-1"]').uncheck().should('not.be.checked')

    })

    it('verify the functionality of check button',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value ="green"]').check().should('be.checked')
        cy.get('input[value ="blue"]').should('not.be.checked')
        cy.get('input[value ="blue"]').check()
        cy.get('input[value ="green"]').should('not.be.checked')

    })


    it('verify the functionality of check button',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value ="cabbage"]').should('be.disabled')
        cy.get('input[value ="pumpkin"]').should('be.checked')
        cy.get('input[value ="lettuce"]').should('be.enabled')
        
    })


})