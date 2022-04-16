describe('Handling cookies of web page',()=>{
    beforeEach(function(){
        cy.visit('https://kitchen.applitools.com/ingredients/cookie')
    })

    it("get All cookies",()=>{
         cy.getCookies().as('cookies')
         cy.get('@cookies').then((cookiesElem)=>{
             cy.log(cookiesElem)
         })
    })

    it('get All cookies',()=>{
        cy.getCookies().should('have.length',2)
        cy.getCookies().then(cookies =>{
            expect(cookies[0]).to.have.property('name','protein')
            expect(cookies[1]).to.have.property('name','vegetable') 
        })
    })

    var cookieArr = ['protein','vegetable']
    it("get All cookies and compare with the expected result",()=>{
        cy.getCookies().should('have.length',2)
        cy.getCookies().each((currentCookie, indx)=>{
            expect(currentCookie).to.have.property('name',cookieArr[indx])
        })
    })

    it("delete/clear All cookies",()=>{
        cy.clearCookies()
        cy.getCookies().should('be.empty')
    })

    it("delete the single cookie",()=>{
        cy.clearCookie('protein').should('be.null')
        cy.clearCookie('vegetable').should('be.null')
    })

    it("modify existed cookies value",()=>{
       cy.clearCookie('vegetable').then(()=>{
           cy.setCookie('vegetable',"Cabbage")
           .should("have.property","value","Cabbage")
       }) 
    })

    it("set new peoperties for cookies",()=>{
        cy.setCookie('fruit',"Mango").should('have.property','value','Mango')
    })

    it.skip('clear local storage',()=>{
        cy.visit('http://practice.automationtesting.in/')
        cy.clearLocalStorage().then(storage=>{
            expect(storage).to.be.empty
        })
        cy.clearLocalStorage('ob-monitor-obm-PixelLoadingError')    //passing key as a path
        cy.clearLocalStorage().should('be.empty')
    })
})












