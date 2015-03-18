/*
 * Start up application.
 */
require('dotenv').load();
require('./setup');
var app = require('./app');
var environment = require('./config/environment');

module.exports = app.listen(environment.port);
console.log('Application started on port', environment.port);
