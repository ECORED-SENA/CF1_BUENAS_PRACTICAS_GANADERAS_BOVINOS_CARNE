export default {
  global: {
    componenteFormativo:
      'Conceptualización en buenas prácticas ganaderas para bovinos de carne',
    descripcionCurso:
      'Mediante este componente el aprendiz asimilará conceptos y prácticas para la empresa ganadera bovina de carne, función, estructura y características, política sanitaria y de inocuidad en alimentos. Estará capacitado para la aplicación de buenas prácticas ganaderas (BPG) en la producción de bovinos de carne y todos sus componentes: normatividad, seguridad y salud en el trabajo, riesgos en ganadería de carne, gestión ambiental, calidad, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresa ganadera bovina de carne',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política sanitaria y de inocuidad en alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Implicaciones e importancia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'BPG en producción de bovinos de carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes BPG',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Criterios de cumplimiento y listas de chequeo',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Aplicación BPG',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Recursos para implementación BPG',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diagnóstico de aplicación BPG en el predio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Gestión ambiental en bovinos de carne',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Organización de una empresa de ganado bovino',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Registros',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Análisis económico',
            hash: 't_9_2',
          },
        ],
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2019). Política nacional para mejorar la competitividad del sector lácteo colombiano.',
      link:
        'https://www.minagricultura.gov.co/ministerio/direcciones/Documents/d.angie/conpes%203675.pdf ',
    },
    {
      referencia:
        'Corrientes Portal Turístico Provincial. (s.f.). Ganadería de corrientes. Corrientes.',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos. (s.f.). Buenas Prácticas ganaderas. FEDEGAN.',
      link:
        'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20Ganaderas%20(BPG,que%20trabajan%20en%20la%20explotaci%C3%B3n',
    },
    {
      referencia:
        'Garcia, E. (2019). Ganadería de Sinaloa fuera del programa créditos a la palabra. Luz noticias. ',
      link:
        'https://www.luznoticias.mx/agro/ganaderia-de-sinaloa-fuera-del-programa-creditos-a-la-palabra/57574',
    },
    {
      referencia:
        'Metro Ecuador. (2019). La "ganadería climáticamente inteligente" se consolida en Ecuador. Contexto ganadero.',
      link:
        'https://www.contextoganadero.com/reportaje/la-ganaderia-climaticamente-inteligente-se-consolida-en-ecuador',
    },
    {
      referencia:
        'OnCuba. (2018). Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda. OnCuba News.',
      link:
        'https://oncubanews.com/cuba/ganaderia-cubana-mas-leche-pero-muy-lejos-de-satisfacer-la-demanda/',
    },
    {
      referencia:
        'Rangel, V. (2020). Gestión ambiental en el sector ganadero doble propósito de los pequeños productores en Maicao, Colombia. Revista Espacios',
      link: '. https://www.revistaespacios.com/a20v41n27/a20v41n27p03.pdf',
    },
    {
      referencia:
        'Resolución 068167 de 2020. [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos. Mayo 20 de 2020.',
      link:
        '. https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y mental de un animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de prácticas o medidas sanitarias y preventivas orientadas a prevenir el contacto de los animales con microorganismos patógenos, evitar la entrada y salida de agentes infectocontagiosos.',
    },
    {
      termino: 'Buenas prácticas ganaderas',
      significado:
        'Prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente.',
    },
    {
      termino: 'FEDEGAN',
      significado: 'Federación colombiana de ganaderos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina.',
    },
  ],
  complementario: [
    {
      texto:
        'Producción agropecuaria y agroindustrial. (2021). Buenas prácticas ganaderas, ICA 2020.”',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F1SXng6fIr4',
    },
    {
      texto:
        'Asocebu Col. (2020). Hablemos de Cebú - importancia en la prevención de las enfermedades de control oficial en Colombia ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9jPXUuk2WNI',
    },
    {
      texto:
        'Zootecnia y veterinaria es mi pasión. (2022). Zootecnia, veterinaria y producción animal. Zoovetesmipasion',
      tipo: 'Linografía',
      link:
        'https://zoovetesmipasion.com/ganaderia/buenas-practicas-ganaderas-2/',
    },
    {
      texto:
        'Sanjuan, Y. (2021). Trazabilidad de la cadena cárnica bovina en Colombia',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v6bCdQvaCyk',
    },
    {
      texto:
        'La Finca de Hoy. (2020). Así debe ser un correcto plan sanitario para el bienestar de sus bovinos - La Finca de Hoy',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uVxB71GZBpw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
