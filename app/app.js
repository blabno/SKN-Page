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
        this.message = 'Home Module';
    });

    app.controller('AboutController', function() {
        this.message = 'About Module';
    });

    app.controller('ProjectsController', function() {
        this.message = 'Projects Module';
    });

    app.controller('GalleryController', function() {
        this.message = 'Gallery Module';
    });

    app.controller('ContactController', function() {
        this.message = 'Contact Module';
    });

})();

