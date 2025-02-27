/* 2. Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona. */

describe('teste de API', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })
    it('deletar as tarefas', () => {
        cy.get(':nth-child(1) > .view > .toggle').click();
        // cy.get(':nth-child(2) > .view > .toggle').click();
        cy.get('.footer > .todo-button').click();
        cy.get('.todo-list li') // seleciona todos os elementos da classe .todo-list com o <li>
            .should('have.length', 1) // elementos esperados que haja na lista, no caso 1 após a operacao anterior
            .should('not.have.text', 'Pay electric bill') // espera-se que não haja esse elemento
        cy.contains('Clear completed').should('not.exist')
    })
})
