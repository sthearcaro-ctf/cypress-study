describe('verificação de imagens no cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click({ force: true });
        cy.login('teste_cyp@gmail.com', 'Senha123');
    })
    it('verificar se as imagens aparecem corretamente na pagina', () => {
        cy.get('.cards').should('be.visible');
    })
})