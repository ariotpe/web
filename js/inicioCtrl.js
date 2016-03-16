angular.module('myApp.Inicio',[])

.controller('inicioCtrl',function($scope){
  $scope.imgs = [
    {
      ruta: 'http://lorempixel.com/580/250/nature/1/',
      align: 'center',
      BigTagline: 'Videovigilancia',
      SmallSlogan: 'Supervisa tu casa desde donde quieras'
    },
    {
      ruta: 'http://lorempixel.com/580/250/nature/2/',
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
