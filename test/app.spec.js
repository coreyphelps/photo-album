const {start} = require('../src/app.js');

describe('app', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    test('should call console.log', () => {
        start();

        expect(console.log).toHaveBeenCalledTimes(1);
    })
})
