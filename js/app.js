'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'base/img_slider.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.controller('navbar',function($scope){
  $scope.menus = [
    {
      ruta: '/',
      texto: 'INICIO'
    },
    {
      ruta: '/nosotros',
      texto: 'NOSOTROS'
    },
    {
      ruta: '/soluciones',
      texto: 'SOLUCIONES'
    },
    {
      ruta: '/aliados',
      texto: 'ALIADOS'
    },
    {
      ruta: '/contacto',
      texto: 'CONTACTO'
    }
  ];
});

myApp.controller('footer',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});
