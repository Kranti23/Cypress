
describe("Traverse methods in js", () => {

    it.skip("To get dom elem at specific index", () => {
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('th').eq(0).should('have.text', "Firstname")
        cy.get('th').eq(1).should('have.text', "Lastname")
    })

    it.skip("get the first dom elem within elements", () => {
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('th').first().should('have.text', "Firstname")
    })

    it.skip("get the last elem of dom within elemts", () => {
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('th').last().should("have.text","3")
        cy.get('th').last().should("have.attr", "scope")
        cy.get('th').last().contains("3")
    })

    it.skip("get children of dom elem",()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should("have.length","3")    
    })

    it.skip('get the next sibling dom elem within elem',()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#tea').next().should("have.text","Milk")
        cy.contains("Apple").next().should("have.text","Banana")
        cy.get('#milk').next().should("have.attr","id","espresso")
    })

    it.skip("to get previous sibling dom elem within elem",()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#sugar').prev().should("have.text","Espresso")
        cy.get('#sugar').prev().contains("Espresso")
    })

    it.skip("get all the next sibling dom elem within elem",()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').nextAll().should("have.length",4)
        cy.get('#coffee').nextAll().first("have.text","Tea")
        cy.get('#coffee').nextAll().first("have.attr","id")
    })

    it.skip("get all the previous siblings",()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#milk').prevAll().should("have.length",2)
        cy.contains("Cherries").prevAll().first("have.text","Blackberries")
    })

    it.skip("get dom elem that match a specific selector",()=>{
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('div[class="traversal-button-states"]').children().
        filter('.disabled').should("have.text","Warning")
    })

    it.skip("to get all sibling dom elem of elmts",function(){
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#milk').siblings().should("have.length",4)
    })

    //---------------- dayTwo----------------------------------------------
    // beforeEach(function(){
    //     cy.visit("https://automationteststore.com/")
    // })

    it("get elem at specific index",()=>{
        cy.get('.nav-pills.categorymenu').children().as('newElem')
        cy.get('@newElem').first().should("contain","Home")
        cy.get('@newElem').eq(1).should("contain","Apparel & accessories")

        //cy.get('.nav-pills').children().eq(1).should("contain","Apparel & accessories")
        //cy.get('.nav-pills').children().first().should("contain","Home")
    })

    it("get the first and last elem from list",()=>{
        cy.get('.nav-pills.categorymenu').children().first().should('contain',"Home")
        cy.get('.nav-pills.categorymenu').children().last().should('contain',"Book")  
    })

    it("get the next sibling from elm of the list",()=>{
        cy.get('a["href="https://automationteststore.com/index.php?rt=product/category&amp;path=36"]')
        .parent().should('contain',"Makeup")
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&amp;path=36"]')
        .parent().next().should('contain',"Skincare")
    })

    it("get the previous sibling from elm of the list",()=>{
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&amp;path=36"]')
        .parent().should('contain',"Makeup")
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&amp;path=36"]')
        .parent().prev().should('contain',"Shoe")
    })
    
    it("get all the siblings from elm of the list",()=>{
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&amp;path=36"]')
        .parent().siblings().should("have.length")
       
    })

    it("get elem that match a specific slector use .filter()",()=>{
        cy.get('.categorymenu').children().find('a').should('have.length',37)
        cy.get('.categorymenu').children().find('a')
        .filter('a[href="https://automationteststore.com/index.php?rt=product/category&path=43"]')
        .contains("Skincare")
    })

    it("get Descendent elm of the selector using .find() cmmnd",()=>{
       cy.get('.info_links_footer').children().find('a').should("have.length",7)
    })

    it("get REMOVE elems from the set of elem using .not() cmmnd",()=>{
        cy.get('.info_links_footer').children().find('a')
        .not('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]')
        .should("have.length",6)
     })
 
     it("to get PARENT dom elem of elemts use .parent()",()=>{
         cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]')
         .should("match","section")
     })

     it("to get ALL THE NEXT SIBLINGS elems within elms UNTIL ANOTHER elms ",()=>{
       cy.get('.promo_block').first()
       .nextUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(3)')
       .should("have.length",1)
    })
    
    it("to get ALL THE PREV SIBLINGS elems within elms UNTIL ANOTHER elms ",()=>{
        cy.get('.promo_block').last()
        .prevUntil('#maincontainer > div > div > section:nth-child(1) > section > div:nth-child(2)')
        .should("have.length",1)
    })

    it.only("to get the closest ancestor or be itself dom elem",()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.bg-primary').closest('table').should('have.class',"table table-light traversal-table")
        cy.get('.bg-primary').closest('div').should('have.class',"thumbnail")
    })

    it.only("to get parents Dom elem of elems until other element",()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.bg-primary').parentsUntil('table[class="table table-light traversal-table"]')
        .should('have.length',1)

       cy.get('table[class="table table-light traversal-table"]').parentsUntil('div[class="col-sm-12"]')
       .should('have.length',1)
        
    })



})




//siblings methods -->> next,sibling,nextAll,prevAll,prev,prevUntil,nextuntil