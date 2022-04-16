import tableStruct from "../../pom/project/verifyTable"
let obj = new tableStruct();

describe("Table Valiadation", () => {

    var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
    var city = ["Dubai", "Mecca", "Taipei", "Shanghai"]
    var rank = ['1', '2', '3', '4']
    var country = ['UAE', 'Saudi Arabia', 'Taiwan', 'China']

    it('verify the structure of the building ', () => {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('.tsc_table_s13 tbody tr th').should('have.length', 4)
        cy.get('.tsc_table_s13 tbody tr th').each((el, indx) => {
            expect(el.text()).to.eq(buildArr[indx])
        })
    })

    it("verify the structure of building and their cities", () => {
        var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
        obj.buildStructure('.tsc_table_s13 tbody tr th', buildArr, 1, city)
    })

    it("verify the structure of building and its ranks", () => {
        var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
        obj.buildStructure('.tsc_table_s13 tbody tr th', buildArr, 4, rank)
    })

    it("verify the structure of building and their countries", () => {
        var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
        obj.buildStructure('.tsc_table_s13 tbody tr th', buildArr, 0, country)
    })

    var builtYear = ['2010','2012','2004','2008']
    var height = ['829m','601m','509m','492m']
    it("verify the structure of building and their years", () => {
        var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
        obj.buildStructure('.tsc_table_s13 tbody tr th', buildArr,3,builtYear)
    })
    
    it("verify the structure of building and their heights", () => {
        var buildArr = ["Burj Khalifa", "Clock Tower Hotel", "Taipei 101", "Financial Center"]
        obj.buildStructure('.tsc_table_s13 tbody tr th', buildArr,2,height)
    })


})



Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})