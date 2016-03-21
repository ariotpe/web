var appInicio = angular.module('myApp.Inicio',[]);

appInicio.controller('inicioCtrl',function($scope){

});

appInicio.directive('slider', function($document) {
  var directive = {
    restrict: 'AC', //Apply the directive through Class or Attribute
    scope: {
      images: '='
    },
    template: str,
    /*templateUrl: 'base/slider.html',*/
    link: linkFunc
  };

  var sliderImgs = [
    {
      'route': 'http://lorempixel.com/580/250/nature/1/',
      'align': 'center',
      'caption': 'Videovigilancia',
      'slogan': 'Supervisa tu casa desde donde quieras'
    },
    {
      'route': 'http://lorempixel.com/580/250/nature/2/',
      'align': 'left',
      'caption': 'Ahorro de energía',
      'slogan': 'Supervisa tu casa desde donde quieras'
    },
    {
      'route': 'http://lorempixel.com/580/250/nature/3',
      'align': 'right',
      'caption': 'Mayor Confort',
      'slogan': 'Controla tu casa desde botoneras inteligentes o tu teléfono móvil'
    },
    {
      'route': 'http://lorempixel.com/580/250/nature/4',
      'align': 'center',
      'caption': 'Energías renovables',
      'slogan': 'Instalación de paneles solares'
    }
  ];

  var str = '<ul class="slides">';
  for (i = 0; i < sliderImgs.length; i++) {
    var obj = sliderImgs[i];
    str += '<li><img class="responsive-img" src="'+obj.route+'">';
    str += '  <div class="caption '+obj.align+'-align">';
    str += '    <h3>'+obj.caption+'</h3>';
    str += '    <h5 class="light grey-text text-lighten-3">'+obj.slogan+'</h5>';
    str += '  </div>';
    str += '</li>';
  };
  str += '</ul>';
    $('#GeckoCarousel').html(str);

  function linkFunc(scope, elem, attr) {
    $document.ready(function(){
      elem.slider({
        full_width: false,
        indicators: true,
        transition: 1500,
        interval: 8000
      });
    });
  }

  return directive;
});
