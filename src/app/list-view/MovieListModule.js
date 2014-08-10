define(function (require) {
    'use strict';

    var angular = require('angular');
    require('angular-route');

    /**
     * Home Module
     * @name app.home
     * @requires 'angular-route'
     */
    var app = angular.module('listApp', [
        'ngRoute', 'filtersModule'
    ]);

    /**
     * @requires MovieListTemplate.html
     */
    var listControllerTemplate = require('text!./MovieListTemplate.html');

    /**
     * Home module configuration
     *
     * ### Routes
     *
     * The home module utilizes the following routes:
     *
     *  - '/'
     *    - Controller: MovieListController.js
     *    - Template: MovieListTemplate.html
     *
     */
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: listControllerTemplate,
                controller: 'MovieListController'
            });
    });

    return app;
});