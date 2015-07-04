// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-03-25 using
// generator-karma 0.9.0


module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'fixture'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/angular/angular.js',
            'app/vendor/bootstrap/dist/js/bootstrap.js',
            'app/vendor/angular-resource/angular-resource.js',
            'app/vendor/angular-ui-router/release/angular-ui-router.js',
            'app/vendor/string-formatter/string-formatter.js',
            'app/vendor/angular-toastr/dist/angular-toastr.tpls.js',
            'app/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
            'app/vendor/ngprogress/build/ngProgress.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            // endbower
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'test/spec/**/*.js',

            {
                pattern: 'test/spec/fixtures/*.json',
            }

        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-fixture',
            'karma-html2js-preprocessor',
            'karma-json-fixtures-preprocessor',
        ],

        preprocessors: {
            '**/*.html': ['html2js'],
            '**/*.json': ['json_fixtures']
        },

        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'

    });

    
};
