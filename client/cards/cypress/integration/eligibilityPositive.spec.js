/// <reference types="cypress" />

describe('Happy Path Tests', () => {

  const testData = [
    {
      name: 'Boris',
      card: 'C1'
    },
    {
      name: 'Angela',
      card: 'C1,C2'
    },
    {
      name: 'Theresa',
      card: 'C2'
    }
  ]

  context('Open Browser and navigate to homepage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    testData.forEach((data) => {
      let actual = []
      let expected = data.card.split(',')
      it('Eligibility check happy Path ', () => {
        cy.get('#name').type(data.name)
        cy.get('#email').type('SDET@TL.com')
        cy.get('#address').type('Woking')
        cy.get('.sc-eCssSg').click();
        cy.get('.sc-pFZIQ .sc-fubCfw')
          .each($value => {
            actual.push($value.text())
          }).then(() => assert.sameMembers(actual, data.card.split(',')))
      })

    })

    it('Not eligible person applied for credit card', () => {
      cy.get('#name').type("SDET_Puneeth")
      cy.get('#address').type('Woking')
      cy.get('#email').type('SDET@TL.com')
      cy.get('.sc-eCssSg').click();
      cy.get('.sc-pFZIQ > .sc-jSgupP').contains("Unfortunately you're not eligible for any cards")
    })

    it('Page label validation', () => {
      cy.get('#name').invoke('attr', 'placeholder').should('contain', 'Name')
      cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Email')
      cy.get('#address').invoke('attr', 'placeholder').should('contain', 'Address')
      cy.get('.sc-eCssSg').contains('Submit')
      cy.get('.sc-pFZIQ > .sc-jSgupP').contains('Please submit your application to check new cards eligibility')
    })

  })



})
