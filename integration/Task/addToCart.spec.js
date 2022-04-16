import AssertMethods from "../../pom/Utility/assertions"        //class
//import AssertMethods from "../../pom/utility/assertions"
import utilities from "../../pom/Utility/utilities"               //object
import AutoTesting from "../../pom/Task/miniProject"             //class

let asserObj = new AssertMethods();         //obj for class
let testCaseObj = new AutoTesting();

describe("Use of utilities and utility functions", () => {

    it("Tc-1: Home page with three Sliders only", () => {
        asserObj.visitApp('http://practice.automationtesting.in/')
        testCaseObj.clickEl('#menu-icon', 0)
        testCaseObj.clickEl(testCaseObj.shopEl, 0)
        // testCaseObj.clickEl('.menu-item.menu-item-type-post_type.menu-item-object-page a',0)
        testCaseObj.clickEl(testCaseObj.homeEl, 0)
        asserObj.verifyLength(testCaseObj.sliderEl, 3) 
    })

    it("tc-2: verify the length of new arrivals", () => {
        asserObj.visitApp('http://practice.automationtesting.in/')
        testCaseObj.clickEl('#menu-icon', 0)
        asserObj.verifyTextContains("new arrivals")
        asserObj.verifyText(testCaseObj.newarrText, "new arrivals")
        cy.get(testCaseObj.newarrText).should(utilities.haveText, "new arrivals")
        asserObj.verifyLength(testCaseObj.newArrival, 3)
    })

    it("tc-3: verify the only in-scarttock products can be added to ", () => {
        asserObj.visitApp('http://practice.automationtesting.in/')

        cy.get(testCaseObj.newArrel).each((el, index) => {
            cy.get(testCaseObj.newArrel).eq(index).click({ force: true })
            cy.get(testCaseObj.paraText).then(el => {
                let paragraphText = el.text()
                cy.log(paragraphText)

                if (paragraphText.includes('in stock')) {
                    cy.get(testCaseObj.addtoCartBtn).click()
                }
                else {
                    cy.go(-1)        //back
                }
            })
        })
    })

})

// //---------------------------------------

var book3Name = "";
var book3Price = ""
describe.only("Billing in cart", () => {

    it("tc-4: verify book name and price in the cart", () => {
        asserObj.visitApp("http://practice.automationtesting.in/")

        cy.get(testCaseObj.newArrel).each((el, i) => {
            cy.get(testCaseObj.newArrel).eq(i).click({ force: true })
            cy.get(testCaseObj.paraText).then(el => {
                let paragraphText = el.text()
                cy.log(paragraphText)

                if (paragraphText.includes("in stock")) {
                    cy.get(testCaseObj.addtoCartBtn).click()
                    cy.get(testCaseObj.bookName).then(el => {
                        book3Name = el.text();
                        cy.log(book3Name)
                    })
                    cy.get(testCaseObj.bookPrice).first().then(el => {
                        book3Price = el.text();
                        cy.log(book3Price)
                    })
                    cy.get('div.woocommerce-message')
                        .should('contain', " “Mastering JavaScript” has been added to your basket.")
                    cy.get('div.woocommerce-message').should('be.visible').click()

                    testCaseObj.clickEl('#menu-icon', 0)
                    testCaseObj.clickEl(testCaseObj.cartBtn, 0)
                    cy.get(testCaseObj.cartBookText).then(el => {
                        cy.log(el.text())
                        expect(el.text()).to.eqls(book3Name)
                    })
                    cy.get('td.product-price > span[class="woocommerce-Price-amount"]').then(el => {
                        expect(el.text()).to.includes(book3Price)
                        cy.log(el.text())
                        cy.log(book3Price)
                    })
                }
                else {
                    cy.go(-1)
                }
            })
        })
    })
})









beforeEach('hit url', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
})