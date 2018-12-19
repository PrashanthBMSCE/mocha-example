const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server', () => {
    describe('route/', () => {
        it('should return hello world', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('hello world')
                .end(done)
        })

        describe('GET/users', () => {

            it('should return user obj', (done) => {
                request(app)
                    .get('/users')
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).toInclude({
                            name: 'Andrew',
                            age: 25
                        })
                    })
                    .end(done)
            })

        })


    })
})



