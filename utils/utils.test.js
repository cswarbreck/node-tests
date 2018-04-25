const utils = require('./utils');

const expect = require('expect');

describe('Utils', ()=>{

    it('should add two numbers', ()=>{
        var res = utils.add(33, 11);
    
        expect(res).toBe(44).toBeA('number');
        
        /* if (res !== 44) {
            throw new Error(`Expected 44, but you got ${res}`)
        }else{
            console.log('Well done, good job buddy!');
        } */
    });
    
    it('should async add two numbers', (done)=>{
        utils.asyncAdd(4, 3, (sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square two numbers', ()=>{
        var res = utils.square(2);
    
        expect(res).toBe(4).toBeA('number');
    
    /*     if (res !== 4){
            throw new Error(`Expected 4, but got ${res}`)
        }else{
            console.log('Wow, ur so good a mathfs');
        } */
    });
    
    it('should async square two numbers', (done)=>{
        utils.asyncSquare(4, (square)=>{
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });
    
    it('should cube the number', ()=>{
        var res = utils.cube(3);
    
        if (res !== 27){
            throw new Error(`Expected 27, but got ${res}`);
        }
    });
    
    /* it('should verify first and last names are set', ()=>{
        var user = {location: 'London', age: 28};
        var res = utils.setName(user, 'Cosmo Swarbreck');
        
        expect(res).toInclude({
            firstName: 'Cosmo',
            lastName: 'Swarbreck'
        });
    }); */

});

