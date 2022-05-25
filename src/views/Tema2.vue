<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Política sanitaria y de inocuidad en alimentos 
    p(data-aos="fade-right").mb-5 La política sanitaria está regida bajo estatutos internacionales por la Organización Mundial de Sanidad Animal, OIE. A nivel país lo está por los organismos o entidades como la Federación Colombiana de Ganaderos FEDEGAN, que están encargadas del manejo de enfermedades de control oficial y otros parámetros como el levante, manejo y producción bovina.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/1.svg', style="width: 80px") 
            .col
              p.mb-0 La política sanitaria y de inocuidad del gobierno colombiano para la leche, la carne bovina y sus derivados fue aprobada mediante el documento CONPES 3375 que se refiere a la “Política nacional de sanidad agropecuaria e inocuidad de alimentos para el sistema de medidas sanitarias y fitosanitarias”, y 3376 “Política sanitaria y de inocuidad para las cadenas de la carne y de la leche. 
    p Esta reglamentación:
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-7
        img(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')(data-aos="fade-right") 
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Normatividad
    p.mb-5 Es una herramienta implementada por el Gobierno Nacional, que ejerce control, vigilancia y protección a animales a nivel individual y colectivo, además de protección al medio ambiente, evitando así pérdidas de carácter económico, perjuicios en la salud humana y regulando la comercialización de productos y animales.
    .row.justify-content-center.mb-5
      .col-md-10
        .cajon.color-primario.p-4
          .row
            .col-auto
              img(src='@/assets/curso/tema2/1.svg', style="width: 70px") 
            .col
              p.mb-0 La aplicación de buenas prácticas ganaderas fortalece la competitividad y comercialización no solo a nivel regional sino a nivel internacional, logrando mayor calidad de la alimentación, movilización de carga y labores agrícolas. 
    p.mb-5 Conozca las principales normas existentes y vigentes para la regulación de la salud animal; procure identificar y asimilar la orientación de cada una de ellas:
    .row.justify-content-center.mb-5
      .col-lg-7
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/3.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
          .tarjeta.color-acento-botones.p-3(x="62.4%" y="17%" numero="")
            .h5.mb-2 Ley 395 de 1997
            p Por la cual se declara de interés social, nacional y como prioridad sanitaria la erradicación de la fiebre aftosa en todo el territorio colombiano y se dictan otras medidas encaminadas a este fin.
          .tarjeta.color-acento-botones.p-3(x="80%" y="50%" numero="")
            .h5.mb-2 Resolución 3865 de 2003
            p Por la cual se toman medidas de carácter sanitario para prevenir la introducción a Colombia de la encefalopatía espongiforme bovina.
          .tarjeta.color-acento-botones.p-3(x="72%" y="82%" numero="")
            .h5.mb-2 Resolución 0322 de 2004
            p Por la cual se adiciona un parágrafo a la Resolución 889 de abril 10 de 2003, por la cual se establecen requisitos sanitarios para las fincas que produzcan bovinos, ovinos, caprinos y bubalinos, para el sacrificio con destino a la exportación.
          .tarjeta.color-acento-botones.p-3(x="49%" y="95%" numero="")
            .h5.mb-2 Resolución 1313 de 2010
            p Por medio de la cual se modifica el Artículo 17, el parágrafo del Artículo 26, el parágrafo 10 del Artículo 30 y el Artículo 31 de la Resolución 1192 de 2008.
          .tarjeta.color-acento-botones.p-3(x="26%" y="82%" numero="")
            .h5.mb-2 Resolución 119 del 2004
            p Por la cual se adoptan medidas sanitarias para la Brucelosis Bovina en Colombia.
          .tarjeta.color-acento-botones.p-3(x="18%" y="50%" numero="")
            .h5.mb-2 Resolución 1192 de 2008
            p Por la cual se establecen medidas sanitarias para la prevención, el control y la erradicación de la brucelosis en las especies bovina, bubalina, caprina, ovina y porcina, en la República de Colombia.
          .tarjeta.color-acento-botones.p-3(x="34%" y="17%" numero="")
            .h5.mb-2 Resolución 1513 de 2004
            p Por la cual se establecen medidas sanitarias para la prevención, el control y la erradicación de la tuberculosis bovina en Colombia.
    p.mb-5 En cuanto a la inocuidad pecuaria conozca en la siguiente gráfica la reglamentación existente; tenga presente que tales normativas se actualizan, se postulan cambios y ajustes permanentes para las prácticas ganaderas de producción:
    .row.justify-content-center.align-content-center.mb-5
      .col-lg-4.p-4.mb-0.bg15
        h5.mb-0.text-center Inocuidad Pecuaria
      .col-lg-10
        img.px-5(src='@/assets/curso/tema2/img02.svg', alt='Texto que describa la imagen')
      .col-lg-10
        TabsB.color-acento-contenido(data-aos="fade-right")
          .py-4.py-md-5(titulo="Documento CONPES 3676 de 2010" :icono="require('@/assets/curso/tema2/img1.svg')").bg16
            .row
              .col-12.p-4
                h4 Documento CONPES 3676 de 201
                p Consolidación de la política sanitaria y de inocuidad para las cadenas láctea y cárnica.
          .py-4.py-md-5(titulo="Resolución 3585 de 2008" :icono="require('@/assets/curso/tema2/img1.svg')").bg16
            .row
              .col-12.p-4
                h4 Resolución 3585 de 2008
                p Por la cual se establece el sistema de inspección, evaluación y certificación oficial de la producción primaria de leche, de conformidad con lo dispuesto en el Decreto 616 de 2006.
          .py-4.py-md-5(titulo="Resolución 2341 de 2007" :icono="require('@/assets/curso/tema2/img1.svg')").bg16
            .row
              .col-12.p-4
                h4 Resolución 2341 de 2007
                p Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino, destinado al sacrificio para consumo humano.
          .py-4.py-md-5(titulo="Decreto 1500 de 2007" :icono="require('@/assets/curso/tema2/img1.svg')").bg16
            .row
              .col-12.p-4
                h4 Decreto 1500 de 2007
                p Por el cual se establece el reglamento técnico a través del cual se crea el Sistema oficial de inspección, vigilancia y control de la carne, productos cárnicos comestibles y derivados cárnicos destinados para el consumo humano y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación.
          .py-4.py-md-5(titulo="Decreto 616 de 2006" :icono="require('@/assets/curso/tema2/img1.svg')").bg16
            .row
              .col-12.p-4
                h4 Decreto 616 de 2006
                p Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercialice, expenda, importe o exporte en el país.
    .row.justify-content-center.mt-5.bg7.p-5
      .col-lg-3
        img(data-aos="fade-right")(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
      .col-lg-6.p-5
        .titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 Normatividad
        p(data-aos="fade-left").mb-4 Amplíe su conocimiento en normatividad sobre buenas prácticas de ganadería, visitando los enlaces que aquí se proponen; recuerde llevar registro de los aspectos más importantes en su libreta personal de apuntes:
        a.boton.color-acento-botones.texto-blanco(href="https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx" target="_blank")
          span.text-white Descargar
          i.fas.fa-file-download
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Implicaciones e importancia
    p.mb-5 La ganadería en los últimos años se ha considerado un factor clave para el desarrollo sostenible de la agricultura en Colombia. Según datos estadísticos del Ministerio de Agricultura la importancia de la ganadería en Colombia es fundamental en la generación de ingresos y rentabilidad a nivel nacional e internacional.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/1.svg', style="width: 70px") 
            .col
              p.mb-0 Esta actividad agrícola representa una insignia de calidad en productos de exportación, además de ser tres veces mayor su valor de producción en cuanto a la producción cafetera. 
    p.mb-5 Sobre las implicaciones e importancia del sector ganadero en Colombia tenga en cuenta los siguientes aspectos:
    .tarjeta.tarjeta--sena.p-4
      PasosB.color-acento-contenido(data-aos="fade-right")
        .row(titulo="").justify-content-center
          .col-lg-6.bg11.p-5
            h4 Exportaciones
            p De acuerdo con los datos recopilados en el 2019, Colombia exportó el 4.2% de su producción nacional, tanto de carne de res (20,773 toneladas) como de ganado vivo (75,370 cabezas de ganado, equivalente a 19,094 toneladas de carne). 
          .col-lg-5.px-0
            figure
              img(src='@/assets/curso/tema2/7.jpg', style="width: 450px")
        .row(titulo="").justify-content-center
          .col-lg-6.bg11.p-5
            h4 Valor de exportación
            p Dichos productos generan un valor de exportación de 132 millones de dólares (DANE-ESAGa, 2020; FEDEGAN, 2020a; FEDEGAN-FNG, 2020) y se dirigen principalmente hacia mercados de bajo valor como Líbano e Irak (ganado vivo) y Rusia, Líbano, Vietnam o Egipto (carne vacuna).
          .col-lg-5.px-0
            figure
              img(src='@/assets/curso/tema2/8.jpg', style="width: 450px")
        .row(titulo="").justify-content-center
          .col-lg-6.bg11.p-5
            h4 Reducción de la demanda interna
            p FEDEGAN informa que la industria nacional de carne fue capaz de mitigar la reducción de la demanda interna al aumentar sus volúmenes de exportación en un 80% durante el primer trimestre de 2020 (Contexto ganadero, 2020d; DANE-ESAG, 2020a).
          .col-lg-5.px-0
            figure
              img(src='@/assets/curso/tema2/9.jpg', style="width: 450px")
        .row(titulo="").justify-content-center
          .col-lg-6.bg11.p-5
            h4 Implementación de la normatividad
            p De lo anterior, se recalca la importancia de las medidas implementadas de las normatividades animales de salud animal y de inocuidad pecuaria.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/10.jpg', style="width: 450px")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
