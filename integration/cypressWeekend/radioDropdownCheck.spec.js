describe("verify functionalityb of checkboxes,radioButtons ,dropDown", () => {
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
    })

    it("verify the checkbox with click", () => {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })

    it("verify the checkbox with ckeck and uncheck method", () => {
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.wait(4000)
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })

    it("verify the multiple selction with check", () => {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-2', 'option-2']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-2', 'option-2'])
            .should('not.be.checked')
    })

    it("verify the radioButton with ckeck", () => {
        // cy.get('input[type="radio"]').each((el)=>{
        //     cy.wrap(el).check().should("be.checked")
        // })
        cy.get("#radio-buttons").children().filter('input').each((el) => {
            cy.wrap(el).check().should("be.checked")
        })
        cy.get("#radio-buttons").find('input').each((el) => {
            cy.wrap(el).check().should("be.checked")
        })
    })
     
    it("verify the drop down functionality",()=>{
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')    //by tagtext
        cy.get('#dropdowm-menu-1').select('java').should('have.value','java')     //select by value
    })
//       
    it("verify the multiple selection of dropdown",()=>{
         let dropDown =  ['python','junit','jquery']
         cy.get('.section-title').eq(0).children('select').each((el,i)=>{
             let Text = el.text()
             cy.log(Text)
             cy.wrap(el).select(dropDown[i]).should("have.value",dropDown[i])
         })
    })

    it("verify functionality for enabled and disabled buttons",()=>{
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.enabled')
        cy.get('input[value="lettuce"]').should('be.enabled')
    })



})



