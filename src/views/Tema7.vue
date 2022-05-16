<<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Empresa ganadera bovina de carne

    p.mb-3 La seguridad y salud en el trabajo es de suma importancia en el manejo de la explotación ganadera sin importar su propósito; conocer los diferentes peligros a los que se exponen los trabajadores de este gremio, permite prevenir accidentes y enfermedades de origen laboral. En el sector ganadero, los riesgos más comunes suelen ser los locativos, biológicos y mecánicos, ver tabla.

    .row.mb-5.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Normativa sobre seguridad y salud en el trabajo y los riesgos en ganadería de carne
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-right")
          table
            tbody
              tr
                td.bg03 <strong>Riesgos generales en el sector ganadero</strong>
                td Resolución 000550 del 28 de febrero de 2006. Control de la brucelosis en Colombia. <br>	Resolución 072 de 2007. <br> Resolución 072 de 2007. <br> Resolución 2905 de 2007. Resolución 2905 de 2007. Decreto 1500 de 2007. Decreto 2278 de 1982.
                td En relación con la seguridad y la salud en el trabajo.
              td.bg6 <strong>FEDEGAN junto con entidades como el ICA se han encargado de enfocar acciones de apoyo sanitario que deben cumplir las plantas de beneficio y los carniceros, con el fin de cumplir las exigencias tanto nacionales como internacionales para los consumidores de productos cárnicos.</strong>
              tr
                td.bg03 <strong>Decreto 1500 de 2007</strong>
                td Por la cual se establece el reglamento técnico, a través del cual se crea el Sistema oficial de inspección, vigilancia y control de carne, productos cárnicos comestibles y derivados cárnicos destinados para el consumo humano.
              tr
                td.bg03 <strong>Resolución 072 de 2007</strong>
                td Por la cual se establece el manual de buenas prácticas de manejo para la producción y obtención de piel de ganado bovino y bufalino.
              tr
                td.bg03 <strong>Resolución 2905 de 2007</strong>
                td Por la cual se establece el reglamento técnico sobre los requisitos sanitarios y de inocuidad de la carne y productos cárnicos comestibles de las especies bovinas y bufalinas destinados para el consumo humano.
              tr
                td.bg03 <strong>Resolución 18119 de 2007</strong>
                td Por la cual se reglamentan los requisitos del Plan gradual de cumplimiento para las plantas de beneficio y desposte de bovinos y bufalinos.
              tr
                td.bg03 <strong>Decreto 2278 de 1982</strong>
                td (colspan="2") Por la cual se reglamenta parcialmente el título V de la Ley 09 de 1979 en cuanto al sacrificio de animales de abasto público o para consumo humano y el procesamiento, transporte y comercialización de su carne.
              tr
                td.bg03 <strong>Decreto 0616 de 2006</strong>
                td Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano, que se obtenga, procese, envase, transporte, comercialice, expenda, importe o exporte en el país.
              tr
                td.bg03 <strong>Decreto 02838 de 2006</strong>
                td Por el cual se modifica parcialmente el Decreto 616 de 2006 y se dictan otras disposiciones.
              tr
                td.bg03 <strong>Decreto 2964 de 2008</strong>
                td Por el cual se modifica parcialmente el Decreto 2838 de 2006 y se dictan otras disposiciones.

    p.mb-5 En lo relativo a la indumentaria necesaria en ganadería de carne, los implementos acordes a la normativa de SST del Manejo integrado de plagas (MIP) buscan proteger la salud del trabajador, para ello se debe de tener en cuenta el uso adecuado y la calidad de los siguientes elementos:

    .row.mb-5.justify-content-center
      .col-md-1
        img.img131(src='@/assets/curso/tema7/1.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Botas de caucho
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/2.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p  Overol antifluido
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/3.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Guantes
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/4.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Gorro
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/5.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Tapabocas
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/6.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Gafas
      .col-md-1.col.ms-5
        img.img131(src='@/assets/curso/tema7/7.svg', alt='Texto que describa la imagen' style='width: 190px').mb-3.m-auto.hoverScale
        .text-center: p Delantal o bata industrial

    .row(data-aos="zoom-in-up").justify-content-center.mb-5
      .col-md-10
        TabsC.color-acento-contenido
          .py-5.py-md-10.bgr_3.p-4(titulo=" 01. ¡Importante!")
            p Estos implementos son de carácter obligatorio para el manejo de productos cárnicos, además de tener recomendaciones como productos desinfectantes y utensilios para la limpieza, de tipo industrial.
          .py-5.py-md-10.bgr_3.p-4(titulo="02. ¡Recuerde!")
            p Asegurar el área de ventilación e iluminación, la calidad del agua utilizada en las áreas de producción, plan de contingencia en caso de cortes eléctricos, mantenimientos preventivos en equipo y maquinaria para cárnicos, etc. 
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
