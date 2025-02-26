describe('Api Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTZkNGM4NC1lMTgxLTQzNjAtYWZhMy1mY2Y3ZTI4MzJjYTEiLCJhZG9wdGVyTmFtZSI6Ik5vbWUgdGVzdGUiLCJpYXQiOjE3NDA1ODg1NDEsImV4cCI6MTc0MDg0Nzc0MX0.G7yK1TWzjtyq8wczJ_Yi22Z3HrW-5EFOniSrgxccCJE'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET', // pois iremos solicitar dados da API
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/656d4c84-e181-4360-afa3-fcf7e2832ca1',
            headers: { authorization }
        }).then((response) => {
            expect(response.status).to.equal(200); // Verifica se o status é 200 (OK) - sucesso da API
            expect(response.body).is.not.empty; // para que o body não seja vazio
            expect(response.body).to.have.property('msg'); // Verifica se a resposta tem uma propriedade 'msg'
        });

    })
})