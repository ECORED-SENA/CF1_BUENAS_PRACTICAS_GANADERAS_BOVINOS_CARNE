<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Organización de una empresa de ganado bovino

    p.mb-5 Una empresa de ganado bovino busca tener un adecuado control estructural, funcional y productivo, con el fin de generar una competitividad constante a nivel local, nacional e internacional en la producción de los diversos productos derivados del ganado.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-lg-2.bb
              img(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen') 
            .col-lg-10
              p.mt-3 La integración eficaz de una cadena productiva permite llevar una organización sólida en el gremio, contribuye a un desarrollo económico y fomenta el empleo en las diversas áreas de producción.  
            
    Separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 9.1	Registros
    p En la producción ganadera es indispensable realizar anotaciones de las actividades llevadas a cabo en cada una de las fases de producción, para realizar un seguimiento constante y oportuno, además de un análisis de resultados.
    p En el caso de las explotaciones ganaderas dichos registros son útiles y necesarios, si se tiene en cuenta:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Térmico con combustión")
        .col-md-3
          img(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen')
          h4 Térmico con combustión
          p Utiliza energía térmica a temperaturas suficientes para causar combustión o pirólisis del residuo.
      

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
