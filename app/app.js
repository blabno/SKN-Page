(function () {
    'use strict';
    var app = angular.module('SknPageApp', ['ngRoute', 'smoothScroll']);

    app.controller('ScrollController', ['smoothScroll', function(smoothScroll) {
        this.goTo = function(id) {
            var element = document.getElementById(id);
            var options = {
                duration: 1800
            };
            smoothScroll(element, options);
        };
    }]);

    app.controller('HomeController', function() {

    });

    app.controller('AboutController', function() {

    });

    app.controller('ProjectsController', function() {

    });

    app.controller('GalleryController', function() {

    });

    app.controller('ContactController', function() {

    });

})();

