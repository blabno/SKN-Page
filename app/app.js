(function() {
    'use strict';

    var app = angular.module('SknPageApp', []);

    app.directive('pageHome', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/home.html',
            controller: function() {
                this.message = 'This is a Home Content';
            },
            controllerAs: 'homeCtrl'
        };
    });

    app.directive('pageAbout', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/about.html',
            controller: function() {
                this.message = 'This is an About Content';
            },
            controllerAs: 'aboutCtrl'
        };
    });

    app.directive('pageProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/projects.html',
            controller: function() {
                this.message = 'This is a Projects Content';
            },
            controllerAs: 'projectsCtrl'
        };
    });

    app.directive('pageGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/gallery.html',
            controller: function() {
                this.message = 'This is a Gallery Content';
            },
            controllerAs: 'galleryCtrl'
        };
    });

    app.directive('pageContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'resources/templates/contact.html',
            controller: function() {
                this.message = 'This is a Contact Content';
            },
            controllerAs: 'contactCtrl'
        };
    });

})();

