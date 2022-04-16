//  <reference types="cypress" 

describe('Traversing Methods',()=>{
   beforeEach(()=>{
    cy.visit('https://www.ebay.com/n/all-categories#ebay-motors');
   })

   it('Get the childrens',()=>{
        cy.get('ul[class="top-level-cats"]').children().should('have.length', 11)
        cy.get('ul[class="top-level-cats"]').children('.active').should('have.length',1)
        cy.get('div[class="all-categories-left-nav-container sticky"]').children()
        .should('have.length',2)
    })
    
    it('Get the "Closest" FIRST DOM element that matches the selector (whether it be itself or one of its ancestors).',()=>{
       cy.get('li.active').closest('ul').should('have.class','top-level-cats')
       cy.get('ul.top-level-cats').closest('div').should('have.class','all-categories-left-nav-container sticky')
    
    })

    it('Get the DOM element containing the text, using .contains()',()=>{
        //DOM elements can contain more than the desired text and still match.
        cy.get('ul[class="sub-cats"]').first().children().filter('.view-more-link')
        .should('have.length',1)
        cy.get('ul[id="gh-topl"] li').filter('li[class="gh-t gh-divider-l"]')
        .should('have.length',3)
    })

    it('Get A DOM element at a specific index in an array of elements, using .eq()',()=>{
        cy.contains('eBay Motors')
    })

    it('Get the DOM elements that match a specific selector,using .filter("give condition here")',()=>{
        cy.get('ul[id="gh-topl"] li').filter('li[class="gh-t gh-divider-l"]').should('have.length',3)
    })

    it('Get the descendent DOM elements of a specific selector, using .find("selector")',()=>{
        cy.get('div[class="l1s-container"').eq(0).find('a[class="cat-url"]').eq(0)
        .should('have.text','Auto Parts & Accessories')    
    })

    it('Get the first DOM element within a set of DOM elements, using .first()',()=>{
        cy.get('ul[id="gh-topl"] li').first()
        .should('have.attr', 'id',"gh-eb-u")
    })

    it('Get the last DOM element within a set of DOM elements, using .last()',()=>{
        cy.get('ul[id="gh-topl"] li').last()
    })

    it('Get the immediately following sibling of each DOM element within a set of DOM elements, using .next()',()=>{
        // only single immediate next element will be given
        cy.get('ul[class="top-level-cats"] li.active').next()
    })

    it('Get "nextall" following siblings of each DOM element in a set of matched DOM elements, using .nextall()',()=>{
        // all next elements will be given
        cy.get('ul[class="top-level-cats"] li').first().nextAll()
        //assrtion give here
    
    })

    it('"nextuntill", Get all following siblings of each DOM element in a set of matched DOM elements up to, but not including, the element provided.',()=>{
        cy.get('ul[id="gh-eb"] li').first().nextUntil('.gh-eb-li gh-dd rt')
    })

    it('".not("selstor")",excludes DOM element(s) from a set of DOM elements.',()=>{
      cy.get('ul[id="gh-topl"] li').not('li[id="gh-eb-u"]')    
    })

    it('Get the parent DOM element of a set of DOM elements, using .parent()',()=>{
        // note that .parent() only travels a single level up the DOM tree.
    cy.get('li.active').parent()
    })

    it(' Get the parent DOM elements of a set of DOM elements, using .parents()',()=>{
        //  note that .parents() travels multiple levels up the DOM tree as
        cy.get('li.active').parents()
    })

    it('".parentsuntill("selector")",Get all ancestors of each DOM element in a set of matched DOM elements up to, but not including, the element provided.',()=>{
        cy.get('li.active').parentsUntil('div[class="all-cats-container"]')
    })
 
    it('".prev()",Get the immediately preceding sibling of each element in a set of the elements.',()=>{
        //opposit to next method
        cy.get('div[id="electronics"]').prev().should('have.id','business-and-industrial')
    })

    it('".prevall(),Get all previous siblings of each DOM element in a set of matched DOM elements.',()=>{
        //opposite to nextall
        cy.get('div[id="electronics"]').prevAll()
    })

    it('".prevuntill("selector"), Get all previous siblings of each DOM element in a set of matched DOM elements up to, but not including, the element provided.',()=>{
        // opposite to nextuntill
        cy.get('div[id="electronics"]').prevUntil('[id="home-and-garden"]')
    
    })

    it('".siblings(), Get sibling DOM elements.',()=>{
        //all sibling before and after 
        cy.get('div[id="electronics"]').siblings()
    })
    
})






