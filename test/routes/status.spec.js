describe('STATUS', () => {
    describe('POST', () => {
        it('Cadastrar Status', (done) => {
            supertest
                .post('/status', {
                    name: "Achado"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('GET', () => {
        it('Listar Status', (done) => {
            supertest
                .get('/status')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('Listar Status pelo Id', (done) => {
            supertest
                .get('/status/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });


    describe('PUT', () => {
        it('Atualizar Status', (done) => {
            supertest
                .put('/status', {
                    _id: "?", //TODO TROCAR
                    name: "Perdido"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('DELETE', () => {
        it('Deletar Status', (done) => {
            supertest
                .delete('/status/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});