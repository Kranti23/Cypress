describe("Handling JS alerts",()=>{
    // beforeEach(function(){
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    // })

    it("Normal alerts",()=>{
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',function(str){                     //emmiter for getting elem outside the DOM
            expect(str).to.eq('I am a JS Alert')
        })
        cy.contains('You successfully clicked an alert').should('be.visible')
    })
    
    it("Confirm alerts",()=>{
        cy.contains('Click for JS Confirm').click()
        cy.on('window:alert',function(str){
            expect(str).to.eq('I am a JS Confirm')
            return true  //OK
        })
        cy.get('#result').should('have.text',"You clicked: Ok")
    })

//______________________________ USING WINDOW ______________________________________
    
       it("Prompt alert for ok",()=>{
           cy.window().then((el)=>{
               cy.stub(el,'prompt').returns("Hello Minskole")
               cy.get('button[onclick="jsPrompt()"]').click()
               cy.get('#result').should('contain','You entered: Hello Minskole')
           })
         //  cy.get('#result').should('contain','You entered: Hello Minskole')
       })

       it("confirm alert using window",()=>{
        cy.window().then((el)=>{
            cy.stub(el,'confirm').returns(true)
            cy.get('button[onclick="jsConfirm()"]').click()
            cy.wait(5000)
            cy.get('p[style="color:green"]').should('contain','You clicked: Ok')
        })
    })

    
    beforeEach(function(){
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    })

    it('normal alert',()=>{
        cy.get('#button1').click()
        cy.on('window:alert',(text)=>{
               expect(text).to.eq('I am an alert box!')
        })
    })

    it("confirm alert",()=>{
        cy.get('span[onclick="confirmAlert()"]').click()
        cy.on('window:confirmAlert',(str)=>{
            expect(str).to.eq('Press a button!')
            return true
            //return false 
        })
        cy.get('#confirm-alert-text').should('contain','You pressed OK!')
        //cy.get('#confirm-alert-text').should('contain','You pressed Cancel!')
    })

    it("confirm alert using window",()=>{
        cy.window().then(el =>{
            cy.stub(el,'confirm').returns(true)
            cy.get('span[onclick="confirmAlert()"]').click()  
        })  
         cy.get('#confirm-alert-text').should('include',"You pressed OK!")
    })

    it.only("using window object for normal alert",()=>{
        cy.window().then(win =>{
            cy.stub(win,'alert').as('normalAlert')
            cy.get('#button1').click()
        })
        cy.get('@normalAlert').should('have.been.calledOnceWith',"I am an alert box!")
    })

    it('confirm alert using window object',()=>{
        cy.window().then(win =>{
            cy.stub(win,'confirm').as('confirmAlert')
            cy.get('#button4').click()
        })
        cy.wait(5000)
        cy.get('@confirmAlert').should('have.been.calledOnceWith',"Press a button")
       // cy.get('#confirm-alert-text').should('contain',"You pressed OK!")
    })

    it('PROMPT js alert for null/cancel',()=>{
        cy.window().then((el)=>{
            cy.stub(el,'prompt').callsFake(()=> null)
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','You entered:null')
        })
    })


 


    it("Modal popUp",()=>{
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text',"It’s that Easy!!  Well I think it is.....")
        cy.get('.modal-footer > .btn').click()
    })

    it.only("ajax loader",()=>{
        cy.get('span[id="button3"]').click()
        cy.get('#myDiv .btn').click({force: true})
        cy.url().should('include',"http://webdriveruniversity.com/Ajax-Loader")
        cy.get('.modal-title').should('have.text',"Well Done For Waiting....!!!")
        cy.get('.modal-body').should("contain","The waiting game can be a tricky one;")
        cy.contains('Close').click()
    })


})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })








