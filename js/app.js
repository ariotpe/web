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

    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.controller('navbarCtrl',['$scope',function($scope){
  $scope.menus = [
    {
      ruta: '#/',
      texto: 'INICIO'
    },{
      ruta: '#/nosotros',
      texto: 'NOSOTROS'
    },{
      ruta: '#/soluciones',
      texto: 'SOLUCIONES'
    },{
      ruta: '#/nosotros/#Aliados',
      texto: 'ALIADOS'
    }
    ,{
      ruta: 'https://www.facebook.com/geckotronics',
      texto: 'facebook'
    },
  ];
}]);

myApp.controller('footerCtrl',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});
