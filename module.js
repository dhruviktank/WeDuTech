var app = angular.module("myModule", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html"
        })
        .when("/product", {
            templateUrl: "views/product.html"
        })
        .when("/pricing", {
            templateUrl: "views/pricing.html"
        })
        .when("/contact", {
            templateUrl: "views/contact.html"
        })
});
app.controller("myController", function ($scope) {

})