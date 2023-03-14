var app = angular.module("myModule", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/product", {
            templateUrl: "product.html"
        })
        .when("/pricing", {
            templateUrl: "pricing.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
});
app.controller("myController", function ($scope) {

})
