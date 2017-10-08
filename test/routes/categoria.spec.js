describe('CATEGORIA', () => {
    describe('POST', () => {
        it('Cadastrar Categoria', (done) => {
            supertest
                .post('/categoria', {
                    name: "Achado"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('GET', () => {
        it('Listar Categorias', (done) => {
            supertest
                .get('/categoria')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('Listar Categoria pelo Id', (done) => {
            supertest
                .get('/categoria/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });


    describe('PUT', () => {
        it('Atualizar Categoria', (done) => {
            supertest
                .put('/categoria', {
                    _id: "?", //TODO TROCAR
                    name: "Perdido"
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('DELETE', () => {
        it('Deletar Categoria', (done) => {
            supertest
                .delete('/categoria/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});