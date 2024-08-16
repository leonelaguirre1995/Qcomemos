<template>
  <section :class="$style.typeinvertedHeroWithFullS">
    <div :class="$style.copyContainer">
      <div :class="$style.copyComponent">
        <div :class="$style.headingText">
          <h1 :class="$style.heading">Descubre qué comer hoy</h1>
          <h3 :class="$style.subheading">
            Encuentra las mejores opciones de comida cerca de ti.
          </h3>
        </div>
        <button :class="$style.ctaButton">
          <div :class="$style.textContainer">
            <div :class="$style.cta">Empieza ahora</div>
          </div>
        </button>
      </div>
    </div>
    <div :class="$style.imageContainer">
      <img
        :class="$style.imageLummi"
        loading="lazy"
        alt=""
        src="/image--lummi@2x.png"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TypeInvertedHeroWithFullS",
  });
</script>
<style module>
  .heading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    letter-spacing: -0.01em;
    line-height: 108%;
    font-weight: 800;
    font-family: inherit;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .subheading {
    margin: 0;
    position: relative;
    font-size: var(--font-size-3xl);
    line-height: 31px;
    font-weight: 400;
    font-family: var(--font-fira-sans);
    color: var(--color-gainsboro);
  }
  .headingText {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-base);
  }
  .cta {
    position: relative;
    font-size: var(--font-size-lg);
    line-height: 150%;
    font-family: var(--font-fira-sans);
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    min-width: 120px;
  }
  .textContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-9xs);
  }
  .ctaButton {
    cursor: pointer;
    border: none;
    padding: var(--padding-2xs) var(--padding-xl);
    background-color: var(--color-darkorange);
    width: 100%;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    max-width: 360px;
  }
  .copyComponent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-21xl);
    min-width: 304px;
    max-width: 720px;
  }
  .copyContainer {
    flex: 0.9067;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-101xl) var(--padding-29xl);
    box-sizing: border-box;
    min-width: 320px;
    max-width: 100%;
  }
  .imageLummi {
    height: 725px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .imageContainer {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    min-width: 320px;
    max-width: 100%;
    margin-left: -2px;
  }
  .typeinvertedHeroWithFullS {
    align-self: stretch;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-53xl);
    color: var(--color-whitesmoke-200);
    font-family: var(--font-playfair-display);
  }

  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-39xl);
      line-height: 62px;
    }

    .copyComponent {
      gap: var(--gap-xl);
      max-width: 100%;
    }

    .copyContainer {
      gap: var(--gap-base);
      padding: var(--padding-59xl) var(--padding-5xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-24xl);
      line-height: 47px;
    }

    .subheading {
      font-size: var(--font-size-lg);
      line-height: 25px;
    }
  }
</style>
