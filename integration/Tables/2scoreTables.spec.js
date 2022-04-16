
import AssertMethods from "../../pom/utility/assertions"
let asrtObj = new AssertMethods();

describe('Handling web tables', () => {
    it('check addition of total runs for KKR', () => {
        cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')
        cy.get('.table.batsman').eq(0).find('tr td:nth-child(3)').as('firstList')
        let sum = 0
        cy.get('@firstList').each((el, idx) => {
            if (idx != 10) {
                //  cy.log(el.text())
                sum += Number(el.text())
            }
        }).then(() => {
            expect(sum).to.eq(84)
        })
        asrtObj.invokeTextAndAssertInclude('.table.batsman tfoot tr.total td.text-right', 0, 84)
    })
   
    it.only("check addition for RCB ",()=>{
        cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')
        
        cy.get('.table.batsman').eq(1).find('tbody tr td:nth-child(3)').as('list')
        let sum2 = 0
        cy.get('@list').each((el,index)=>{
            if(index != 5){
               cy.log(el.text())
                sum2 = sum2 + Number(el.text())
            }
        }).then(()=>{
           // cy.log(sum2)
         expect(sum2).to.eq(85)
        })
    })


})




Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})