/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
describe('My Registration Page', function() 
{

    it('Registration', function() {
      cy.visit('https://independent.co.uk/',{failOnStatusCode: false});
    
      cy.contains('Login').click();
      cy.get('registerLink').click()
      cy.get('#reg-form-email').type('ravi14.korrai14@gmail.com').should("have.value", "ravi14.korrai@gmail.com")
      cy.get('#reg-form-firstname').type('ravi').should("have.value", "ravi")
      cy.get('#reg-form-lastname').type('babuu').should("babuu")
      cy.get('#reg-form-birth-year').select('1990').should("have.value", "1990")
      cy.get('#reg-form-password').type('Cypress4001').should("have.value", "Cypress4001")
      cy.get('.sc-OWsPe.sc-gqdbEV.jVVhml.iCLmsh.form-submit').click()

     
    })

}) 