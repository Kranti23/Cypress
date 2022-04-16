
describe('Learn Automation', () =>{
 
    it('Tc-1 : To verify the button actions', () =>{
        
     cy.visit('https://demoqa.com/buttons')
     cy.get('button[id="doubleClickBtn"]').dblclick()
     cy.get('p[id="doubleClickMessage"]').should('be.visible').and('contain','You have done a double click')
     cy.get('button[id="rightClickBtn"]').rightclick()
     cy.get('p[id="rightClickMessage"]').should('be.visible').and('contain','You have done a right click')

    })

    it.only('TC-2: To verify the text inputs and text area ', () =>{    
        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id="userName"]').clear().type('Kranti')
        cy.get('input[id="userEmail"]').type('chavankranti99@gmail.com')
        cy.get('textarea[id="currentAddress"]').type('Pune')
        cy.get('textarea[id="permanentAddress"]').type('Nashik')
        cy.get('button[id="submit"]').click()
        
       cy.get('p[id="name"]').then((el)=>{                //??????????????
           var name = el.text()                            
           cy.log(name)
           expect(name).to.include('Aayush')
       })
       })

       it('Tc-3: To verify the selectables actions', () =>{
           cy.visit('https://demoqa.com/selectable')
           cy.get('ul[id="verticalListContainer"] li').as('ulList')
           cy.get('@ulList').each((el,index)=>{            
               cy.wrap(el).as('listEl')        // @--->> wrap wal repeatation avoiding
               cy.get('@listEl').click()
               cy.get('@listEl').should('have.class','mt-2 list-group-item active list-group-item-action')

           })
       })

       it('To verify the searchbox actions and press enter key', () =>{
        cy.visit('https://www.ebay.com/n/all-categories#ebay-motors')
        cy.get('input[class="gh-tb ui-autocomplete-input"]').type('toys {enter}')      // why {} ?? 
     
    })

    it('To verify the dynamic dropdown', () =>{
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




