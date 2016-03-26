var appInicio = angular.module('myApp.Inicio',[]);

var sliderImgs = [
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/domotica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/inmotica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/seguridadelectronica.png',
    'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/solarpanels.png'
  ];

appInicio.controller('inicioCtrl',function($scope,$document){});

appInicio.directive('slider', function($document) {
  var str = '<ul class="slides">';
  for (i = 0; i < sliderImgs.length; i++) {
    str += '<li><img src="'+sliderImgs[i]+'"></li>';
  };
  str += "</ul>";
  $('#GeckoCarousel').html(str);

  //1734*720
  return {
    restrict: 'AC', //Apply the directive through Class or Attribute
    template: str,
    link: function (scope, elem, attr) {
      $document.ready(function(){
        elem.slider({
          full_width: false,
          height:     400,
          indicators: true,
          transition: 1000,
          interval:   4000
        });
      });
    }
  };
});
