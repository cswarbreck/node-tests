const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('GET', ()=>{

    it('should return hello world as a response', (done)=>{
        request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error: 'Page not found'
            });
        })
        .end(done)
    });
    

    describe('GET / #users', ()=>{
        it('should return the user object', (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    name: 'Cosmo',
                    age: 28
                });
            })
            .end(done)
        });
    });
    


});

