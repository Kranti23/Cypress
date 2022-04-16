import AssertMethods from "../../pom/utility/assertions"
import utilities from "../../pom/utility/utilities"
import Selectors from "../../pom/project/billingProduct"

let obj = new AssertMethods();
let tcObj = new Selectors();

describe("Sub total in the cart", () => {
    it("verify Three sliders bar only of homepage", () => {
        obj.visitApp('http://practice.automationtesting.in/')
        obj.verifyLength(tcObj.one, 3)
        obj.verifyLength('.attachment-shop_catalog.size-shop_catalog.wp-post-image', 3)
    })

    var bookName = ""
    var bookPrice = ""
    it.only('verify the only in-stock products can be added to cart', () => {
        obj.visitApp('http://practice.automationtesting.in/')
        cy.get(tcObj.arrivals).each((el, index) => {
            cy.get(tcObj.arrivals).eq(index).click({ force: true })

            cy.get('.stock').then(el => {
                let stk = el.text()
                if (stk.includes('in stock')) {
                    cy.get(tcObj.addtoBasket).click()

                    cy.get(tcObj.productTitle).then(el => {
                        bookName = el.text()
                        cy.log(bookName)
                    })

                    cy.get(tcObj.productPrice).first().then(el => {
                        bookPrice = el.text()
                        cy.log(bookPrice)

                    })

                    cy.get(tcObj.msg).should('contain', " “Mastering JavaScript” has been added to your basket.")
                    cy.get(tcObj.viewBucket).click()

                    cy.get(tcObj.cartName)
                        .then(el => {
                            let cartBook = el.text()
                            expect(cartBook).to.equals(bookName)
                        })

                    cy.get(tcObj.cartPrice).then(el => {
                        let prodPrice = el.text()
                        cy.log(prodPrice)
                        expect(prodPrice).to.includes(bookPrice)
                    })

                }
                else {
                    cy.go('back')
                }
            }).then(() => {
                let qty = 1
                cy.get('input[name="cart[9766527f2b5d3e95d4a733fcfb77bd7e][qty]"]').clear().type(qty)
                cy.get(tcObj.updateBasket).click()
                var subTotalCal = (bookPrice.replace("₹", "")) * qty;
                cy.log(subTotalCal)
                cy.wait(5000)
                cy.get(tcObj.subTotalOfCart).then(el => {
                    var subPriceCrt = el.text().replace('₹', "").replace('.00', "")
                    expect(subPriceCrt).to.equals(subTotalCal)
                })
            })
        })
    })

})



Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})


// beforeEach('hit url', () => {
//     Cypress.on("uncaught:exception", () => {
//         return false;
//     });
// })