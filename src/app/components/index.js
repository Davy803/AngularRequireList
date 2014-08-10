define(function (require) {
    'use strict';

    var app = require('./TextFilters/TextFiltersModule');

    require('./TextFilters/TextFilters');

    return app;
});