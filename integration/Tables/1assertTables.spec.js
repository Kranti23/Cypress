describe("Handling web tables", () => {
    var companies = [];
    var contacts = [];

    it("Tc-01:invoke the name of companies from the table", () => {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('table#customers tbody tr').each((row, indx) => {
            if (indx != 0) {
                cy.get('table#customers tbody tr').eq(indx).find('td').first().invoke('text').then((text) => {
                    // cy.log(text)
                    companies.push(text)
                })
            }
        })
        cy.log(companies)
    })

    it('Tc-02:retrieve the contacts from table', () => {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('table#customers tbody tr').each((row, ind) => {
            if (ind != 0) {
                cy.get('table#customers tbody tr').eq(ind).find('td').eq(1).then((contactRow) => {
                    companies.push(contactRow.text())
                })
            }
        })
        cy.log(contacts)
    })

    it('Tc-03: Assert the respective counteries has given to companies only', () => {
        cy.log(companies)
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')

        var countries = ['', 'Germany', 'Mexico', 'Austria', 'UK', 'Canada', 'Italy'];
        cy.get('table#customers tbody tr').each((row, indx) => {
            if (indx != 0) {
                cy.get('table#customers tbody tr').eq(indx).find('td').last().then((el, i) => {
                    if(el.text() == countries[indx]){
                        cy.get('table#customers tbody tr').eq(indx).find('td').first().invoke('text').then((text)=>{
                            expect(text).to.equal(companies[indx -1])
                        })
                    }
                })
            }
        })
    })

})







beforeEach('hit url', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
})