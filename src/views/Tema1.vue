<<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa ganadera bovina de carne

    .row.bgO1
      .col-lg-07
        p.mb-3 Combina en su operación productiva varios factores importantes como el diagnóstico, las metas, la planificación, el control, entre otros, para un adecuado funcionamiento de la empresa bovina. Se debe implementar una técnica o manejo especial que mejore la calidad del producto, en este caso la producción de carne, destinada a un mercado exigente y muy competitivo a nivel local y global.
        p.mb-3 Las empresas ganaderas son una unidad económica de producción en la cual se debe tener en cuenta:
      .col-lg-5
        figure
         img(src='@/assets/curso/tema1/img01.png', alt='Texto que describa la imagen')

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
