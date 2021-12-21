import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('user is on Login Page',()=>{

    cy.visit('https://independent.co.uk/',{failOnStatusCode: false});
})
When  ('user enters username and password',()=>{

    cy.get('input[name="loginEmail"]')
        .type("ravi14.korrai@gmail.com")
        .should("have.value", "ravi14.korrai@gmail.com")
  
      cy.get('input[name="password"]')
        .type("Cypress4001")
        .should("have.value", "Cypress4001")
})
Then ('user clicks on login button',()=>{
    cy.get('button[name="submitBtn"]').submit()

})
Then('user is on home Page',()=>{
    cy.title().should('eq', 'Profile')
})