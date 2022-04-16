
// #support -> commands->  below code
                  //custom command ka name 
// Cypress.Commands.add('login',(username,password)=>{
//     cy.get('form .input-group > #user_email').eq(0).type(username)
//         cy.get('.form-control.password.optional').eq(0).type(password)
//         cy.get('button[class="btn btn-primary submit "]').eq(0).click()
// })


describe('creating custom commands',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard');      
    })
  
    it('use the custom command for login',()=>{
       
    cy.login('Admin','admin123');
    })
})


