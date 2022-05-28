<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diagnóstico de aplicación BPG en el predio

    .row.mb-5.bg04.mb-5(data-aos="fade-right")
      .col-12.col-md-5.col.p-lg-5.mb-3.mb-lg-0
        figure
         img.px-5(src='@/assets/curso/tema6/1.png', alt='Texto que describa la imagen')(data-aos="fade-right")
      .col-12.col-md-6.p-lg-5.mtop_7
        p.px-3(data-aos="fade-left").mb-3 Las BPG son las diversas actividades ganaderas que una empresa debe llevar a cabo a lo largo de la vida del animal, asegurando la inocuidad y enfocándose en la gestión del riesgo biológico, físico y químico, ya que el estado del predio puede afectar positiva o negativamente la salud y vida del animal y del consumidor.
        p.px-3.mb-3 <strong>Adicionalmente a los pasos y acciones que acercan al predio a la certificación ICA, los ganaderos deben registrar sus predios ante esta misma Institución</strong>.
    .row.align-items-center.mb-5
      .col-12.col-lg-6.mb-4.mb-lg-0
        p.mb-5 Por otro lado, se deben implementar una serie de medidas técnicas como las que se enuncian a continuación:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Instalaciones y áreas.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Sanidad animal y bioseguridad.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Registro y trazabilidad.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Bienestar animal.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Manejo de insumos pecuarios y medicamentos veterinarios.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Personal.
      .col-12.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/tema6/2.png', style="width: 350px").m-auto
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center.bg10.p-3
          .col-auto
            img(src='@/assets/curso/tema3/3.svg', style="width: 90px") 
          .col-md-8
            p #[b Diagnóstico de Aplicación BPG]
            p.mb-2 Profundice en lo relacionado con el diagnóstico de aplicación BPG en el predio, visitando el siguiente enlace y analizando con atención su contenido.
          .col-md-2
            a.boton.color-acento-contenido.texto-blanco(href="https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx" target="_blank")
              span(style="color: #000 !important") Ver más 
              i.fas.fa-link(style="color: #000 !important")
              
</template>

<script>
export default {
  name: 'Tema3',
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
