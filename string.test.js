const string = require('./string');

test('check if user entered a string', () => {
  if (string() > 10 || string() === 0) {
    throw new Error ('please enter a string less than 10')    
  }
});

