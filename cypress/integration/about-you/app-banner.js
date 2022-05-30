describe('Mobile app banner', () => {
    beforeEach(() => {
        cy.visit('')
      })
      
//TODO load url form fixture based on user agent test - app store vs google play 
    it('Banner is visible', () => {
      cy.get('#react-root > div > div > a').eq(0)
      .invoke('attr', 'href').should('eq', 'https://mwpu.adj.st/?adjust_t=5corhcm')            

    })

    it('App link leads to Appstore', function() {
        cy.get('#react-root > div > div > a').eq(0)
        .invoke('attr', 'href').then((appStoreUrl) => {
            cy.request(appStoreUrl).its('status').should('eq', 200)
        })
    })

  })