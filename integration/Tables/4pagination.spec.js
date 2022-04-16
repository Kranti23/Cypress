const { find } = require("cypress/types/lodash");

describe("Functionality of pagination", function () {
    cy.visit('https://examples.bootstrap-table.com/template.html?v=134&url=options%2Ftable-pagination.html')

    function findItem(itemId) {

        function findInpage(indx) {
            var found = false;

            cy.get('li.page-item:not(.page-pre):not(.page-next)').as('pages')
            cy.get('@pages').eq(indx).click();
            cy.get('#table tbody tr td:nth-child(1)').each((item) => {
                let itemText = item.text();

                if (itemText == itemId) {
                    found == true;
                    expect(Number(itemText)).to.eq(itemId)
                    return false;          //breaks
                }
            }).then(function () {
                if (!found) {
                    findInpage(++indx)
                }
            })
        }
        findInpage(0)
    }
    findItem(14)
})