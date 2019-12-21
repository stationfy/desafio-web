describe('Functionalities tests', () => {
  it('Should appear repos', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Repositories fetched')
      .should('be.visible');

    cy.contains('freeCodeCamp')
      .should('be.visible');
  });

  it('Should go to pull page when clicked in link', () => {
    cy.contains('freeCodeCamp')
      .click()

    cy.contains('Pull Requests fetched')
      .should('be.visible');

    cy.contains('update congratulatory quotes')
      .should('be.visible')
  });

  it('Should go to home page when clicked in link', () => {
    cy.get('path')
      .click()

    cy.contains('Repositories fetched')
      .should('be.visible');

    cy.contains('freeCodeCamp')
      .should('be.visible')
  });
});
