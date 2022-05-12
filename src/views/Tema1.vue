<<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa ganadera bovina de carne

    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-5
        p.mb-3 Combina en su operación productiva varios factores importantes como el diagnóstico, las metas, la planificación, el control, entre otros, para un adecuado funcionamiento de la empresa bovina. Se debe implementar una técnica o manejo especial que mejore la calidad del producto, en este caso la producción de carne, destinada a un mercado exigente y muy competitivo a nivel local y global.
        p.mb-3 Las empresas ganaderas son una unidad económica de producción en la cual se debe tener en cuenta:
      .col-lg-4
        figure
         img(src='@/assets/curso/tema1/img01.png', alt='Texto que describa la imagen')(data-aos="fade-right")

    SlyderE(indicadores="arriba").mb-5(data-aos="fade-right")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Aplicar control y seguimiento
          p Se debe hacer un manejo día a día de las actividades, con el fin de llevar un diagnóstico colaborativo con ayuda de expertos para el mejoramiento de la finca o hacienda ganadera de carne.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img02.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Ajustar modelos internacionales
          p Se debe tener en cuenta que el manejo es organizacional y que está en constante cambio, por los modelos que se aplican en los países desarrollados y son tomados como ejemplo en nuestro país, implementando pautas y toma de decisiones que permiten una evolución constante.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img03.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Orientarse a los objetivos
          p La ganadería de carne como empresa busca un objetivo primordial que es la producción de carne por medio de un manejo que sea sencillo y genere rentabilidad.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img04.png', alt='Texto que describa la imagen')
            
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Base de la producción
          p La producción de carne se basa en el resultado por hectárea (Ha) y esta se determina en producción de kilogramos: carne por hectárea, así mismo, depende de la ganancia media diaria de peso (GMD) y la capacidad de carga animal.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img05.png', alt='Texto que describa la imagen')     
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Rentabilidad
          p El principal bastión de la producción de carne es la rentabilidad, la cual se determina al margen sobre la venta (MSV) y el precio del valor del kilogramo.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img06.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row.bg02.justify-content-center.align-items-center.p-4
          .col-lg-2
            figure
              img(src='@/assets/curso/tema1/img07.svg', alt='Texto que describa la imagen') 
          .col-lg-8
            p Para determinar la rentabilidad por hectárea de pasto por año se puede aplicar la siguiente fórmula:   
    

    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img06.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos mentales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos mentales
              p.mb-0  Son los que están relacionados con esos pensamientos ya construidos y que bloquean toda idea nueva, para los cuales se pueden tener pensamientos divergentes, rompiendo rutinas y reconfigurando ideas y procesos para avanzar.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img06.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos emocionales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos emocionales
              p.mb-0 Relacionados con imaginar los peores escenarios, y es acá donde se tiende a pensar en las fatalidades y se considera que renunciar es la mejor opción.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img06.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos perceptivos
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos perceptivos
              p.mb-0 Limitan la
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
