define(function (require) {
    'use strict';

    var app = require('./MovieListModule');

    var movieTemplate = require('text!./MovieTemplate.html');

    app.directive('movie', function() {
        return {
            replace: false,
            scope: {
                movie: '='
            },
            template: movieTemplate
        };
    });

});