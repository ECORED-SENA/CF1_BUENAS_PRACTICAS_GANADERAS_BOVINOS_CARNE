<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos

    .row.mb-5.justify-content-center.bg9
      .col-md-5.mt-5
        p Los protocolos de bioseguridad ganadera son de suma importancia porque <strong>extienden una orientación clara y concisa de las actividades que se deben de llevar a cabo para la crianza, producción, mantenimiento y exportación</strong>.
        p En relación con los protocolos de bioseguridad en la finca ganadera tenga en cuenta las siguientes generalidades:
      .col-md-3
        img(src='@/assets/curso/tema4/1.png', alt='Texto que describa la imagen')


    .row.mb-5(data-aos="slide-right")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
       .tarjeta--boton.color-secundario.p-4.h-100
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')
          h3 Estándares productivos
          p.m-0 En Colombia se creó un protocolo que certifica a las empresas del sector ganadero cuando cumplen con unos estándares productivos que garantizan la calidad e inocuidad del producto final.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/3.svg', alt='Texto que describa la imagen')
          h3 Resolución 0773 de 2020
          p.m-0 Por medio de la Resolución 0773 de mayo 14 de 2020 se promulgan las medidas de bioseguridad para el sector pecuario. 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/4.svg', alt='Texto que describa la imagen')
          h3 Certificación ICA
          p.m-0 La Resolución 068167 del 20 de mayo de 2020 dispone los requisitos para obtener la certificación en buenas prácticas ganaderas (BPG) en la producción de carne de bovinos y/o bufalinos.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
          h3 Asiduidad a la norma
          p.m-0 Es imperante la necesidad de adelantar la guía, seguir los protocolos descritos del Artículo 5 hasta el Artículo 10 (de la Resolución 068167 de 2020), de los cuales dependen de que el ICA otorgue o niegue dicha certificación.

    .row(data-aos="zoom-in-up").justify-content-center.mb-3
      .col-md-10
        TabsC.color-acento-contenido
          .py-5.py-md-10.bgr_3.p-4(titulo=" 01. ¡Importante!")
            p Las Buenas Prácticas Ganaderas, como estrategia de calidad en la producción primaria, deben contar con lineamientos que permiten la certificación de la finca o empresa que lo requiera.
          .py-5.py-md-10.bgr_3.p-4(titulo="02. ¡Recuerde!")
            p El instituto colombiano agropecuario (ICA), es la entidad certificadora en BPG; para ello hay establecido un procedimiento y unos requisitos que serán solicitados a aquellos predios que se dedican a la producción de carne bovina y que se destinan al sacrificio y el consumo humano.
    
    
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
