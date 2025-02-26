describe('verificação da página inicial do cypress', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click({ force: true });

  })

  it('preencher os campos corretamente para realizar cadastro', () => {
    cy.cadastro('Nome teste', 'teste_cyp4@gmail.com', 'Senha123');

  })
})