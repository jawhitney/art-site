var app = angular.module('myApp', ['ngRoute', 'ngRetina']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html'
    })

    .when('/paintings', {
        templateUrl: 'views/paintings.html',
        controller: 'paintingsController'
    })

    .when('/murals', {
        templateUrl: 'views/murals.html'
    })

    .when('/live-paintings', {
        templateUrl: 'views/live-paintings.html'
    })

    .when('/resume-cv', {
        templateUrl: 'views/resume-cv.html'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html'
    })

    .when('/piece/:pieceId', {
        templateUrl: 'views/piece.html',
        controller: 'pieceController'
    });
});
