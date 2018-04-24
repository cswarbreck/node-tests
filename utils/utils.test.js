const utils = require('./utils');

it('should add two numbers', ()=>{
    var res = utils.add(33, 11);
    
    if (res !== 44) {
        throw new Error(`Expected 44, but you got ${res}`)
    }else{
        console.log('Well done, good job buddy!');
    }
});

it('should square two numbers', ()=>{
    var res = utils.square(2);

    if (res !== 4){
        throw new Error(`Expected 4, but got ${res}`)
    }else{
        console.log('Wow, ur so good a mathfs');
    }
});

it('should cube the number', ()=>{
    var res = utils.cube(3);

    if (res !== 27){
        throw new Error(`Expected 27, but got ${res}`);
    }
});