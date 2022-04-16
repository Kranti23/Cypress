
describe("learn the types of Dropdown", () => {

    it('Tc-1: to test that the DROPDOWN WITH SELECT', () => {
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        // 1st way
        cy.get('select[class="form-control"]')
            .first()
            .select('Option1')       //by tagtext
            .should('have.value', '1')

        //--------- 2nd way
        cy.get('select[class="form-control"]')
            .first()
            .select('1')             //by attr value
            .should('have.contain','Option1')            //by tagtext


        //------------ find method --------------
        cy.get('select[class="form-control"]').first().find('option').eq(1).then((el,index) => {
            var elText = el.text()
            cy.log(elText)
        })
        
    })

    it.only('Tc-2: to test DYNAMIC dropDown', () => {
        cy.visit('https://paytm.com/train-tickets')
        cy.get('[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box').clear().type('del')
        cy.get('div[class="_16Y_"]').find('._3ewH').find('div[class="_3sXO"]').each((el, index) => {

            // cy.get('div[class="_16Y_"] > ._3ewH > ._3sXO').each((el,index)=>{    // ??????????

            let station = el.text()            // elem ka text ko retrive 
            cy.log(station)
            if (station == 'NZM - Hazrat Nizamuddin Delhi') {           //????
                cy.wrap(el).click();
            }
        })

    })

    it('Tc-3: DEPENDENT dropdown', () => {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/');
        //   cy.get('select[id="country"]').select('India').then(()=>{
        //       cy.get('select[id="state"]').select('Maharashtra').then(()=>{
        //           cy.get('select[id="city"]').select('Pune')
        //       })
        //   })
        cy.get('select[id="country"]').select('India')
        cy.get('select[id="state"]').select('Maharashtra')
        cy.get('select[id="city"]').select('Pune')
    })

    it('Tc-4: To verify the dynamic dropdown', () =>{
        cy.visit('https://www.ebay.com/n/all-categories#ebay-motors')
        cy.get('div[id="gh-cat-box"]').click()
        cy.get('select[aria-label="Select a category for search"] option').each((el,indx)=>{
            var categoryName = el.text()
            if(categoryName == 'Baby'){
                cy.wrap(el).click({force: true} )
            }
        })
        
    })

})



