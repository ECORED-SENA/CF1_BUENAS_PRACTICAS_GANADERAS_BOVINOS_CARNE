<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos
    .row.mb-5.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-md-7.p-5
        p Los protocolos de bioseguridad ganadera son de suma importancia porque #[b extienden una orientación clara y concisa de las actividades que se deben de llevar a cabo para la crianza, producción, mantenimiento y exportación].
        p En relación con los protocolos de bioseguridad en la finca ganadera tenga en cuenta las siguientes generalidades:
      .col-md-3
        img(src='@/assets/curso/tema4/1.png', style="width: 300px").m-auto
    .row.mb-5(data-aos="slide-right")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
       .tarjeta--boton.color-secundario.p-4.h-100.hoverScale2
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/2.svg', style="width: 80px").m-auto
          h3 Estándares productivos
          p.m-0 En Colombia se creó un protocolo que certifica a las empresas del sector ganadero cuando cumplen con unos estándares productivos que garantizan la calidad e inocuidad del producto final.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100.hoverScale2
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/3.svg', style="width: 80px").m-auto
          h3 Resolución 0773 de 2020
          p.m-0 Por medio de la Resolución 0773 de mayo 14 de 2020 se promulgan las medidas de bioseguridad para el sector pecuario. 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100.hoverScale2
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/4.svg', style="width: 80px").m-auto
          h3 Certificación ICA
          p.m-0 La Resolución 068167 del 20 de mayo de 2020 dispone los requisitos para obtener la certificación en buenas prácticas ganaderas (BPG) en la producción de carne de bovinos y/o bufalinos.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100.hoverScale2
          .row.align-items-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/5.svg', style="width: 80px").m-auto
          h3 Asiduidad a la norma
          p.m-0 Es imperante la necesidad de adelantar la guía, seguir los protocolos descritos del Artículo 5 hasta el Artículo 10 (de la Resolución 068167 de 2020), de los cuales dependen de que el ICA otorgue o niegue dicha certificación.
    .row(data-aos="zoom-in-up").justify-content-center.mb-5
      .col-md-8
        TabsC.color-acento-contenido(data-aos="fade-right").modif
          .py-5.py-md-10.p-5(titulo=" 01. ¡Importante!")
            p.mb-0.p-4 Las Buenas Prácticas Ganaderas, como estrategia de calidad en la producción primaria, deben contar con lineamientos que permiten la certificación de la finca o empresa que lo requiera.
          .py-5.py-md-10.p-5(titulo="02. ¡Recuerde!")
            p.mb-0.p-4 El instituto colombiano agropecuario (ICA), es la entidad certificadora en BPG; para ello hay establecido un procedimiento y unos requisitos que serán solicitados a aquellos predios que se dedican a la producción de carne bovina y que se destinan al sacrificio y el consumo humano.
    .row.align-items-center.mb-4.mb-lg-0
      .col-md-6.p-2(data-aos="fade-right")
        p Las BPG requieren de un procedimiento que según la entidad certificadora se establece de la siguiente manera: 
        ol.lista-puntero.ms-4
          li
            .lista-puntero
            | Control de plagas.
          li
            .lista-puntero
            | Manejo sanitario.
          li
            .lista-puntero
            | Alimentación y agua.
          li
            .lista-puntero
            | Transporte animal.
          li
            .lista-puntero
            | Trazabilidad.
          li
            .lista-puntero
            | Bienestar animal.
          li
            .lista-puntero
            | Condiciones laborales.
          li
            .lista-puntero
            | Manejo medioambiental de residuos.
        p Para el proceso de certificación de BPG se realiza una visita técnica a la granja, en la cual se evalúan los requisitos anteriormente mencionados y se debe tener en cuenta: 
        ol.lista-puntero.ms-4
          li
            .lista-puntero
            | Control de plagas.
          li
            .lista-puntero
            | Manejo sanitario.
          li
            .lista-puntero
            | Alimentación y agua.
          li
            .lista-puntero
            | Transporte animal.
          li
            .lista-puntero
            | Trazabilidad.
      .col-md-5(data-aos="fade-left")
        img(src='@/assets/curso/tema4/7.png', style="width: 350px").m-auto
    p.mb-5 Conozca, a continuación, algunos conceptos adicionales relativos a los procesos de certificación BPG, de los cuales se debe tener claridad, esto favorecerá la toma de decisiones y la aplicación de acciones más acertadas para el proceso:
    .row(data-aos="fade-left")
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center(titulo="Certificable")
          .col-md-2.mb-4.mb-md-0.ps-5
            figure
              img(src='@/assets/curso/tema4/9.svg', style="width: 80px").m-auto
          .col-md-10.mb-4.mb-md-0.mt-3
            p.mb-5 El concepto técnico será “certificable” cuando el predio cumpla con el 100% de los criterios fundamentales, mínimo el 80% de los criterios mayores y mínimo 60% de los criterios menores; <strong>ante lo cual se expedirá el Certificado de BPG, en la producción primaria de carne para consumo humano</strong>.      
        .row.justify-content-center.align-items-center(titulo="Aplazable")
          .col-md-2.mb-4.mb-md-0.ps-5
            figure
              img(src='@/assets/curso/tema4/10.svg', style="width: 80px").m-auto
          .col-md-10.mb-4.mb-md-0.mt-3
            p.mb-5 El concepto será “aplazado”, cuando el predio cumpla con menos del 100% de los criterios fundamentales, y/o menos del 80% de los criterios mayores, y/o menos del 60% de los criterios menores.
        .row.justify-content-center.align-items-center(titulo="No conformidades ")
          .col-md-2.mb-4.mb-md-0.ps-5
            figure
              img(src='@/assets/curso/tema4/8.svg', style="width: 80px").m-auto
          .col-md-10.mb-4.mb-md-0.mt-3
            p.mb-5 Las no conformidades encontradas se pueden corregir en un plazo máximo de tres meses, contados a partir de la fecha de la visita. Una vez cumplidos dichos requerimientos la finca podrá remitir la documentación pertinente o informar al ICA o a quien este autorice, con el fin de programar una nueva visita para la auditoría del predio, la cual se realizará dentro de los treinta días hábiles siguientes a la solicitud.
        .row.justify-content-center.align-items-center(titulo="Suspensión o cancelación")
          .col-md-2.mb-4.mb-md-0.ps-5
            figure
              img(src='@/assets/curso/tema4/11.svg', style="width: 80px").m-auto
          .col-md-10.mb-4.mb-md-0.mt-3
            p.mb-5 La certificación puede ser suspendida y cancelada de acuerdo con el incumplimiento de ciertos requisitos postobtención del certificado.
      
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
