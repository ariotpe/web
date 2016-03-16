'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute','myApp.Inicio']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'views/inicio.html',
      controller:'inicioCtrl'
    });

    $routeProvider.when('/nosotros',{
      templateUrl:'views/nosotros.html'
    });

    $routeProvider.when('/soluciones',{
      templateUrl:'views/soluciones.html'
    });

    $routeProvider.when('/aliados',{
      templateUrl:'views/aliados.html'
    });

    $routeProvider.when('/contacto',{
      templateUrl:'views/contacto.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.controller('navbarCtrl',function($scope){
  $scope.menus = [
    {
      ruta: '#/',
      texto: 'INICIO'
    },
    {
      ruta: '#/nosotros',
      texto: 'NOSOTROS'
    },
    {
      ruta: '#/soluciones',
      texto: 'SOLUCIONES'
    },
    {
      ruta: '#/aliados',
      texto: 'ALIADOS'
    },
    {
      ruta: '#/contacto',
      texto: 'CONTACTO'
    }
  ];
});

myApp.controller('footerCtrl',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});
