
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="txtUsername"]').type(username)
    cy.get('input[name="txtPassword"]').type(password)
    cy.get('input[type="submit"]').click()
})

Cypress.Commands.add('validateTable', (id, value) => {
    cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
    let sum = 0
    cy.get(`#t0${id}`).find('tr').as('tableRow')
    cy.get('@tableRow').should('have.length', 4)
    cy.get('@tableRow').each((el, i) => {
        if (i != 0) {
            sum = sum + Number(el.children().last().text())
        }
    }).then(() => { 
        expect(sum).to.eq(value)
    })
})









//---->> for drag drop plugins
require('@4tw/cypress-drag-drop')

import 'cypress-iframe'; //or 
require('cypress-iframe');

import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')