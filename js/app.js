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

    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.controller('navbarCtrl',['$scope',function($scope){
  $scope.menus = [
    {
      ruta: '#/',
      texto: 'INICIO'
    },{
      ruta: '#/nosotros/#Nosotros',
      texto: 'NOSOTROS'
    },{
      ruta: '#/nosotros/#Aliados',
      texto: 'ALIADOS'
    },{
      ruta: '#/#hba',
      texto: 'Domótica e Inmótica'
    },{
      ruta: '#/#confortyeficiencia',
      texto: 'Eficiencia energética'
    },{
      ruta: '#/#seguridad',
      texto: 'Seguridad domótica'
    },{
      ruta: '#/#energia',
      texto: 'Enérgias renovables'
    }
  ];
}]);

myApp.controller('footerCtrl',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});
