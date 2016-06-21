'use strict';

/**
 * checkbox Input Plugin
 *
 *
 * An input plugin with multiple checkboxes
 */
const validation = require('./lib/validation.js');

/**
 * Single checkbox Input Plugin
 * @module checkboxInputPlugin
 */
module.exports = {
  name: 'checkbox',
  description: 'An input plugin with multiple checkboxes',
  validation: {
    checkboxValidation: validation,
  },
  inputs: {
    checkbox: {
      validation: {
        function: 'checkboxValidation',
        on: 'change',
      },
      type: 'checkbox',
      label: 'Select from the following',
      options: [
        { label: 'red',
          value: 'red',
        },
        { label: 'blue',
          value: 'blue',
        },
        { label: 'green',
          value: 'green',
        },
        { label: 'yellow',
          value: 'yellow',
        },
      ],
      settings: {
        empty: false,
      },
    },
  },
  html: '{% for option in checkbox.options %}<label for="{{checkbox.id}}--{{option.index}}"><input type="{{checkbox.type}}" name="{{checkbox.name}}" id="{{checkbox.id}}--{{option.index}}" value="{{option.value}}" {% if option.value == checkbox.value %}checked{% endif %}>{{option.label}}</label>{% endfor %}',
};
