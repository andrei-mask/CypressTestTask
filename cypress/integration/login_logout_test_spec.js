/// <reference types="cypress" />

describe('Login with valid credentials', () => {

  before(function() {
    cy.login()
  })

  it('check if user is logged in', () => {
    cy.get(':nth-child(7) > .w-75 > .text-info').should('contain', 'Medinsky')
  })

  it('check if user is logged out', () => {
    cy.logout()
    cy.url().should('contain','/login')
  })

})
