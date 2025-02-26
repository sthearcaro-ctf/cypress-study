describe('verificação da página de login do cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click({ force: true });
    })

    it('preencher os campos do login incorretamente e exibir mensagem ao usuário', () => {
        cy.login('@errado.com', 'senha-errada');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})