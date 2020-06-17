/// <reference types="cypress" />
export {};

describe('Test Search Page', () => {
  beforeEach(() => {
    cy.visit('/search');
  });
  it('has a search form', () => {
    cy.get('form').type('world population').should('contain', 'Search');
  });
  it('should return a search result', () => {
    cy.get('form').find('[type="text"]').type('world population');
    cy.get('form').submit();
    cy.url().should('include', 'search?q=world%20population&sort=');
    cy.get('.text-3xl').should('have.text', '1 results found');
    cy.get('.text-xl > .text-primary').should('have.text', 'World Population');
  });
});
