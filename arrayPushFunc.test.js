const arrayPushFunc = require('./arrayPushFunc');

describe ('arrayPushFunc', () => {

    test ('Test if input is mutated', () => { 
        let input = [10,5,5,1];
        let inputAfterInvocation = [10,5,5,1];
        arrayPushFunc(input)
        expect(input).toEqual(inputAfterInvocation)
        
        });
});