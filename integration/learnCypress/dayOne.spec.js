
describe('Learn Cypress_Automation', () => {

    it('test_case_1', () => {

        cy.visit(' http://webdriveruniversity.com/ ');
        cy.get('a[id="contact-us"]').invoke('removeAttr', 'target').click();
        //invoke---> to remove attribute (to open in same tab)     //click()--get that elem
         //cy.url --->to get that url --->> returns current url of page

        cy.url().should('include', 'Contact-Us')   //paasing a substring from url   //validating url
                               
        cy.url().then((url) => {          //resolving obj or promises in js-->o/p of log
            let newurl = url()
            cy.log(newurl)
            expect(url).to.equal('http://webdriveruniversity.com/Contact-Us/contactus.html')
                //actual url            //expected url
        })

    })

    it("Test the application form", () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[class="feedback-input"]').eq(0).type("Kranti");         //storing by index
        cy.get('input[class="feedback-input"]').eq(1).type("Chavan");
        cy.get('[ input[class="feedback-input"]').eq(2).type("chavan99@gmail.com");
        cy.get('textarea[name="message"]').type('We are learning Cypress')     

        cy.get('input[type="submit"]').click();
        cy.get('div[id="contact_reply"] > h1').should('have.text', "Thank You for your Message!")

    })

    it('Use of each method', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html ')
        cy.get('input[class="feedback-input"]').each((element, index) => {           //like a loop

            cy.wrap(element).type(" Done for Today ")                 //diff three boxex mein same word printing

            cy.get('textarea.feedback-input').type("Comment here \\")

        })

    })
})

//it.only----->> to test one specified test only
    //it.skip------>> to skip specified test

// assertion -->> to redirect
//- Assertions --->> whatever expecting are there in results or not is called assertion

/*
 implicit asser:---.should--->>valiadation
   
 exlicit:expect


*/



