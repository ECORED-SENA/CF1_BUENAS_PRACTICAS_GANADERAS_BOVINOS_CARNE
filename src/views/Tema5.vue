<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recursos para implementación BPG

    p.mb-5 <strong>La implementación de las BGP requiere la aplicación de algunos recursos que favorecen la prevención y control de enfermedades: registro y control de animales, aislamiento de animales enfermos, asepsia del lugar, bienestar animal y personal.</strong>.
    p.mb-5 En el siguiente recurso se muestra la clasificación de los recursos para la implementación de las BPG:
    .row.mb-5.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-7
        img(src='@/assets/curso/tema5/1.svg', alt='Texto que describa la imagen')(data-aos="fade-right") 
    p.mb-5 En cuanto a tipos de recursos, uso y manejo dentro de las BPG se presentan algunos aspectos a tener en cuenta:

  
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in")
        h3.text-center Sanidad
        p Manejo de enfermedades, control de residuos y menos medicamentos veterinarios.
        img(src="@/assets/curso/tema5/2.png"  alt='Texto que describa la imagen')(data-aos="fade-right").mb-3
      .col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in")
        h3.text-center Ambiental
        p Conservación, fuentes hídricas, bienestar animal, minimización del  impacto ambiental.
        img(src="@/assets/curso/tema5/3.png"  alt='Texto que describa la imagen')(data-aos="fade-right").mb-3
      .col-lg-4(data-aos="zoom-in")
        h3.text-center Socioeconómico
        p Aumento de calidad y productividad.
        img(src="@/assets/curso/tema5/4.png"  alt='Texto que describa la imagen')(data-aos="fade-right").mb-3
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
