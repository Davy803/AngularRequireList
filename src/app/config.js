/**
 * Application configuration declaration.
 *
 * This configuration file is shared between the website and the build script so
 * that values don't have to be duplicated across environments. Any non-shared,
 * environment-specific configuration should placed in appropriate configuration
 * files.
 *
 * Paths to vendor libraries may be added here to provide short aliases to
 * otherwise long and arbitrary paths. If you're using bower to manage vendor
 * scripts, running `grunt install` will automatically add paths aliases as
 * needed.
 *
 * @example
 *     paths: {
 *         'jquery': '../vendor/jquery/jquery',
 *         'jquery-cookie': '../vendor/jquery-cookie/jquery-cookie'
 *     }
 *
 * Shims provide a means of managing dependencies for non-modular, or non-AMD
 * scripts. For example, jQuery UI depends on jQuery, but it assumes jQuery is
 * available globally. Because RequireJS loads scripts asynchronously, jQuery
 * may or may not be available which will cause a runtime error. Shims solve
 * this problem.
 *
 * @example
 *     shim: {
 *         'jquery-cookie': {
 *             deps: ['jquery'],
 *             exports: null
 *          }
 *     }
 *
 */

require.config({
    baseUrl: 'app',
    // alias paths for library modules
    paths: {
        // this empty string tells r.js to use single quotes when installing
        // bower modules automatically. Otherwise defaults to double quotes.
        'requirejs': '',
        angular: 'vendor/angular/angular',
        'angular-route': 'vendor/angular-route/angular-route',
        'angular-bindonce': 'vendor/angular-bindonce/bindonce',
        text: 'vendor/requirejs-text/text',
        lodash: 'vendor/lodash/dist/lodash'
    },

    // shim settings for files that are not AMD compliant
    // this tells require.js how to handle non-modular files
    shim: {
        angular: {
            exports: 'angular'/*,
            // only use jquery if you have an absolute need to do so
            // don't forget to add it to bower and the paths config above
            deps: ['jquery'] */
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bindonce': {
            deps: ['angular']
        }
    }
});