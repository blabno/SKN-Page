module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            }, all: {
                src: ['app/*.js']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-serve');
};