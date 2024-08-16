<template>
  <section :class="$style.property1cardsTestimonials">
    <h1 :class="$style.heading">Testimonios</h1>
    <div :class="$style.testimonialsGrid">
      <div :class="$style.testimonial">
        <img
          :class="$style.imageLummiCategoryavata"
          loading="lazy"
          alt=""
          src="/image-lummi-categoryavatars@2x.png"
        />
        <div :class="$style.name">Ana Pérez, Cliente</div>
        <blockquote :class="$style.shortTestimonial">
          “La mejor app para encontrar comida cerca de mí.”
        </blockquote>
      </div>
      <Testimonial
        imageLummiCategoryavatars="/image-lummi-categoryavatars-1@2x.png"
        name1="Carlos Gómez, Usuario"
        shortTestimonial="“Rápido, fácil y con muchas opciones.”"
      /><Testimonial
        imageLummiCategoryavatars="/image-lummi-categoryavatars-2@2x.png"
        name1="María López, Cliente"
        shortTestimonial="“Excelente servicio y comida deliciosa.”"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Testimonial from "./Testimonial.vue";

  export default defineComponent({
    name: "Property1CardsTestimonials",
    components: { Testimonial },
  });
</script>
<style module>
  .heading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 120%;
    font-weight: 800;
    font-family: inherit;
  }
  .imageLummiCategoryavata {
    width: 120px;
    height: 120px;
    position: relative;
    border-radius: var(--br-29xl);
    object-fit: cover;
  }
  .name {
    align-self: stretch;
    position: relative;
    line-height: 150%;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .shortTestimonial {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-3xl);
    line-height: 140%;
    font-family: var(--font-fira-sans);
  }
  .testimonial {
    flex: 1;
    border-radius: var(--br-13xl);
    background-color: var(--color-whitesmoke-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-base);
    min-width: 264px;
    max-width: 360px;
  }
  .testimonialsGrid {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-25xl);
    box-sizing: border-box;
    gap: 40px 38px;
    max-width: 1248px;
    font-size: var(--font-size-sm);
    font-family: var(--font-inter);
  }
  .property1cardsTestimonials {
    align-self: stretch;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-101xl) var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-21xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-37xl);
    color: var(--color-gray-100);
    font-family: var(--font-playfair-display);
  }

  @media screen and (max-width: 1275px) {
    .testimonialsGrid {
      padding-left: var(--padding-3xl);
      padding-right: var(--padding-3xl);
      box-sizing: border-box;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1100px) {
    .testimonial {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-26xl);
      line-height: 54px;
    }

    .testimonialsGrid {
      gap: var(--gap-lgi);
    }

    .property1cardsTestimonials {
      gap: var(--gap-xl);
      padding-top: var(--padding-59xl);
      padding-bottom: var(--padding-59xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-15xl);
      line-height: 40px;
    }

    .shortTestimonial {
      font-size: var(--font-size-lg);
      line-height: 25px;
    }
  }
</style>
