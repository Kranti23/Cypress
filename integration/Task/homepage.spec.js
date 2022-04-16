
import Minskole from "../pom/homepage"
let myObj = new Minskole();

describe('POM',()=>{

    it("without parameter",()=>{
        myObj.visitApp()
        cy.get(myObj.electricityBill)

    })

    it("with Parameters",()=>{
      myObj.visitWithParameters('https://www.amazon.in/',"electricity")

    })

})
