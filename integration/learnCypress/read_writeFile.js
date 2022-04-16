describe("FILE HANDLING",()=>{

    it('tc-1:TO WRITE IN FILE', () => {
        cy.writeFile('kranti.pdf', "Welcome to the world of Minskole..!\n")
        //          path of folder  , content of folder  
        cy.writeFile('kranti.pdf', "I am from COEP.\n", { flag: 'a+' })   //append new contents with old content
        cy.writeFile('kranti.pdf', "I am learning cypress automation.", { flag: 'a+' })
      })
    
      it("tc-2: Write json file in fixture file", () => {
        cy.writeFile('cypress\\fixtures\\fileHandling.json', {
          fullName: "Kranti Chavan",
          email: "chavankranti99@gmail.com",
          password: "kkk@23"
        })
      })
    
      it('tc-3: Read File', () => {
        cy.readFile('kranti.pdf').then(data => {
          expect(data).to.includes('COEP')       //.includes('I am from COEP.')
        })
      })
    
      it.only('tc-4: Write json test data in fixture file', () => {
        cy.fixture('fileHandling').then((data) => {
          cy.log(data)
          //cy.log(data.fullName)
          expect(data.fullName).to.eql('Kranti Chavan')
          expect(data.password).to.equals('kkk@23')
        })
      })  

})