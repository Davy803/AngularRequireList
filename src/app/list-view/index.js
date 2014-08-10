define(function (require) {
    'use strict';

    var app = require('./MovieListModule');
    require('./MovieListController');
    require('./MovieListDirectives');

    return app;
});