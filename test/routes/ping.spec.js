describe('Ping', () => {
    describe('GET', () => {
        it('Responder 204', (done) => {
            supertest
                .get('/ping')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(204, done);
        });
    });
});