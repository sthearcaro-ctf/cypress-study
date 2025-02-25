/*
1. Refatore os testes já realizados aplicando o método beforeEach().
2. Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
3. Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
4. Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
5. Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login. 
*/

describe('Testes na página inicial pelo cypress', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('verificação se o título é igual a "AdoPet"', () => {
        cy.title().should('eq', 'AdoPet');
    })

    it('verificação do texto "Quem ama adota!"', () => {
        cy.contains('Quem ama adota!');
    })

    it('verificação de texto presente no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!');
    })

    it('teste de login seguindo outro fluxo', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('teste_cyp@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})