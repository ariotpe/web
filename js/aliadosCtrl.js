angular.module('myApp.Aliados',[])

.controller('aliadosCtrl',function($scope){
  $scope.aliados = [
    {
      nom: 'B-maTic',
      img: 'http://secramperu.com/images/logo-B-matic.jpg',
      descrip: 'Soluciones integrales con tecnología de vanguardia.'
    },
    {
      nom: 'HDL Automation',
      img: 'http://secramperu.com/images/Logo-Hdl.jpg',
      descrip: 'Es una empresa global que fabrica productos de'
         + 'edificios inteligentes a medida y equipamiento'
         + 'de iluminación profesional de escenarios.'
    },
    {
      nom: 'SECRAM S.A.C.',
      img: 'http://bmatic.pe/images/secram.jpg',
      descrip: 'Empresa certificada como Dealer de HDL en \
        Perú dedicada a brindar servicios de asesoría, \
        instalación, integración y mantenimiento de \
        Sistemas de Seguridad Electrónica, control  \
        automatización con la más alta tecnología.'
    },
    {
      nom: 'AIR SOLUTIONS SYSTEMS S.A.C.',
      img: 'http://bmatic.pe/images/air.jpg',
      descrip: 'Empresa con reconocida experiencia en el mercado \
        brindando productos y servicios para aire acondicionado, \
        refrigeración, ventilación, calefacción, energía e \
        infraestructura. Elabora, evalúa, diseña, analiza e \
        implementa las soluciones requeridas por sus clientes.'
    }
  ];
});
