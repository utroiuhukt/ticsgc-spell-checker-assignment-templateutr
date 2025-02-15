const { CoolCalculus } = require('./main'); // Import the function to test

test('test the CoolCalculus', () => {

    expect(CoolCalculus()).toBe(84); // Test the function
});