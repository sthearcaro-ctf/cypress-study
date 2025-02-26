describe('verificação da página de login do cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click({ force: true });
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400,
        }).as('stubPost')
    })

    it('verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible');
    })

    it('falhar mesmo com os campos preenchidos corretamente', () => {
        cy.login('teste_ctf3@gmail.com', 'Errada123');
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

    it('preencher os campos do login incorretamente e exibir mensagem ao usuário', () => {
        cy.login('@errado.com', 'senha-errada');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})