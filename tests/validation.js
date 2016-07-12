import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'checkbox',
    value: 'foo bar baz',
  },
  all: {
    checkbox: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    checkbox: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
