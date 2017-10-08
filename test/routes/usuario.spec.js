describe('USUARIO', () => {
    describe('POST', () => {
        it('Cadastrar Usuarios', (done) => {
            supertest
                .post('/status', {
                    "nome": "Antonio2",
                    "ra": "45364437SP",
                    "email": "2@1.com.br",
                    "senha": "123"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('GET', () => {
        it('Listar Usuarios', (done) => {
            supertest
                .get('/status')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('Listar Usuarios pelo Id', (done) => {
            supertest
                .get('/status/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });


    describe('PUT', () => {
        it('Atualizar Usuarios', (done) => {
            supertest
                .put('/status', {
                    "_id": "",
                    "nome": "Antonio2",
                    "ra": "45364437SP",
                    "email": "2@1.com.br",
                    "senha": "123"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('DELETE', () => {
        it('Deletar Usuario', (done) => {
            supertest
                .delete('/status/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});