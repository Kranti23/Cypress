
describe('to test Disabled element', () => {

    it('to test that the element is disabled', () => {

        cy.visit('https://www.testingwithtechbrothers99.com/common-elements');
        cy.get('div[class="radio disabled"]').should('have.class', 'radio disabled')     // by attr & its value
        cy.get('input[id="optionsRadios4"]').should('have.attr', 'disabled')   //only validating if attribute given attr is there

        cy.get('div[class="checkbox disabled"]').should('have.class', "checkbox disabled")
        cy.get('input[value="checkbox-disabled"]').should('have.attr', 'disabled')

    })


})

// $--->> for jquery element








