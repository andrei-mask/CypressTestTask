/// <reference types="cypress" />

describe('Test admin section', () => {

    var expectedListLength = 6

    before('setUp', () => {
      cy.login()
    })

    it('open admin panel', () => {
      cy.get('#mat-tab-label-0-2').should('contain', 'ADMIN PANEL').click()
    })

    // this test demonstrates how to interact with a group of elements
    it('check the list of users', () => {
      cy.get('app-user-list-chevron.d-flex > .d-flex').click()
      cy.get('.search-results-container').children() 
          .should('have.length', expectedListLength)
          .each(($el) => {
              cy.wrap($el).should('exist')
                          .and('have.attr', 'class')
              cy.wrap($el).get('div').should('contain', ' Name: ')
          })
    })   

    after('tearDown', () => {
      cy.logout()
    })

  })