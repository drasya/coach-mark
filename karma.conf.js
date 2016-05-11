/*eslint-env node*/

const path = require('path');
const cwd = process.cwd();

module.exports = (config) => {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'sinon'],


		plugins: [
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-sinon',
			'karma-sourcemap-loader',
			'karma-webpack'
		],


		// list of files / patterns to load in the browser
		files: [
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'test/*.test.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/*.js': ['webpack', 'sourcemap']
		},


		// webpack preprocessor options
		webpack: {
			quiet: true,
			module: {
				loaders: [
					{
						test: /\.js$/,
						loaders: [
							// Disable AMD module loading
							'imports?define=>false',
							'babel?optional[]=runtime'
						]
					}
				]
			},
			devtool: 'inline-source-map'
		},


		// Hide webpack output logging
		webpackMiddleware: {
			noInfo: true
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true

	});
};
