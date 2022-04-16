describe("mercari site", () => {

    var search = ""
    var results = ""
    it('validate the search box without typing the results', () => {
        cy.visit('https://www.mercari.com/')
        cy.get('input[data-testid="SearchInput"]').click()
        cy.get('div[class="components__DropdownWrapper-l0irxq-0 gvMzaF"]').children().last().as('list')
        cy.get('@list').find('li[data-testid="SearchGreyPill"]').each(el => {
            search = el.text()
            cy.log(search)    //list found
            //})
            //.then(function () {
            //     cy.get('.Button__StrippedButton-y431fn-2.components__GreyPill-l0irxq-1.fuOhqP').each((el, index) => {
            //         cy.log(el.text())
            //         cy.get('.Button__StrippedButton-y431fn-2.components__GreyPill-l0irxq-1.fuOhqP')
            //             .eq(index).click()
            //       //  expect(el.text()).to.equal(search)
            //     })
        }).then(function () {
            cy.get('.components__DropdownWrapper-l0irxq-0.gvMzaF ul li[data-testid="SearchGreyPill"] .Button__StrippedButton-y431fn-2.components__GreyPill-l0irxq-1.fuOhqP')
                .as('getElem')
            cy.get('@getElem').each((el, indx) => {
                cy.wait(5000)
                cy.wrap(el).click()
                // cy.wait('@getElem')
                // cy.get('.components__DropdownWrapper-l0irxq-0.gvMzaF ul li[data-testid="SearchGreyPill"] .Button__StrippedButton-y431fn-2.components__GreyPill-l0irxq-1.fuOhqP')
               // cy.get('@getElem').eq(indx).click()
            })
        }).then(() => {
            cy.get('div[class="withSuggestedQueriesAndPopularSearchesDropdownView__DropdownWrapper-sc-17jb5at-4 jKOsBL"]')
                .click()
            cy.get('li[data-testid="SearchGreyPill"]').each(el => {
                results = el.text()
                cy.log(results)
                expect(results).to.eql(search)
            })
        })
    })
})




Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})