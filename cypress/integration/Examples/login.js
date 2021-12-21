
    describe('My Login page', function() 
{

    it('Login page details', function() {
      cy.visit('https://independent.co.uk/',{failOnStatusCode: false});

      cy.get('input[name="loginEmail"]')
        .type("ravi14.korrai@gmail.com")
        .should("have.value", "ravi14.korrai@gmail.com")
  
      cy.get('input[name="password"]')
        .type("Cypress4001")
        .should("have.value", "Cypress4001")
  

      cy.get('button[name="submitBtn"]').submit()
    })
  })