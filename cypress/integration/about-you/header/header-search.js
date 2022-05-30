
describe('Header search', () => {
    
    beforeEach(() => {
        cy.LoadPageWithAccepteCookies()
    })

    it('Search keyword shows suggestions', () => {
        cy.openSearch()
        //TODO localized string load from fixture 
        cy.getSearchPlaceholder().should('eq', 'Hledání podle značek, produktů a dalších…')
        /*
         repeating error there afte test execution, looks like random appearance also on other pages
         POST https://o79970.ingest.sentry.io/api/5672155/store/?sentry_key=efed0119cc044cfaa0283ccd0ba449db&sentry_version=7 
         429 (Too Many Requests)
        */

        //TODO based on keyword maybe we can get more info (maybe from API) about expected suggestion category,producst,...
        //     then load it from fixture with related data, e.g. no categories 
        cy.search('boty')        
        // Categories
        cy.getSuggestedTerms().each((elm) => {
            cy.wrap(elm).find('[data-testid="CategorySuggestionItemCount"]').invoke('text').then(parseInt).should('be.gte',1)
            //TODO trim value, remove curerncy
            //cy.wrap(elm).find('[data-testid="ProductSuggestionItem"]').invoke('text')
        })       
    })

    // TODO With additional tests for basket extract elements to custom commands
    // TODO2 Same test but for US size 
    it('Buy shoes suggested on 1st place via search keyword ', function() {
        cy.openSearch()
        cy.search('boty')
        cy.get('[data-testid="ProductSuggestionItem"]').eq(0).click()
        cy.get('[data-testid="finalPrice"]').invoke('text').as('price')
        cy.get('[data-testid="addToBasketButton"]').click()
        cy.get('[data-testid="tabs_tab_1"]').click()
        // Maybe we can use string for select instead of list index, sizes are same per countries/regions - EU, US 
        cy.get('[data-testid="sizeList"]> li').eq(1).click()
        cy.get('[data-testid="continueShoppingButton"]').click()
        // TODO localized text will not work in other language
        cy.get('[data-testid="addToBasketButton"] > span > span').invoke('text').should('eq', 'Již v košíku')
        cy.get('[data-testid="HeaderBasket"]').click()
        cy.get('[data-testid="basketTotalProducts"]').invoke('text').should('contain', '(1)')
        cy.get('[data-testid="basketTotalPrice"]').invoke('text').then((val) => {
            expect(val).to.eq(this.price)
        })
        cy.get('[data-testid="CheckoutButton"]').eq(0).click()
        //account login, push data via API 
    })
})
