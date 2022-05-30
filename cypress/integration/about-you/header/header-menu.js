describe('Header menu', () => {

    beforeEach(() => {
        cy.acceptCookies()
        cy.visit('')
    })

    it('Open menu shows correct country and flag', () => {
        cy.get('[data-testid="HeaderMenu"]').click()
        cy.get('[data-testid="languageCountrySwitchSelectedCountryFlag"]')
            //cz img flag
            .invoke('attr', 'srcset')
            .should('eq', 'https://cdn.aboutstatic.com/file/images/24e188d495ddc9b63924839f2f854146.png?quality=75&height=11&width=13 13w')
        // //needs to be improved in case of usage other GEO code/other country 
        cy.get('[data-testid="languageCountrySwitchSelectedCountry_CZ"]').should('have.text', 'CZ')


    })

    it('Country shop selector is present', () => {
        cy.get('[data-testid="HeaderMenu"]').click()
        //needs to be improved in case of usage other GEO code/other country 
        cy.get('[data-testid="languageCountrySwitchSelectedCountry_CZ"]').click()
        cy.get('[data-testid="languageCountrySwitchCountriesOpenerContentLabel-Česká republika"]').click()
        cy.get('[data-testid="languageCountrySwitchFlyoutCountries"] > div a').should('have.length', 27)
        //TODO in the fixture store all languages and urls, then verify in the loop
    })

    // Needs to be clarified and fixed
    it.skip('Menu is closed after click on X', () => {
        cy.get('[data-testid="HeaderMenu"]').click()
        cy.get('[data-testid="userNav"]').should('be.visible')
        /*
        issue - pointer-events: none prevents user mouse interaction
        invoke to auto, force click does not work 
        */
        cy.get('[data-testid="offCanvasCloseIcon"]').click()
    })
})
