describe("Accessing tables in cypress",()=>{
    it("Tc-1:suming the ages from first table",()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').each((el,i)=>{
                if(i != 0){
                //  let row = el.text()
                //  cy.log(row)
               let age = el.children().last().text()
                sum = sum + Number(age)   
                cy.log(sum)
                }
            }).then(()=>{
                expect(sum).to.eql(159)
                cy.log(sum)
            })
           // cy.log(sum) -->> gives zero
    })

   it("Tc-2: suming from table two",()=>{
    cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
    let sum2 = 0
       cy.get('#t02').find('tr').each((el,i)=>{
            if(i != 0){
                sum2 = sum2 + Number(el.children().eq(2).last().text()) 
            }
       }).then(function(){
           expect(sum2).to.eqls(163)
           cy.log(sum2)
       })

   })

})