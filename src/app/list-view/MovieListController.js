define(function (require) {
    'use strict';

    var _ = require('lodash');
    var app = require('./MovieListModule');
    var helper = require('./SortAndFilterHelper');
    /**
     * List Module Controller
     *
     * @class MovieListController
     */
    app.controller(
        'MovieListController',
        /**
         * List Controller Constructor
         *
         * @constructor
         */
        function ($scope, $http) {
            var allMovies = [];

            $scope.movies = [];
            $scope.sort = 'critic-desc';
            $scope.limit = 10;

            //Load initial movie list
            $http.get('assets/data/movies.json').success(function (data) {
                allMovies = data.movies;
                $scope.updateView();
            });

            $scope.updateView = function() {
                var split = $scope.sort.split('-');

                var sortType = split[0];
                var reverseSort = split[1] === 'desc';

                var limit = parseInt($scope.limit);

                $scope.movies = helper.sortAndFilter(allMovies, sortType, reverseSort, limit);
            }
        }
    );

});