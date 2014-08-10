define(function (require) {
    var _ = require('lodash');

    var helper =  {
        sortAndFilter: function (allMovies, sortType, reverseSort, limit) {
            var movies = _.clone(allMovies);
            var sort = this.nullSort;
            var filter = this.nullFilter;

            switch (sortType) {
                case 'critic':
                    sort = this.criticSort;
                    filter = this.criticFilter;
                    break;
                case 'audience':
                    sort = this.audienceSort;
                    filter = this.audienceFilter;
                    break;
                case 'theater':
                    sort = this.theaterSort;;
                    break;
            }

            movies = _.filter(movies, filter);
            movies = _.sortBy(movies, sort);

            if (reverseSort) {
                movies = movies.reverse();
            }

            movies = _.first(movies, limit);

            return movies;
        },

        nullSort: _.noop,

        nullFilter: function (movie) {
            return true;
        },

        criticSort: function (movie) {
            var score = parseInt(movie.ratings.criticsScore);
            return score;
        },

        audienceSort: function (movie) {
            var score = parseInt(movie.ratings.audienceScore);
            return score;
        },

        theaterSort: function (movie) {
            var score = new Date(movie.releaseDates.theater).getTime();
            return score;
        },

        criticFilter: function (movie) {
            return movie.ratings.criticsRating;
        },

        audienceFilter: function (movie) {
            return movie.ratings.criticsRating && movie.ratings.audienceRating;
        }
    };

    //Bind "this" for all functions
    for (var func in helper) {
        var helperFunction = helper[func];
        if (_.isFunction(helperFunction)) {
            helper[func] = helperFunction.bind(helper);
        }
    }

    return helper;
});