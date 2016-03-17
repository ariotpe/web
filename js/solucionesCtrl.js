angular.module('myApp.Soluciones',[])

.controller('solucionesCtrl',function($scope){
  $scope.sections = [
    {
      id: 'ARC',
      title: 'Automatización residencial y comercial',
      text: 'Soluciones integrales con tecnología de vanguardia.'
    },
    {
      id: 'SEVA',
      title: 'Seguridad electrónica',
      text: 'Es una empresa global que fabrica productos de'
         + 'edificios inteligentes a medida y equipamiento'
         + 'de iluminación profesional de escenarios.'
    },
    {
      id: 'ER',
      title: 'Energías renovalbes',
      text: 'Empresa certificada como Dealer de HDL en \
        Perú dedicada a brindar servicios de asesoría, \
        instalación, integración y mantenimiento de \
        Sistemas de Seguridad Electrónica, control  \
        automatización con la más alta tecnología.'
    },
    {
      nom: 'multimedia',
      title: 'Sistemas multimedia',
      text: 'Empresa con reconocida experiencia en el mercado \
        brindando productos y servicios para aire acondicionado, \
        refrigeración, ventilación, calefacción, energía e \
        infraestructura. Elabora, evalúa, diseña, analiza e \
        implementa las soluciones requeridas por sus clientes.'
    }
  ];
});
