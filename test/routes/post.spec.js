describe('POST', () => {
    describe('POST', () => {
        it('Cadastrar Post', (done) => {
            supertest
                .post('/post', {
                    "autor": "453664437",
                    "horario": "2017-09-18T23:22:14.845Z",
                    "descricao": "Teste",
                    "status": 1,
                    "categoria": 1
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('GET', () => {
        it('Listar posts', (done) => {
            supertest
                .get('/post')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('Listar post pelo Id', (done) => {
            supertest
                .get('/post/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });


    describe('PUT', () => {
        it('Atualizar post', (done) => {
            supertest
                .put('/post', {
                    "_id": "?",  //TODO TROCAR
                    "autor": "453664437",
                    "horario": "2017-09-18T23:22:14.845Z",
                    "descricao": "Teste",
                    "status": 1,
                    "categoria": 1
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('DELETE', () => {
        it('Deletar post', (done) => {
            supertest
                .delete('/post/?') //TODO TROCAR
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});