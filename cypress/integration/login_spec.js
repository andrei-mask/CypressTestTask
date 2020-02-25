/// <reference types="cypress" />

describe('Login with valid credentials', () => {

  var profileName = 'Андрей'

  before(function() {
    cy.login()
  })

  it('check if user is logged in', function () {
   cy.get('.top_profile_name').should('contain', profileName)
  })

})
