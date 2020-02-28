/// <reference types="cypress" />

describe('Test user search', () => {

    var targetUserName = 'Somebody'
    
    before('setUp', () => {
        cy.login()
    })

    it('search user', () => {
        cy.get('#mat-tab-label-0-2').should('contain', 'ADMIN PANEL').click()
        cy.get('app-user-list-chevron.d-flex > .d-flex').click()
        cy.get('app-search-field.d-flex > .d-flex').type(targetUserName + '{enter}')
        
        cy.get('.ng-star-inserted > .d-flex').get('.first-col > :nth-child(1) > .text-primary')
            .should('contain', targetUserName)
    })  

    after('tearDown', () => {
        cy.logout()
    })
})