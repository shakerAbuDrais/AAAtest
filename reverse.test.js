const reverseString = require('./reverseString');

test('test two', () => {
    expect(reverseString('shaker')).toMatch(/rekahs/);
  });