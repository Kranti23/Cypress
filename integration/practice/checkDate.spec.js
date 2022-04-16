/// <reference types="cypress" />

describe('Learn Automation', () =>{
 
    beforeEach(()=>{
       cy.visit('http://adactinhotelapp.com/');
       cy.get('input[class="login_input"]').eq(0).type('aayushpawar')
       cy.get('input[class="login_input"]').eq(1).type('Test@123')
       cy.get('input[class="login_button"]').click()
    })
    it('To verifywhether the check-out date field accepts a later datethan checkin date.', () =>{
           cy.get('select[id="location"]').select('Sydney')
           cy.get('select[id="hotels"]').select('Hotel Creek')
           cy.get('select[id="room_type"]').select('Standard')
           cy.get('select[id="room_nos"]').select('1')
           cy.get('input[id="datepick_in"]').clear().type('25/02/2022')
           cy.get('input[id="Submit"]').click()
           cy.get('#checkin_span').should('contain','Check-In Date shall be before than Check-Out Date')
    })
})