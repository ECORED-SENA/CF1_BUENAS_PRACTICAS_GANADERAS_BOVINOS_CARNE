<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos

    .row.justify-content-center.bg9
      .col-lg-5.mt-5
        p Los protocolos de bioseguridad ganadera son de suma importancia porque <strong>extienden una orientación clara y concisa de las actividades que se deben de llevar a cabo para la crianza, producción, mantenimiento y exportación</strong>.
        p En relación con los protocolos de bioseguridad en la finca ganadera tenga en cuenta las siguientes generalidades:
      .col-lg-4
        img(src='@/assets/curso/tema4/1.png', alt='Texto que describa la imagen') 
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
