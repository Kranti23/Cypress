
//<refrence types = "cypress"/> 

describe('Login Functionality',()=>{

it('Login with valid Credentials',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')

    cy.get('input[name="txtUsername"]').type("Admin")
    cy.get('input[name="txtPassword"]').type('admin123')

    // cy.get("#btnLogin").click()            //by id for button
    cy.get('input[type="submit"]').click()      //inspected elem by generic method
    cy.get('#menu_dashboard_index > b').should('have.text',"Dashboard") //by id    
    cy.get('#menu__Performance > b').should('have.text','Performance')
    cy.get('#menu_leave_viewLeaveModule > b ').should('have.text',"Leave")
     
})

it('Login with invalid Credentials',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    cy.get('input[name="txtUsername"]').type('Adminnn')     //put wrong username and pass...either one of them
    cy.get('input[name="txtPassword"]').type('admi12')  
    
    cy.get('input[type="submit"]').click()
    cy.get('#divLoginButton > span').should('have.text','Invalid credentials')

})

})





