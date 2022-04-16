
describe(" HANDLING ALERTS ", () => {

    it('Test-01 : "NORMAL ALERT" ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[id="name"]').type("Nikhil")
        cy.get('#alertbtn').click()
        //Handling the alerts----->>
        //what this alert returns we are passing,here returniing  text --->>(text)
        cy.on("window:alert", (text) => {
            expect(text).to.equals('Hello Nikhil, share this practice page and share your knowledge')  //Or
            expect(text).to.includes('Hello')       //substring
        })
    })

    it("Test-02 : 'ALERT WITH OK' ", function() {
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('a[href="#OKTab"]').click()
        cy.get('button[class="btn btn-danger"]').click()
        cy.on("window:alert", (text) => {
            expect(text).to.eqls('I am an alert box!')
        })
    })

    it('Test-03 : "Confirm Alerts in Cypress" ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type("Kranti")
        cy.get('#confirmbtn').click()
        cy.on("window:alert", (text) => {
            cy.log(text)
            expect(text).to.includes('Kranti')
            return true                    // clicks on OK buttn
            // return false                //clicks on CANCEL button
        })
    })

    it.only("Test-04 : CONFIRM ALERT ", () => {
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('.btn.btn-primary').click({ force: true })
        cy.on("window:alert", (text) => {
            cy.log(text)
            expect(text).to.eql('Press a Button !')
            expect(text).to.eqls('You pressed Ok')
            return true
        })
        // cy.get('#demo').should('contain','You pressed Ok')
    })

    it("Test-05: 'JS PROMPT'-User input text in prompt,click OK & Validate input text ", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Welcome to JS prompt')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain', "You entered: Welcome to JS prompt")
    })

})




