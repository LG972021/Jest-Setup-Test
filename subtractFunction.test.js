const subtracting = require ('./subtractFunction');

describe ('subtracting', () => {
    test ('Test if 2 numbers are subtracted properly', () => { 
        let actualOutput = subtracting(10,5);
        let expectedOutput = 5;
        expect(actualOutput).toEqual(expectedOutput)

        actualOutput = subtracting(5,2);
        expectedOutput = 3;
        expect(actualOutput).toEqual(expectedOutput)

        actualOutput = subtracting(8,4);
        expectedOutput = 4;
        expect(actualOutput).toEqual(expectedOutput)

        });

    test ('Test if number is returned', () => { 
        let actualOutput = subtracting(10,5);
        let expectedOutput = 5;
        expect(typeof(actualOutput)).toEqual(typeof(expectedOutput))
    
        });

    test ('Test if input is mutated', () => { 
        let input = [10,5];
        let inputAfterInvocation = [10,5];
        subtracting(input[0],input[1]);
        expect(input).toEqual(inputAfterInvocation)
        
        });
});