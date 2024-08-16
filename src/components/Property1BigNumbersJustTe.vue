<template>
  <section :class="$style.property1bigNumbersJustTe">
    <div :class="$style.container">
      <h1 :class="$style.heading">Cómo funciona</h1>
      <CopyComponent
        heading="1"
        subheading="Elige tu comida"
        subheading1="Selecciona entre una variedad de categorías y opciones."
      /><CopyComponent
        heading="2"
        subheading="Elige el lugar "
        subheading1="Selecciona el lugar de acuerdo a sus reseñas y puntaje."
      /><CopyComponent
        heading="3"
        subheading="Utiliza tu localización para llegar al lugar elegido"
        subheading1="Dirigete hacia el lugar elegido y disfruta de la comida!"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import CopyComponent from "./CopyComponent.vue";

  export default defineComponent({
    name: "Property1BigNumbersJustTe",
    components: { CopyComponent },
  });
</script>
<style module>
  .heading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.01em;
    line-height: 78px;
    font-weight: 800;
    font-family: inherit;
  }
  .container {
    width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-21xl);
    max-width: 1024px;
  }
  .property1bigNumbersJustTe {
    align-self: stretch;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-77xl) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-53xl);
    color: var(--color-gray-100);
    font-family: var(--font-playfair-display);
  }

  @media screen and (max-width: 1100px) {
    .container {
      max-width: 100%;
    }

    .property1bigNumbersJustTe {
      padding-top: var(--padding-43xl);
      padding-bottom: var(--padding-43xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-39xl);
      line-height: 62px;
    }

    .container {
      gap: var(--gap-xl);
    }

    .property1bigNumbersJustTe {
      gap: var(--gap-xl);
      padding-top: var(--padding-21xl);
      padding-bottom: var(--padding-21xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-24xl);
      line-height: 47px;
    }
  }
</style>
