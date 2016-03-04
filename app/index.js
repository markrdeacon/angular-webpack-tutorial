const angular = require('angular');

//only load angular-mocks when we are in test mode.  We don't want this library in our production code.
if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

const ngModule  = angular.module('app', []);

//this seems to say 'look inside the directives folder for an index.js file'
require('./directives')(ngModule);
require('./services')(ngModule);
