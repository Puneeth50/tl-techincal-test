/// <reference types="cypress" />

describe('Happy Path Tests', () => {

  const validationError = [{
    Name: 'Name Field validation',
    Error: 'Name is required.'
  },
  {
    Email: 'Email Field Validation',
    Error: 'Email is required.'
  },
  {
    Address: 'Address Field Valdiation',
    Error: 'Address is required.'
  },
  {
    Submit: 'None entered clicked submit',
    Error: 'Name is required. Email is required. Address is required.'
  }

  ]

  context('Open Browser and navigate to homepage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })


    validationError.forEach((data) => {
      it('Field Validation ' + data.Error, () => {
        if (data.Name) {
          cy.get('#email').type('SDET@TL.com')
          cy.get('#address').type('Woking')
        } else if (data.Address) {
          cy.get('#name').type("SDET")
          cy.get('#email').type('SDET@TL.com')
        } else if (data.Email) {
          cy.get('#name').type("SDET")
          cy.get('#address').type('Woking')
        } 
        cy.get('.sc-eCssSg').click();
        cy.get('.sc-gKsewC').contains(data.Error)
      })

    })

  })
})
