/*
1. Faça uma request para a API do AdoPet com um usuário autenticado e verifique se, ao acessar a página de /perfil, há o nome do usuário em sua resposta.
*/
describe('API Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkNGM4NC1lMTgxLTQzNjAtYWZhMy1mY2Y3ZTI4MzJjYTEiLCJhZG9wdGVyTmFtZSI6Ik5vbWUgdGVzdGUiLCJpYXQiOjE3NDA1ODg1NDEsImV4cCI6MTc0MDg0Nzc0MX0.G7yK1TWzjtyq8wczJ_Yi22Z3HrW-5EFOniSrgxccCJE'

    it('verificar nome no perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/31dc7acc-12f0-4647-9593-4994e26eeb13',
            headers: { authorization }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.perfil.nome).to.be.equal('Nome teste');
        })

        // teste para saber a propriedade
        cy.request('GET', 'https://adopet-api-i8qu.onrender.com/adotante/perfil/31dc7acc-12f0-4647-9593-4994e26eeb13').then((response) => {
            cy.log(response.body);
        });

    })
})