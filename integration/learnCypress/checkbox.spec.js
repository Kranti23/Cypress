     //<reference types = "cypress"></reference>

describe("Methods to Check_Uncheck the given checkboxes", () => {

    it.skip("Tc-1: To test the Single Single Checkboxes ", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get('a[id = "dropdown-checkboxes-radiobuttons"]').invoke('removeAttr', 'target').click()
        cy.get('input[value="option-1"]').click()
        cy.get('input[value="option-1"]').should('be.checked');
        cy.get('input[value="option-2"]').click().should("be.checked");
    })

    it.skip("Tc-2: To check the Single checkbox is unchecked ", () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click()
        cy.get('input[value="option-3"]').uncheck()
        cy.get('input[value="option-3"]').should('not.be.checked');

    })

    it('tc-3: To test all the checkboxes are checked using each', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click()
        cy.get('input[type = "checkbox"]').each((el, index) => {
            cy.wrap(el).check()
        })
    })

    it("Tc-4: To test all the checkboxes are checked by paasing the options", () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click()
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])

    })

    it.only("Tc-5: To test Radio Button is checked",()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should("be.checked")
        cy.get('input[value="yellow"]').check().should("be.checked")
        cy.get('input[value="green"]').should('not.be.checked')

  })

})



