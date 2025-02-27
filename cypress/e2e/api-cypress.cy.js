/* 
2. Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona. 
3. Na página de exemplos do cypress. verifique se a funcionalidade de filtrar tarefas funciona. */

describe('teste de API', () => {
    beforeEach(() => { // esse before funcionará somente 1 vez
        cy.visit('https://example.cypress.io/todo');
    })
    it('deletar as tarefas', () => {
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.get('.footer > .todo-button').click();
        cy.get('.todo-list li') // seleciona todos os elementos da classe .todo-list com o <li>
            .should('have.length', 1) // elementos esperados que haja na lista, no caso 1 após a operacao anterior
            .should('not.have.text', 'Pay electric bill') // espera-se que não haja esse elemento
        cy.contains('Clear completed').should('not.exist')
    })

    it('verificar funcionalidade de filtrar tarefas', () => {
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.get('.filters > :nth-child(3) > a').click();

        cy.get('.todo-list li') // verifica todos os elementos da classe
            .should('have.length', 1) // verifica se há 1 elemento filtrado
            .first() // seleciona o primeiro elemento (no caso o único)
            .should('have.text', 'Pay electric bill') // verifica se esse elemento é walk the dog

        cy.contains('Walk the dog').should('not.exist') // verifica se esse elemento nao está lá (pois nao foi concluido)

    })
})
