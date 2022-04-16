//install the plugin--->> https://www.npmjs.com/package/@4tw/cypress-drag-drop

describe("trigger",()=>{

it('tc-1: drag and drop using trigger and data transfer',()=>{
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    const dataTransfer = new DataTransfer();
    cy.get('li[id="menu-fried-chicken"]').trigger('dragstart',{dataTransfer})
    cy.get('div[id="plate"]').trigger('drop',{dataTransfer})
   })

   it('tc-2: mouse down , mouse up, mousemove', () => {
    cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
    cy.get('div[id="draggable"]').trigger('mousedown',{which: 1})
    cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
    cy.get('#droppable').should('have.class','ui-widget-header ui-droppable ui-state-highlight')
   })


   it('tc-3: events1', () => {
    cy.visit('https://www.orangehrm.com/');
    cy.get('a[class="link"]').eq(0).trigger('mouseover')
    cy.get('div[class="secondary"]').eq(0).invoke('show')
        .should('be.visible')
})

it('tc-4: events2', () => {
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

})

    // cy.visit('https://codenboxautomationlab.com/')
    // cy.contains('Contact Us').scrollIntoView()
    // cy.get('.block-editor-rich-text__editable > span').scrollIntoView()




    