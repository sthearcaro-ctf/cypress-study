describe('verificação da página inicial do cypress', () => {
  it('teste cadastro e login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    /* 
    Realizado em vídeo aula - cadastro   
  
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Nome teste');
    cy.get('input[name="email"]').type('teste_cyp@gmail.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();*/

    // exercício de login
    cy.contains('a', 'Ver pets disponíveis para adoção');
    cy.get('a.header__home[aria-label="Tela inicial"]').click();
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('input[name="email"]').type('teste_cyp@gmail.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.contains('button', 'Entrar').click();
    cy.get('a.card__contact[aria-label="Falar com responsável"]').eq(1).click();
  })
})