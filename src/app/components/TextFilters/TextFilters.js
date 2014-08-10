define(function(require) {

    var app = require('../FiltersModule');

    app.filter('lowerCamelCase', function() {
        return function(input) {
            input = input || '';

            var split = input.split(' ');

            var outArray = [];

            for (var i = 0; i < split.length; i++) {
                var word = split[i];
                var firstLetter = word.charAt(0);
                var casedFirstLetter = i === 0 ? firstLetter.toLowerCase() : firstLetter.toUpperCase();

                var casedWord = casedFirstLetter + word.slice(1);
                outArray.push(casedWord);
            }

            var out = outArray.join('');

            return out;
        };
    });
});