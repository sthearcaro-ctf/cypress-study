describe('verificação da página inicial do cypress', () => {
  it('teste cadastro e login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click({ force: true });
    cy.get('input[name="nome"]').type('Nome teste');
    cy.get('input[name="email"]').type('teste_cyp3@gmail.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click({ force: true });

  })
})