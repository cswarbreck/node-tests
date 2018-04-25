const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');


describe('App', ()=>{
    const db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Cosmo', 28);
        expect(spy).toHaveBeenCalledWith('Cosmo', 28);
    });

    it('should call saveUser with user object', ()=>{
        const email = 'c.swarbreck@gmail.com';
        const password = '12345';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email: email,
            password: password
        });
    });
});