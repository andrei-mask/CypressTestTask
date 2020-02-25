describe('test messages section', () => {

    var expectedListLength = 2
    before(() => {
      cy.login()
    })

    it('open messages', () => {
      cy.get('#l_msg > .left_row > .left_fixer > .left_label').click()
    })

    it('check the list of messages', () => {
      cy.get('ul > li').should('have.length', expectedListLength)
      .each(function($el){
        cy.wrap($el).should('be.visible')
                    .and('have.attr', 'data-list-id')
      })
    })   
  })