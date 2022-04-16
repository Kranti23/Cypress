//https://docs.cypress.io/guides/guides/test-retries#Global-Configuration

describe.skip("Learn Screenshot",()=>{
    
    // beforeEach(function (){
    //     cy.visit('https://www.amazon.in/')
    // })

    it('tc-1: Taking screenshots',()=>{
        cy.visit('https://www.amazon.in/')
        cy.screenshot('amazonShop')           //amazonShop --> file name
    })

    it.skip('tc-2: CLIPING ',()=>{
        cy.visit('https://www.amazon.in/')
        cy.screenshot('SS1',{clip:{x:40, y:25, width:400,height:300}})
    })

    it.only('tc-3: for Particular Element',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get("#nav-logo-sprites").screenshot('logo')   
    })

})


var array = ['ipad-2','ipad-mini','samsung-note9',"macbook-15"]
describe.only("Learn ViewPorts",()=>{

    //preset --->> devices 
    it('TC-1: with Preset ',()=>{
        cy.viewport('iphone-8');
        cy.visit("https://www.amazon.in/ref=nav_logo")
    })

    it('tc-2: with preset mackbook ',function(){
        cy.viewport('mackbook-16');
        cy.visit("https://www.amazon.in/ref=nav_logo")
    })
    
    it.only('tc-3: for various devices like in a list',()=>{
        cy.pause()
        for(let i of array){
           // cy.log(i)
            //cy.log(array[i])
        cy.viewport(i)
        cy.visit("https://www.amazon.in/ref=nav_logo")
        }
    })
    
    it('tc-4: test with height and width ',()=>{
        cy.viewport(414,896)
        cy.visit("https://www.amazon.in/ref=nav_logo")
    })
    
})





