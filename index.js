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
    },
  },
  html: '<ul>{% for option in checkbox.options %}<li><input type="{{checkbox.type}}" name="{{checkbox.name}}" id="{{checkbox.id}}--{{loop.index}}" value="{{option.value}}" {% if checkbox.value %}{% if option.value in checkbox.value %}checked{% endif %}{% endif %}><label for="{{checkbox.id}}--{{loop.index}}">{{option.label}}</label></li>{% endfor %}</ul>',
};
