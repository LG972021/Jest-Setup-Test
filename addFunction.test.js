const adding = require ('./addFunction');

describe ('adding', () => {
test ('Test if 2 numbers are added together correctly', () => {
    let actualOutput = adding(2,5);
    let expectedOutput = 7;
    expect(actualOutput).toEqual(expectedOutput)

    actualOutput = adding(4,4);
    expectedOutput = 8;
    expect(actualOutput).toEqual(expectedOutput)

    actualOutput = adding(4,2);
    expectedOutput = 6;
    expect(actualOutput).toEqual(expectedOutput)

    });
});