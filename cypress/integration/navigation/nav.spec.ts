/// <reference types="Cypress" />

describe('nav', () => {
  it('should open dashboard', () => {
    cy.visit('http://localhost:4200');
    cy.wait(1000);
    cy.url().should('include', '/dashboard');
  });
});
