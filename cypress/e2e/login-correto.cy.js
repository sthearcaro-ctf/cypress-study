describe('verificação da página de login do cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click({ force: true });
    })

    it('preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('teste_cyp@gmail.com', 'Senha123');
        cy.get('a.card__contact[aria-label="Falar com responsável"]').eq(1).click();
    })
})