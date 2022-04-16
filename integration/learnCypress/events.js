/// <reference types="cypress" />

describe('Learn Automation', () => {


    it('events', () => {
        cy.visit('https://www.orangehrm.com/');
        cy.get('a[class="link"]').eq(0).trigger('mouseover')
        cy.get('div[class="secondary"]').eq(0).invoke('show')
            .should('be.visible')


    })
    it('events', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[id="txtUsername"]').type('admin');
        cy.get('input[id="txtPassword"]').type('admin123');
        cy.get('input[id="btnLogin"]').click()
        //cy.contains('Admin').trigger('mouseover', {bubbles: false})
        cy.get('a[class="firstLevelMenu"]').eq(0).invoke('show').trigger('mouseover')
        cy.get('a[class="firstLevelMenu"]').eq(0).screenshot()
        //s document.getSelection(".menu > ul > li > ul").style.opacity = "0.5";
        cy.get('ul#mainMenuFirstLevelUnorderedList ul li a#menu_admin_UserManagement')
            .invoke('show')
            .should('be.visible')
            .trigger('mousedown')


    })
    it('dependant dropdown', () => {
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
    it('blur methhod and focus method', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('#txtUsername').first().focus().should('be.focused')
        cy.get('#txtUsername').first().blur().should('not.be.focused')

    })
    it('find method and within', () => {
        cy.visit('https://www.orangehrm.com/');
        cy.get('ul[class="nav navbar-nav navbar-left default-nav web-menu"]').find('a').should('be.visible')
        cy.get('div[class="collapse navbar-collapse"]').within(() => {
            cy.get('a[class="link"]').first().should('contain', 'Platform')
        })

    })
    
        // cy.visit('https://codenboxautomationlab.com/')
        // cy.contains('Contact Us').scrollIntoView()
        // cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
  
    
   it('drag and drop using trigger and  data transfer',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    const dataTransfer = new DataTransfer();
    cy.get('li[id="menu-fried-chicken"]').trigger('dragstart',{dataTransfer})
    cy.get('div[id="plate"]').trigger('drop',{dataTransfer})
   })
   it('drag and drop using  drag method directly',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
         cy.get('#menu-ice-cream').drag('#plate-items')
   })
   it('mouse down , mouse up, mousemove', () => {
    cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
    cy.get('div[id="draggable"]').trigger('mousedown',{which: 1})
    cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
    cy.get('#droppable').should('have.class','ui-widget-header ui-droppable ui-state-highlight')
   })
   
   it('drag and drop using  drag method directly',()=>{
    cy.visit('https://codenboxautomationlab.com/')
    cy.contains('Contact Us').scrollIntoView()
    cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
    cy.get('footer').scrollIntoView()
   })
   it.only('add to cart and checkout',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input[type="search"]').last().type('Ca')
    cy.get('h4[class="product-name"]').each((el,index)=>{
        if(el.text() == 'Cashews - 1 Kg'){
            cy.get('div[class="product-action"] button').eq(index).click()
        }
       
    })
    cy.get('[class="cart-icon"]').click()
        cy.get('div[class="action-block"] button').first().click()
        cy.contains('Place Order').click()
        cy.get('div[class="products"] select').select('India')
        cy.get('[class="chkAgree"]').check()
        cy.contains('Proceed').click()
   })
})