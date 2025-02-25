describe('verificação da página de login do cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click({ force: true });
    })

    it('preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('input[name="email"]').type('teste_cyp@gmail.com');
        cy.get('input[name="password"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.get('a.card__contact[aria-label="Falar com responsável"]').eq(1).click();
    })
})