<template>
  <section :class="$style.typeimageBackgroundTwoColuWrapper">
    <div :class="$style.typeimageBackgroundTwoColu">
      <div :class="$style.twoColumnImageContainer">
        <img
          :class="$style.imageLummiLuminancedar"
          loading="lazy"
          alt=""
          src="/image--lummi-luminancedark@2x.png"
        />
        <div :class="$style.overlay" />
      </div>
      <div :class="$style.content">
        <div :class="$style.column">
          <div :class="$style.subheading">Slogan</div>
          <h1 :class="$style.heading">Tu próximo lugar favorito</h1>
        </div>
        <div :class="$style.column1">
          <div :class="$style.aMediumLength">
            Descubre y encuentra comida de tus restaurantes favoritos con
            nuestra app.
          </div>
          <div :class="$style.buttonCombo">
            <button :class="$style.ctaButton">
              <div :class="$style.textContainer">
                <div :class="$style.cta">Empieza ahora</div>
              </div>
            </button>
            <button :class="$style.secondaryButton">
              <div :class="$style.textContainer1">
                <div :class="$style.cta1">Más información</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
<style module>
  .imageLummiLuminancedar {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: var(--color-gray-200);
    z-index: 1;
  }
  .twoColumnImageContainer {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .subheading {
    position: relative;
    line-height: 160%;
    display: inline-block;
    min-width: 43px;
  }
  .heading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-37xl);
    line-height: 120%;
    font-weight: 800;
    font-family: var(--font-playfair-display);
    text-align: left;
  }
  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    min-width: 280px;
    max-width: 100%;
  }
  .aMediumLength {
    align-self: stretch;
    position: relative;
    line-height: 150%;
  }
  .cta {
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 160%;
    font-family: var(--font-fira-sans);
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    min-width: 93px;
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
    padding: var(--padding-xs-5) var(--padding-5xl);
    background-color: var(--color-darkorange);
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 140px;
  }
  .cta1 {
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 160%;
    font-family: var(--font-fira-sans);
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    min-width: 106px;
  }
  .textContainer1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-9xs);
  }
  .secondaryButton {
    cursor: pointer;
    border: 1px solid var(--color-darkgray);
    padding: var(--padding-sm) var(--padding-4xl);
    background-color: transparent;
    border-radius: var(--br-5xs);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 140px;
  }
  .buttonCombo {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-76xl) 0px 0px;
    box-sizing: border-box;
    gap: 16px 14px;
    max-width: 420px;
  }
  .column1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    min-width: 280px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-lg);
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    gap: 32px 78px;
    max-width: 100%;
    z-index: 2;
  }
  .typeimageBackgroundTwoColu {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-93xl) var(--padding-45xl);
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-21xl);
    max-width: 100%;
  }
  .typeimageBackgroundTwoColuWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-61xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-white);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 1275px) {
    .content {
      gap: var(--gap-20xl);
    }
  }
  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-26xl);
      line-height: 54px;
    }

    .content {
      gap: var(--gap-lgi);
    }

    .typeimageBackgroundTwoColu {
      gap: var(--gap-xl);
      padding-left: var(--padding-13xl);
      padding-right: var(--padding-13xl);
      box-sizing: border-box;
    }

    .typeimageBackgroundTwoColuWrapper {
      padding-bottom: var(--padding-33xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-15xl);
      line-height: 40px;
    }

    .buttonCombo {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .typeimageBackgroundTwoColu {
      padding-top: var(--padding-54xl);
      padding-bottom: var(--padding-54xl);
      box-sizing: border-box;
    }
  }
</style>
