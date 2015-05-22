(function() {
    'use strict';

    var app = angular.module('SknPageApp', []);

    app.directive('pageHome', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/home.html',
            controller: function() {

            },
            controllerAs: 'homeCtrl'
        };
    });

    app.directive('pageAbout', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/about.html',
            controller: function() {

            },
            controllerAs: 'aboutCtrl'
        };
    });

    app.directive('pageProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/projects.html',
            controller: function() {

            },
            controllerAs: 'projectsCtrl'
        };
    });

    app.directive('pageGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/gallery.html',
            controller: function() {

            },
            controllerAs: 'galleryCtrl'
        };
    });

    app.directive('pageContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/contact.html',
            controller: function() {

            },
            controllerAs: 'contactCtrl'
        };
    });

})();

