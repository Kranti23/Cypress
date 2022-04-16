
describe("iFrame without plugin",function(){

    it('TC-01 : Iframe WITHOUT PLUGIN',()=>{
      cy.visit('https://the-internet.herokuapp.com/iframe')
      cy.get('iframe[id="mce_0_ifr"]').then(($iframeElem)=>{
          let iframeContentsBody = $iframeElem.contents().find('body')
          cy.wrap(iframeContentsBody).as('iframeBody')
        cy.get('@iframeBody').find('p').should('be.visible')
        .and('have.text',"Your content goes here.")
      })
    })

    it.only("TC-02: Iframe WITHOUT PLUGIN ",()=>{
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.get('#google_esf').then($iframeEl =>{
            var iframeContentsBody = $iframeEl.contents().find('body')
            cy.wrap(iframeContentsBody).as('iFrameBody')
            cy.get('@iFrameBody').find('img[alt="GlobalSQA"]').should("be.visible")
        })
    })
    
   // ----------------- without plugin -----------------
//    cy.get('iframe.lazyloaded').then((frameEl)=>{
//        var iframeContentsBody = frameEl.contents().find('body')
//        cy.wrap(iframeContentsBody).as('iframeBody')
//        cy.get('@iframeBody').find('a[title="GlobalSQA"]').should('exist').and('be.visible')
//    })
})

//_____________________________ WITH PLUGIN ________________________________________

describe("Iframe WITH PLUGIN",()=>{
    it.skip("TC-3: WITH PLUGIN",()=>{
        cy.visit('https://demoqa.com/frames')
        cy.frameLoaded('#frame1')             
        cy.iframe('#frame1').find('#sampleHeading').should('exist')
        .and('have.text',"This is a sample page")
    })

    it("TC-03:With plugin",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="#/mentorship"]').eq(0).click({force:true})
        .should('have.text',"Mentorship")
    })

})


beforeEach("hit url",()=>{
    Cypress.on("uncaught:exception",()=>{
        return false;
    });
})







