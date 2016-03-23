var appInicio = angular.module('myApp.Inicio',[]);

appInicio.controller('inicioCtrl',function($scope){ });

var sliderImgs = [
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/domotica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/inmotica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/seguridadelectronica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/solarpanels.png'
  ];

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

  var str = '<ul class="slides">';
  for (i = 0; i < sliderImgs.length; i++) {
    str += '<li><img src="'+sliderImgs[i]+'"></li>';
  };
  str += '</ul>';
  $('#GeckoCarousel').html(str);

  function linkFunc(scope, elem, attr) {
    $document.ready(function(){
      elem.slider({
        full_width: true,
        indicators: true,
        transition: 1000,
        interval: 4000
      });
    });
  }

  return directive;
});
