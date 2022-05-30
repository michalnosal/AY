/// <reference types="cypress" />
describe('Cookie banner', () => {
  
  beforeEach(() => {
    cy.visit('')
  })

    it('On accept - benner is closed', () => {
      cy.get('#onetrust-banner-sdk').should('be.visible')            
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('#onetrust-banner-sdk').should('not.be.visible')
      // multiple buttons there, maybe better selector is possible to find it exact
      cy.get('[data-testid="cardCTA1"]').eq(0).should('be.visible')  
      //TODO check what cookie name/value is responsible for accept/reject cookies  
    })

    it.skip('Rejetc cookies', () => {
      //TODO click on reject, check stored settings 
    })

    it.skip('Cookies with custom settings', () => {
      //TODO select specified cookies, check stored settings
    })

    // No way to update current settings? Based on https://www.aboutyou.cz/ochrana-dat -> 3.4.1 Cookies – Všeobecné informace
  })
