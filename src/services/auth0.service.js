const auth0 = require('auth0-js');
const config = require('../config/config');

const auth = new auth0.WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  scope: config.auth0.scope,
  responseType: config.auth0.responseType,
});
console.log('auth', auth);
module.exports = { auth };
