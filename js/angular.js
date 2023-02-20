var app = angular.module("myApp",["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:"Templates/home.html",
        controller:"homeController"
    })

    .when("/tech",{
        templateUrl:"Templates/tech.html",
        controller:"techController"
    })

    .when("/contact",{
        templateUrl:"Templates/contact.html",
        controller:"contactController"
    })

    .when("/signup",{
        templateUrl:"Templates/signup.html",
        controller:"signupController"
    })

    .when("/about",{
        templateUrl:"Templates/about.html",
        controller:"aboutController"
    })


    .otherwise("/home",{
        templateUrl:"Templates/home.html",
    })

})

.controller("homeController",function($scope){
    $scope.message = "Home Page"

})

.controller("techController",function($scope){
    $scope.message = "tech Page"

})

.controller("signupController",function($scope){
    $scope.message = "signup Page"

})

.controller("contactController",function($scope){
    $scope.message = "Contact Page - In Progress"

})

.controller("aboutController",function($scope){
    $scope.message = "about Page - Under Progress"

})

.controller("navController", ['$scope', '$location',function($scope,$location){
    $scope.isActive = function(destination){
     return destination === $location.path()
    }
 
 }])