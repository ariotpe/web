'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',{
      templateUrl:'views/inicio.html',
      controller:'inicio'
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

myApp.controller('navbar',function($scope){
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

myApp.controller('footer',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});

myApp.controller('inicio',function($scope){
  $scope.imgs = [
    {
      ruta: 'http://lorempixel.com/580/250/nature/1',
      align: 'center',
      BigTagline: 'Videovigilancia',
      SmallSlogan: 'Supervisa tu casa desde donde quieras'
    },
    {
      ruta: 'http://lorempixel.com/580/250/nature/2',
      align: 'left',
      BigTagline: 'Ahorro de energía',
      SmallSlogan: 'Supervisa tu casa desde donde quieras'
    },
    {
      ruta: 'http://lorempixel.com/580/250/nature/3',
      align: 'right',
      BigTagline: 'Mayor Confort',
      SmallSlogan: 'Controla tu casa desde botoneras inteligentes o tu teléfono móvil'
    },
    {
      ruta: 'http://lorempixel.com/580/250/nature/4',
      align: 'center',
      BigTagline: 'Energías renovables',
      SmallSlogan: 'Instalación de paneles solares'
    }
  ];
});
