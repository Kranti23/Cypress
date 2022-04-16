describe('verify sign uo form using fixture', function () {
    //global
    before(() => {
        cy.fixture('fillForm').then((dataView) => {
            cy.log(dataView)
            this.data = dataView
        })
    })

    it("check for lexical scope", () => {
        cy.log(this.data)
        cy.log(this.data.firstName)
        this.data['firstName'] = "Nikhil"           //updated
        cy.log(this.data)
    })

    it('validate sign-up form submit', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type(this.data.firstName)
        cy.get('input[placeholder="Last Name"]').type(this.data.lastName)
        cy.get('input[placeholder="Email Address"]').type(this.data.emailId)
        cy.get('textarea[name="message"]').type(this.data.comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })

    it('validate sign-up form submit', () => {
        cy.fixture('fillForm').then(function (data) {
            data.firstName = "Rutuja"
            data.lastName = "Biradar"
            // cy.log(data)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[placeholder="First Name"]').type(data.firstName)
            cy.get('input[placeholder="Last Name"]').type(data.lastName)
            cy.get('input[placeholder="Email Address"]').type(data.emailId)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
        })
    })

    it('validate sign-up form reset button', () => {
        cy.fixture('fillForm').then(function (data) {
            data.firstName = "Rutuja"
            data.lastName = "Biradar"
            // cy.log(data)
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[placeholder="First Name"]').type(data.firstName)
            cy.get('input[placeholder="Last Name"]').type(data.lastName)
            cy.get('input[placeholder="Email Address"]').type(data.emailId)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="reset"]').click()
            cy.get('input[placeholder="First Name"]').should('be.empty')     //should('have.text', "")
        })
    })

    it('validate sign-up form for error msg', () => {
        cy.fixture('fillForm').then(function (data) {
             data.emailId = "chankk.com"       

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[placeholder="First Name"]').type(data.firstName)
            cy.get('input[placeholder="Last Name"]').type(data.lastName)
            cy.get('input[placeholder="Email Address"]').type(data.emailId)
            cy.get('textarea[name="message"]').type(data.comments)
            cy.get('input[type="submit"]').click()
            cy.get('body').should('contain','Error')
        })
    })

         it.only('verify contact text',()=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
             cy.contains(/CONTACT US/i).should('have.class',"section_header")
             cy.contains(/^webdriverUniversity/i).should('have.id',"nav-title")
         })


})







