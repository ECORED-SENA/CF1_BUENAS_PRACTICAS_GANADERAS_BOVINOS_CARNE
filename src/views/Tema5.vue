<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recursos para implementación BPG
    p.mb-5 #[b La implementación de las BGP requiere la aplicación de algunos recursos que favorecen la prevención y control de enfermedades: registro y control de animales, aislamiento de animales enfermos, asepsia del lugar, bienestar animal y personal].
    p.mb-5 En el siguiente recurso se muestra la clasificación de los recursos para la implementación de las BPG:
    .row.mb-5.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-7
        img(src='@/assets/curso/tema5/1.svg', alt='Texto que describa la imagen')(data-aos="fade-right") 
    p.mb-5 En cuanto a tipos de recursos, uso y manejo dentro de las BPG se presentan algunos aspectos a tener en cuenta:
    .row.justify-content-center(data-aos="zoom-in")
      .col-9.col-lg-4.mb-3.mb-lg-0.bg11
        .row.m-1
          .col-12.p-3.bgtitulo
            h3.text-center Sanidad
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Manejo de enfermedades, control de residuos y menos medicamentos veterinarios.
          .col-12.px-0
            img(src="@/assets/curso/tema5/2.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-4.mb-3.mb-lg-0.bg11
        .row.m-1
          .col-12.p-3.bgtitulo
            h3.text-center Ambiental
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Conservación, fuentes hídricas, bienestar animal, minimización del  impacto ambiental.
          .col-12.px-0
            img(src="@/assets/curso/tema5/3.png"  alt='Texto que describa la imagen')
      .col-9.col-lg-4.bg11
        .row.m-1
          .col-12.p-3.bgtitulo
            h3.text-center Socioeconómico
          .col-12.p-3.bgcontenido(style="height: 130px")
            p Aumento de calidad y productividad.
          .col-12.px-0
            img(src="@/assets/curso/tema5/4.png"  alt='Texto que describa la imagen')

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
