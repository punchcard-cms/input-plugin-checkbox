import test from 'ava';
import validation from '../lib/validation';

const empty = {
  target: {
    name: 'checkbox',
    value: '',
  },
};

const input = {
  target: {
    name: 'checkbox',
    value: 'foo bar baz',
  },
  all: {
    checkbox: 'foo bar baz',
  },
};

const settings = {};


// Valid input
test('empty input', t => {
  t.true(validation(empty, settings), 'empty input returns true');
});

test('valid input', t => {
  t.true(validation(input, settings), 'Any input returns true');
});
