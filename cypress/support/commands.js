// <reference types="cypress" />

Cypress.Commands.add('login', () => {

    var testUsername, testPassword

    cy.fixture('users.json').as('users')

    cy.get('@users').then((users) => {
      // get the valid user
      const testUser = users[0]
      testUsername = testUser.username
      testPassword = testUser.password

    // I know that best practice is use API call for login
    cy.visit('/')
    cy.get('#mat-input-0')
      .type(testUsername).should('have.value', testUsername)
    cy.get('#mat-input-1')
      .type(testPassword).should('have.value', testPassword)  
    cy.get('.mb-2 > .mat-primary').click()
    })   
})

Cypress.Commands.add('logout', () => {

  cy.get('#mat-tab-label-0-3').click()
  cy.get('.mat-flat-button').contains('Logout').click()
  cy.get('.mat-button-wrapper').contains('Yes, logout').click()
  
})