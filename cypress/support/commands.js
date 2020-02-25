// <reference types="cypress" />

Cypress.Commands.add('login', () => {

    var testEmail, testPassword

    cy.fixture('users.json').as('users')

    cy.get('@users').then((users) => {
      // get the valid user
      const testUser = users[0]
      testEmail = testUser.email
      testPassword = testUser.password

    cy.visit('/')
    cy.get('#index_email')
      .type(testEmail).should('have.value', testEmail)
    cy.get('#index_pass')
      .type(testPassword).should('have.value', testPassword)  
    cy.get('#index_login_button').click()
  
    })    
})

Cypress.Commands.add('getUserPageHeader', () => {

    cy.fixture('users.json').as('users')

    cy.get('@users').then((users) => {
      // get the valid user
      const testUser = users[0]
      var userName = testUser.name
      console.log(userName)
      return userName //+ ' ' + testUser.surname
    })    
})