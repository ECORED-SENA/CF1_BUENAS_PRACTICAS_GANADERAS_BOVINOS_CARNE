<<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa ganadera bovina de carne

    .row.bg01.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.p-4
        p #[b Combina en su operación productiva varios factores importantes como el diagnóstico, las metas, la planificación, el control, entre otros, para un adecuado funcionamiento de la empresa bovina]. Se debe implementar una técnica o manejo especial que mejore la calidad del producto, en este caso la producción de carne, destinada a un mercado exigente y muy competitivo a nivel local y global.
        p.mb-0 Las empresas ganaderas son una unidad económica de producción en la cual se debe tener en cuenta:
      .col-lg-4.mb-3
        figure
         img(src='@/assets/curso/tema1/img01.png', style="width: 350px").m-auto(data-aos="fade-right")
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
            img(src='@/assets/curso/tema1/img03.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Orientarse a los objetivos
          p La ganadería de carne como empresa busca un objetivo primordial que es la producción de carne por medio de un manejo que sea sencillo y genere rentabilidad.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img05.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Base de la producción
          p La producción de carne se basa en el resultado por hectárea (Ha) y esta se determina en producción de kilogramos: carne por hectárea, así mismo, depende de la ganancia media diaria de peso (GMD) y la capacidad de carga animal.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img04.png', alt='Texto que describa la imagen')     
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Rentabilidad
          p El principal bastión de la producción de carne es la rentabilidad, la cual se determina al margen sobre la venta (MSV) y el precio del valor del kilogramo.
        .col-md-8
          figure
            img(src='@/assets/curso/tema1/img06.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-3
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img07.svg', style="width: 80px") 
            .col
              p Para determinar la rentabilidad por hectárea de pasto por año se puede aplicar la siguiente fórmula:   
              p.bg1.p-2 #[b COP/HA DE PASTO AÑO= Carga animal (UGG*/ha) X GMD (kg/UGG/día) X 365 días X MSV (%) X Valor del kg.]
    .row.justify-content-center.mt-5.mb-5
      .col-md-4.mt-5
        img(src='@/assets/curso/tema1/1.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-md-9.bg2
        .row.py-5.px-4
          .col-lg-12
            p(style="font-size: 18px").mb-4 #[b UGG:] unidad gran ganado, que equivale a 450 kg de peso vivo.
            .tabla-a.color-acento-botones
              table(style="font-size: 15px")
                thead
                  tr(style="background-color: #FCF9F4")
                    th(colspan="3") Ejemplo
                tbody
                  tr
                    th(style="background-color: #FFDECF") Variables
                    th(style="background-color: #DDEFD7") Ganadería #1
                    th(style="background-color: #FFF3C6") Ganadería #2
                  tr
                    th(style="background-color: #FFDECF")
                      p.mb-0 #[b Carga animal]
                      p.mb-0 #[b (UGG/ha)]
                    th(style="background-color: #DDEFD7") 1
                    th(style="background-color: #FFF3C6") 1.5
                  tr
                    th(style="background-color: #FFDECF") GMD (Kg/UGG/Día)
                    th(style="background-color: #DDEFD7") 0.45
                    th(style="background-color: #FFF3C6") 0.45
                  tr
                    th(style="background-color: #FFDECF") MSV (%)
                    th(style="background-color: #DDEFD7") 49
                    th(style="background-color: #FFF3C6") 49
                  tr
                    th(style="background-color: #FFDECF") Valor del KG. (COP)
                    th(style="background-color: #DDEFD7") 4500
                    th(style="background-color: #FFF3C6") 4500
                  tr
                    th(colspan="3", style="background-color: #FFD63D")
                      p.mb-0 #[b Ganadería 1: cop/ha de pasto año: 1 UGG/ha x 0.45 kg/día]
                      p.mb-0 #[b x 365 x 49% x cop 4500 cop/ha de pasto año: 362171]
                  tr
                    th(colspan="3", style="background-color: #FFD63D")
                      p.mb-0 #[b Ganadería 2: cop/ha de pasto año: 1.5 UGG/ha x 0.45 kg/día]
                      p.mb-0 #[b x 365 x 49% x cop 4500 cop/ha de pasto año: 543256]
    p.mb-5 Las fases de importancia para la creación de una empresa ganadera se dividen en: 
    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/3.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.mb-0.p-2 Diagnóstico
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Diagnóstico
              p.mb-0  En donde es importante tener registros productivos, registros de venta y compra de insumos.
      .col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/4.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.mb-0.p-2 Metas
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Metas
              p.mb-0 Pueden ser a corto o largo plazo y dependen, en gran medida, de los parámetros técnicos de la especie. 
      .col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/5.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.mb-0.p-2  Planificación
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Planificación
              p.mb-0 Esta realiza unos pasos a seguir en busca del éxito y con ayuda de programas de tecnificación para el manejo de los puntos críticos, encontrados en el transcurrir de la empresa.
      .col-lg-3.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/6.png')
          .tarjeta-foto-hover__titulo.d-flex.align-items-center.p-2.bg3
            h4.mb-0.p-2 Control
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 Control
              p.mb-0 Busca verificar todas las acciones ejecutadas y ver si están conforme a lo planteado, con el fin de tener un producto de excelente calidad y confiable para el consumo humano.
    .row(style="margin-inline: -3.2rem !important")
      .col-12.p-5.p-lg-2
        .row
          .col-5.col-lg-4.bg4.p-3
            h3.mt-2.ms-lg-2 Estructura y características   
        .row.align-items-center
          .col-lg-5.px-0
            img(src='@/assets/curso/tema1/7.png', style="width: 450px")
          .col-lg-6
            p La ganadería bovina de carne en nuestro territorio viene fungiendo desde tiempos de la conquista española, con la introducción de ganado andaluz que posteriormente, dio origen a las razas nativas; seguido de ello fue introducida la raza Cebú de la línea Brahman y así sucesivamente se fue creando un hato ganadero que fue mejorado poco a poco con la inclusión de más razas como la Bos Tauros, Santa Gertrudis, Charoláis, entre otras.
            p.mb-0 Los sistemas de explotación en Colombia están basados en modelos que, a continuación, se mencionan; procure llevar registro de los aspectos más destacados en su libreta personal de apuntes:
    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row(style="margin-inline: -3.2rem !important")
      .col-12.p-5.p-lg-3
        .row
          .col-5.col-lg-4.bg4.p-3
            h3.mt-2 Funciones
    .row.justify-content-center
      .col-lg-10.px-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La función de la empresa ganadera de carne es dar un mejor manejo del mercado bajo los parámetros técnicos establecidos, para minimizar gastos de producción y mejorar la productividad.
            br
            br
            p.mb-0 #[b Las exigencias del mercado han mostrado la importancia de cambiar la ganadería tradicional en sistemas de producción, bajo estándares de calidad con visión empresarial.]
      .col-lg-10.mt-5
        .row.justify-content-center.align-items-center.bg5.p-3
          .col-lg-auto
            img(src='@/assets/curso/tema1/9.svg', style="width: 80px").m-auto
          .col-lg-2
            p.text-center.mb-3 #[b ¡importante!]
          .col-lg-7
            p.mb-0 Cada vez más, se hace imprescindible estar certificados y cumplir con los estándares en todas las líneas de proceso, con el fin de garantizar la calidad e inocuidad del producto final.
          
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
