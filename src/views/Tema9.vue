<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Organización de una empresa de ganado bovino
    p.mb-5 Una empresa de ganado bovino busca tener un adecuado control estructural, funcional y productivo, con el fin de generar una competitividad constante a nivel local, nacional e internacional en la producción de los diversos productos derivados del ganado.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.align-items-center
            .col-auto
              img(src='@/assets/curso/tema2/1.svg', style="width: 80px") 
            .col
              p.mb-0 La integración eficaz de una cadena productiva permite llevar una organización sólida en el gremio, contribuye a un desarrollo económico y fomenta el empleo en las diversas áreas de producción.  
    .separador.mb-5
    #t_9_1
    .titulo-segundo.color-acento-contenido
      h2 9.1 Registros
    p En la producción ganadera es indispensable realizar anotaciones de las actividades llevadas a cabo en cada una de las fases de producción, para realizar un seguimiento constante y oportuno, además de un análisis de resultados.
    p.mb-5 En el caso de las explotaciones ganaderas dichos registros son útiles y necesarios, si se tiene en cuenta:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Reconocimiento")
        .row.align-items-center.p-4
          .col-auto
            img(src='@/assets/curso/tema9/img1.png', style="width: 250px")
          .col
            h4 Reconocimiento
            p.mb-0 Permitirá conocer cuáles animales son más productivos y cuáles deben descartarse por su baja productividad.
      .tarjeta.color-acento-contenido.p-4(titulo="Variedad de registros")
        .row.align-items-center.p-4
          .col-auto
            img(src='@/assets/curso/tema9/img3.png', style="width: 250px")
          .col
            h4 Variedad de registros
            p.mb-0 Existen numerosos tipos de registros útiles según el caso; estos deben contar con anotaciones entorno al consumo, peso de crías, montas, partos, producción de leche, medicamentos, tratamientos, sacrificio.
      .tarjeta.color-acento-contenido.p-4(titulo="Índices más importantes")
        .row.align-items-center.p-4
          .col-auto
            img(src='@/assets/curso/tema9/img2.png', style="width: 250px")
          .col
            h4 Índices más importantes
            p.mb-0 Conversión alimenticia, partos/hembra/año, destetados/hembra/año, porcentaje mortalidad, producción de leche/lactancia, ganancia diaria.
    .separador.mb-5
    #t_9_2
    .titulo-segundo.color-acento-contenido
      h2 9.2 Análisis económico
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/tema9/img4.png', style="width: 350px").m-auto(data-aos="zoom-in-left")
      .col-lg-6
        p El análisis económico del sistema de producción ganadero se lleva a cabo a través de diversos lineamientos como lo son la cuantificación y medición de los resultados obtenidos durante los diferentes enfoques productivos, esto permite evaluar e identificar los componentes que acceden a un mejoramiento constante.
        .cajon.color-primario.p-4
          p.mb-0 Aunque es difícil establecer un patrón de costos y gastos en Colombia, puesto que la compra y venta de insumos cada día presenta diversas variaciones, los costos de variación van ligados a la suma de valores en conjunto con los bienes y el trabajo ya sea manual o mecánico, dichos costos se dividen en costos fijos y variables.
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.p-5.bg13
        p.text-center.mb-0 #[b Costos fijos]
      .col-lg-6.p-5.bg14
        p.mb-0 Los costos fijos pertenecen al grupo de gastos que la empresa tiene, mes a mes, y que no generan ningún bien adicional como lo son el pago a veterinarios, ordeñadores, etc.
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.p-5.bg13
        p.text-center.mb-0 #[b Costos variables]
      .col-lg-6.p-5.bg14
        p.my-2 Los costos variables dependen del nivel de productividad y venta de los diferentes productos ligados al sector ganadero.
    p.mb-5 Se presentan algunos aspectos clave, relacionados con el análisis económico de la producción ganadera; recuerde tomar nota de lo más destacado en su libreta personal de apuntes:
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        img(src='@/assets/curso/tema9/img5.png', style="width: 350px").m-auto(data-aos="zoom-in")
      .col-lg-6
        LineaTiempoD.color-primario
          p(numero="1" titulo="Estimación de los costos de producción") Este tipo de costos hacen parte del uso de recursos productivos como lo son: administración, tierra, capital.
          p(numero="2" titulo="Utilidad de los costos de producción") Cálculo de la necesidades de insumos productivos y de niveles esperados de rentabilidad y productividad.
          p(numero="3" titulo="Impactos") Acciones de política agropecuaria sobre provisión de insumos a nivel regional, niveles de inversión requeridos en proyectos de desarrollo regional.
          p(numero="4" titulo="Tecnificación") Pautas para la investigación, mejoramiento para lograr mayor eficiencia técnica y económica.
          p(numero="5" titulo="Estructura de costos") Indica el porcentaje del costo de las diferentes prácticas de producción utilizadas; la estructura de costos varía entre diferentes productos.
          p(numero="6" titulo="Análisis de recursos") Se debe llevar un análisis intensivo de los recursos, prácticas y producción de las diversas prácticas que se realizan en la finca. Con ese análisis se logra un porcentaje estimado de gastos en la producción.
          p(numero="7" titulo="Gastos del sistema ganadero colombiano") Según estudios realizados por FEDEGAN, el 49.30% de los costos totales son destinados para la mano de obra y los insumos de consumo corriente están representados en la nutrición y la sanidad en un 13.20%.

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
