require([
    'angular',
    'list-view/index',
    'components/index',
], function (ng, app) {
    'use strict';
    
    ng.bootstrap(document, ['listApp', 'filtersModule']);
});