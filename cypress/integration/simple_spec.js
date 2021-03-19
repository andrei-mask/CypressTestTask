describe('My First Test', () => {

    it('test login page', () => {
        cy.visit('/')
        cy.get('amplify-sign-in.hydrated').shadow()
            .find('amplify-form-section.hydrated > amplify-auth-fields.hydrated').shadow()
            .find('amplify-username-field.hydrated').shadow()
            .find('amplify-form-field.hydrated').shadow()
            .find('input#username').type('_')
        cy.get('amplify-sign-in.hydrated').shadow()
            .find('amplify-form-section.hydrated > amplify-auth-fields.hydrated').shadow()
            .find('amplify-password-field.hydrated').shadow()
            .find('amplify-form-field.hydrated').shadow()
            .find('input#password').click().type('_')
        cy.get('amplify-sign-in.hydrated').shadow()
            .find('div.sign-in-form-footer').find('slot[name=primary-footer-content]')
            .find('span').click()

        cy.get('.radzima').contains('Radzima Admin')
    }) 
    
    it('test categories endpoint', () => {
        cy.request('http://ecsc00a0916b.epam.com:3001/api/v1/category').as('categories')

        // other test code here

        cy.get('@categories').should((response) => {
            expect(response.status).to.eq(200)
            if (response.status === 200) {
                expect(response).to.have.property('duration')
            } else {
                // whatever you want to check here
            }
        })
    })

    it('test categories endpoint 2', () => {
        cy.request('http://ecsc00a0916b.epam.com:3001/api/v1/category')
            .its('body') // yields the response object
            .should('be.an', 'array')
            .and('have.length', 4)
            .its('0') // yields the first element of the returned list
            // the above two commands its('body').its('0')
            // can be written as its('body.0')
            // if you do not care about TypeScript checks
            .then((category) => {
                //expect(category).property('name').to.equal('Заповедные территории')
            })

    })
    
})