// Karma configuration

module.exports = function(config) {
    var APP_ROOT_PATH = 'app/';
    var NODE_MODULES_ROOT_PATH = 'node_modules/';

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            /* External dependencies */
	    NODE_MODULES_ROOT_PATH + 'angular/angular.min.js',
            NODE_MODULES_ROOT_PATH + 'angular-mocks/angular-mocks.js',
            NODE_MODULES_ROOT_PATH + 'jquery/dist/jquery.min.js',
            NODE_MODULES_ROOT_PATH + 'angular-ui-router/release/angular-ui-router.min.js',
            NODE_MODULES_ROOT_PATH + 'jsbarcode/dist/barcodes/JsBarcode.code39.min.js',
            NODE_MODULES_ROOT_PATH + 'js-base64/base64.min.js',
            NODE_MODULES_ROOT_PATH + 'node-uuid/uuid.js',

            APP_ROOT_PATH + 'app.js',
            APP_ROOT_PATH + '**/*-module.js',
            APP_ROOT_PATH + '**/*.js', {
                pattern: 'tests/unit/**/*-spec.js',
                pattern: 'tests/unit/**/example.js',
                included: true
            }
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
       preprocessors: {
            'app/**/*.js': ['coverage']
        },

        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'target/test-coverage/'
            }, {
                type: 'lcov',
                dir: 'target/test-coverage/',
                subdir: 'report-lcov'
            }]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html', 'coverage', 'lcov'],

        htmlReporter: {
            outputFile: 'target/unit-result.report.html',
            //Optional
            pageTitle: 'Unit Tests'
        },
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });

};
