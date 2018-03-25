/* @flow */
/* eslint-disable global-require */
const merge = require('lodash/fp/merge');

const defaultConfig = require('./default');

module.exports = merge(defaultConfig, {
  // Overwrite default settings here...
});
