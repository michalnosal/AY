// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('search', (keyword) => {
    cy.get('[data-testid="searchInputText"]').type(keyword)
})

Cypress.Commands.add('LoadPageWithAccepteCookies', () => {
    cy.setCookie('OptanonAlertBoxClosed', '2022-05-23T20:04:24.224Z')
    cy.visit('')
})

Cypress.Commands.add('openSearch', () =>{
    cy.get('[data-testid="HeaderSearch"]').click()
})

Cypress.Commands.add('getSearchPlaceholder', () => {
    return cy.get('[data-testid="searchInputText"]')
    .invoke('attr', 'placeholder')
})

Cypress.Commands.add('getSuggestedTerms', () => {
    return cy.get('[data-testid="SearchTermSuggestions"] > div > a')
})
