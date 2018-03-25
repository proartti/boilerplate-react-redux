/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Boilerplate React Redux',
    titleTemplate: 'Boilerplate React Redux - %s',
    meta: [
      {
        name: 'description',
        content: 'Boilerplate for React v16 - starter with some cool stuff.'
      }
    ]
  }
};
