'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute',
                      'myApp.Inicio',
                      'myApp.Aliados',
                      'myApp.Soluciones']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'views/inicio.html',
      controller:'inicioCtrl'
    });

    $routeProvider.when('/nosotros',{
      templateUrl:'views/nosotros.html'
    });

    $routeProvider.when('/soluciones',{
      templateUrl:'views/soluciones.html',
      controller:'solucionesCtrl'
    });

    $routeProvider.when('/aliados',{
      templateUrl:'views/aliados.html',
      controller:'aliadosCtrl'
    });

    $routeProvider.when('/contacto',{
      templateUrl:'views/contacto.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.controller('navbarCtrl',['$scope',function($scope){
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
}]);

myApp.controller('footerCtrl',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});
