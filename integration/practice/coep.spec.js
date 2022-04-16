import Minskole from "../../pom/project/coep"
let obj = new Minskole()

describe("COEP site for traversing methods", () => {

    beforeEach(function () {
        cy.visit('https://www.coep.org.in/')
    })

    it("Tc-1: Traverse methods on the elem of the dom list", () => {

        cy.get('#header').children().should("have.length", 3)
        cy.get('.html').children().first().should('contain', "Skip to main content")
        cy.get('#page').children().eq(1).should('have.class', "wrapper")
        cy.get('.page-default').children().eq(3).should('have.class', "wrapper")
        cy.get('.page-default').children().eq(3).should('have.class', "wrapper").as('newElem')
        cy.get('@newElem').parent().should('have.attr', "id", "page")

    })

    it("Tc-2:Traversing methods on siblings", () => {

        cy.get('.quicktabs-tabs').children().should('have.length', 11)
        cy.get('.quicktabs-tabs').first().should("contain", "Campus News")
        cy.get('.first').should("contain", "Campus News")
        cy.get('#quicktabs-qtab > div.item-list > ul > li:nth-child(2)').next()
            .should("contain", "Notices").as('prevEle')

        cy.get('@prevEle').prev().should("contain", "Upcoming Events").as('nextElems')
        cy.get('@nextElems').nextAll().should('have.length', 9)

        cy.contains('IIC COEP').parent().as('prevElems')
        cy.get('@prevElems').prevAll().should("have.length", 9)
        cy.get('@prevElems').siblings().should("have.length", 10)

        cy.get('@prevElems').prevUntil('a[href="https://www.coep.org.in/node?qt-qtab=4#qt-qtab"]')
         .should("contain",'Recruitment')

          cy.get('@prevElems').prevUntil('#quicktabs-qtab > div.item-list > ul > li:nth-child(5)')   
         .should("have.length",4)

        cy.get('#quicktabs-qtab > div.item-list > ul > li:nth-child(3)').nextUntil('#quicktabs-qtab > div.item-list > ul > li:nth-child(6)')
         .should("have.length",2)


    })

    it.skip("Tc-3:seraching within the elem and for removing elem from the list", () => {
        cy.get('.quicktabs-tabs').find('#quicktabs-tab-qtab-4')
            .should("have.class", "active jquery-once-3-processed")        //.should('contain',"Recruitment")
       
        cy.get(obj.remove).find(obj.findOne).not(obj.elem)
            .should("have.length", 10)

        cy.get('.quicktabs-tabs.quicktabs-style-zircon').children().find('a').as('remove')
        cy.get('@remove').not("#quicktabs-tab-qtab-7").should("have.length",10)
    })

    it.only('Tc-4: verify PrevUntil,NextUntil by :child without copying css selector',()=>{
        cy.get('ul[class="quicktabs-tabs quicktabs-style-zircon"] > li:nth-child(10)')
        .prevUntil('ul[class="quicktabs-tabs quicktabs-style-zircon"] > li:nth-child(6)')
        .should('have.length',3)
    })


})


