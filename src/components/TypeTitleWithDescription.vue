<template>
  <section :class="$style.typetitleWithDescription">
    <div :class="$style.content">
      <div :class="$style.headingContainer">
        <div :class="$style.headingText">
          <div :class="$style.subtitle">Características</div>
          <h1 :class="$style.heading">Diseño Visual</h1>
        </div>
        <div :class="$style.benefitsDescription">
          Nuestra app está diseñada para ofrecerte la mejor experiencia de
          usuario.
        </div>
      </div>
      <div :class="$style.featureGrid">
        <Feature
          iconIcon="/icon--icon.svg"
          featureTitle="Variedad de opciones"
          featureDescription="Encuentra una amplia gama de opciones de comida para todos los gustos."
        /><Feature
          iconIcon="/icon--icon-1.svg"
          featureTitle="Busquedas rápidas"
          featureDescription="Realiza busqueda rapidas y sencillas, con las mejores valoraciones del mercado."
          propMinHeight="unset"
        /><Feature
          iconIcon="/icon--icon-2.svg"
          featureTitle="Soporte 24/7"
          featureDescription="Estamos disponibles para ayudarte en cualquier momento."
          propMinHeight="44px"
        /><Feature
          iconIcon="/icon--icon-3.svg"
          featureTitle="Ofertas exclusivas"
          featureDescription="Accede a ofertas y descuentos exclusivos solo para usuarios de la app."
          propMinHeight="unset"
        /><Feature
          iconIcon="/icon--icon-4.svg"
          featureTitle="Fácil de usar"
          featureDescription="Nuestra interfaz es intuitiva y fácil de navegar."
          propMinHeight="unset"
        /><Feature
          iconIcon="/icon--icon-5.svg"
          featureTitle="Excelente comunidad"
          featureDescription="Encontra opiones y danos las tuyas, para poder seguir haciendo crecer la comunidad!"
          propMinHeight="unset"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Feature from "./Feature.vue";

  export default defineComponent({
    name: "TypeTitleWithDescription",
    components: { Feature },
  });
</script>
<style module>
  .subtitle {
    align-self: stretch;
    position: relative;
    line-height: 150%;
  }
  .heading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-32xl);
    letter-spacing: -0.02em;
    line-height: 120%;
    font-weight: 700;
    font-family: var(--font-inter);
    color: var(--color-gray-100);
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .headingText {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-5xs);
    max-width: 560px;
  }
  .benefitsDescription {
    align-self: stretch;
    position: relative;
    line-height: 150%;
    color: var(--color-dimgray);
  }
  .headingContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    max-width: 800px;
  }
  .featureGrid {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 40px 38px;
    min-height: 326px;
    max-width: 100%;
    color: var(--color-gray-100);
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-37xl);
    max-width: 1280px;
  }
  .typetitleWithDescription {
    align-self: stretch;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-101xl) var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-darkorange);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 1275px) {
    .content {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1100px) {
    .headingContainer {
      max-width: 100%;
    }

    .content {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-22xl);
      line-height: 49px;
    }

    .headingText {
      max-width: 100%;
    }

    .featureGrid {
      gap: var(--gap-lgi);
    }

    .content {
      gap: var(--gap-9xl);
      max-width: 100%;
    }

    .typetitleWithDescription {
      gap: var(--gap-xl);
      padding-top: var(--padding-59xl);
      padding-bottom: var(--padding-59xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-12xl);
      line-height: 37px;
    }

    .content {
      max-width: 100%;
    }

    .typetitleWithDescription {
      padding-top: var(--padding-32xl);
      padding-bottom: var(--padding-32xl);
      box-sizing: border-box;
    }
  }
</style>
