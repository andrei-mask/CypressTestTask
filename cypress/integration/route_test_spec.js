/// <reference types="cypress" />

describe('Test route wait',() => {

    it('login', () => {
        cy.server()
        cy.route('POST', '/login').as('login')
        
        cy.login()

        cy.wait('@login').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.method).to.eq('POST')
          })
    })

    it('logout', () => {
        cy.server()
        cy.route('POST', '/logout').as('logout')

        cy.logout()

        cy.wait('@logout').then(function (xhr) {
            expect(xhr.status).to.eq(200)
            expect(xhr.method).to.eq('POST')
          })
    })

})