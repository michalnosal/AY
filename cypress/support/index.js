// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Random fail on cross origin from website API request - home page
Cypress.on('uncaught:exception', (err) => {
    expect(err.message).to.include('Cypress detected that an uncaught error was thrown from a cross origin script')
    return false
  })
// ResizeObserver loop limit exceeded - search box
  Cypress.on('uncaught:exception', (err) => {
    expect(err.message).to.include('ResizeObserver loop limit exceeded')
    return false
  })
