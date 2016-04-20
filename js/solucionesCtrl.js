var appSoluciones = angular.module('myApp.Soluciones',[]);

var soluciones = [
  {
    "id": "hba", // Home and Building Automation
    "sec": "Automatizacion residencial y comercial",
    "sols": [
      {
        "id": "domotica",
        "title": "Casas inteligentes - Domótica",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/domotica.png",
        "text": "Soluciones de control de temperaturas, sistemas \
         de iluminación, apertura y cierre de puertas, cortinas \
         y persianas, además de monitoreo de cámaras de seguridad, \
         estado de equipos domésticos (ON/OFF), desde un smart \
         phone, tablet, o PC conectado a internet, con el de \
         obtener mayor seguridad y confort en viviendas."
      },
      {
        "id": "inmotica",
        "title": "Edificios inteligentes - Inmótica",
        "img": 'https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/inmotica.png',
        "text": "Soluciones que permiten generar escenas para \
         reuniones y conferencias controlando las luminarias, \
         el sistema multimedia y el sistema de aire acondicionado \
         con un una botonera o a través de dispositivos \
         inteligentes, obteniendo un ahorro energético \
         considerable en inmuebles (hoteles, hospitales, etc) ."
      }
    ]
  },{
    "id": "confortyeficiencia",
    "sec": "Confort y Eficiencia Energética",
    "sols": [
      {
        "id": "oficinas",
        "title": "Soluciones para oficinas",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/oficinas.png",
        "text": "Integramos las soluciones multimedia, iluminación y \
        climatización para ofrecer soluciones a la medida del cliente \
        aportando un mejor ambiente donde trabajar y tener reuniones \
        más productivas."
      },{
        "id": "iluminacion",
        "title": "Luminarias Inteligentes",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/iluminacion.png",
        "text": "Nuestra solucion de iluminacion permite regular \
         la intesidad luminosa (dimerizar) en diversos ambientes \
         de manera local o remota, generando diversos escenarios \
         de acuerdo al gusto del cliente. Los juegos de \
         iluminacion mas comunes se encuentran en piscinas, \
         escenarios, ambientes caseros, saunas y SPA’s."
      },{
        "id": "climatizacion",
        "title": "Sistemas de climatización",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/climatizacion.png",
        "text": "Solución que contempla el control y monitoreo de sistemas \
        de aire acondicionado para alcanzar la temperatura deseada por el \
        cliente, generando así mayor confort. Ésta es la solución que \
        permite el mayor ahorro energético. La regulación de temperatura \
        y el estado (ON/OFF) se puede hacer desde un dispositivo inteligente."
      }
    ]
  },{
    "id": "seguridad",
    "sec": "Sistemas de seguridad y videovigilancia integrados",
    "text": "Integramos las sistemas de seguridad electrónica, \
    videovigilancia y sistemas de alarmas con los sistemas \
    domóticos para expandir las prestaciones: Silumación de presencia, \
    reportes de incendio o robos vía SMS, etc.",
    "sols": [
      {
        "id": "alarmas",
        "title": "Sistema de Alarmas",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/alarmas.png",
        "text": "Nuestros sistemas de alarmas inteligentes por \
        lo general están conectados a sistemas detectores de \
        humo, o sistemas detectores de intrusiones (sensores \
        de presencia). Estos sistemas de alarmas son capaces \
        de enviar alertas a dispositivos inteligentes como \
        smart phones o tablets (internet)."
      },{
        "id": "videovigilancia",
        "title": "Videovigilancia",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/videovigilancia.png",
        "text": "Nuestra solución en videovigilancia comprende \
          la inslatación de cámaras de seguridad interconectadas, \
          que pueden almacenar grandes cantidades de información \
          para consulta posterior. A su vez, se puede monitorear \
          lo visto por las cámaras desde un smart phone, tablet, \
          PC o TV desde cualquier lugar (internet)."
      },{
        "id": "accesos",
        "title": "Control de accesos",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/inicio/seguridadelectronica.png",
        "text": "Nuestra solución comprende la instalación de \
          lectores (RFID) de tarjetas (TAG’s) para el control \
          del ingreso de personal por niveles, logrando almacenar \
          un historial de accesos. A esto se le puede integrar un \
          sistema de cámaras o detectores biométricos para mayor \
          seguridad. Aplicaciones en hospitales, oficinas, \
          colegios, hoteles, etc."
      }
    ]
  },{
    "id": "energia",
    "sec": "Energías renovables",
    "sols": [
      {
        "id": "panelesSolares",
        "title": "Paneles Solares",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/paneles.png",
        "text": "Nuestra solución con paneles sol ares permite \
         ahorrar dinero en el consumo eléctrico, ya que permite \
         suminitrar energía a luminarias, sistemas calefactores, \
         sistemas de calentamiento de agua, sistemas de \
         climatización de piscinas, etc. Esta solución casi \
         no requiere de mantenimiento y es de fácil instalación."
      },{
        "id": "postesSolares",
        "title": "Postes Solares",
        "img": "https://raw.githubusercontent.com/geckotronics/webcontent/master/img/solu/postessolares.png",
        "text": "Esta solución es ideal para ilumincaicón pública en\
        zonas rurales, pistas o carreteras en donde tender cableado\
        eléctrico es muy costoso, difícil o no recomendado"
      }
    ]
  }
];


appSoluciones.controller('solucionesCtrl',function($scope){
  $scope.soluciones = soluciones;
});
