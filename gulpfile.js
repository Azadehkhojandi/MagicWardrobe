"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS

var config = {
	port: 9005,
	url: 'http://localhost',
	html: './**/*.html',
	js: './**/*.js',
	}


gulp.task('connect', function() {
  connect.server(
  	{
  		port: config.port,
		base: config.url,
		livereload: true
  	});
});
gulp.task('html', function() {
	gulp.src(config.html)
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(config.js)
		.pipe(connect.reload());
}); 
gulp.task('open', ['connect'], function() {
	gulp.src('index.html')
		.pipe(open({ uri: config.url + ':' + config.port + '/'}));
});
 gulp.task('watch', function() {
	gulp.watch(config.html, ['html']);
	gulp.watch(config.js, ['js' ]);
	
});

gulp.task('default', ['open','watch']);