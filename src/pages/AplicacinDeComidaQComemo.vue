<template>
  <div :class="$style.aplicacinDeComidaQComemo">
    <header :class="$style.typeheaderWithSearchbarAnd">
      <div :class="$style.brand">
        <img :class="$style.icon" alt="" src="/icon.svg" />
        <div :class="$style.brandname">QComemos</div>
      </div>
      <div :class="$style.inputForm">
        <div :class="$style.textContainer">
          <div :class="$style.placeholderText">Buscar</div>
        </div>
      </div>
      <div :class="$style.navLinks">
        <div :class="$style.navLink">
          <div :class="$style.navLabel">Categorías</div>
          <img
            :class="$style.smallIconIcon"
            alt=""
            src="/small-icon--icon.svg"
          />
        </div>
        <div :class="$style.button">
          <div :class="$style.textContainer1">
            <div :class="$style.cta">Regístrate</div>
          </div>
        </div>
      </div>
    </header>
    <TypeInvertedHeroWithFullS /><Property1BigNumbersJustTe /><TypeTitleWithDescription /><Property1ImageBackgroundS /><Property1CardsTestimonials /><FrameComponent />
    <footer />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TypeInvertedHeroWithFullS from "../components/TypeInvertedHeroWithFullS.vue";
  import Property1BigNumbersJustTe from "../components/Property1BigNumbersJustTe.vue";
  import TypeTitleWithDescription from "../components/TypeTitleWithDescription.vue";
  import Property1ImageBackgroundS from "../components/Property1ImageBackgroundS.vue";
  import Property1CardsTestimonials from "../components/Property1CardsTestimonials.vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "AplicacinDeComidaQComemo",
    components: {
      TypeInvertedHeroWithFullS,
      Property1BigNumbersJustTe,
      TypeTitleWithDescription,
      Property1ImageBackgroundS,
      Property1CardsTestimonials,
      FrameComponent,
      Footer,
    },
  });
</script>
<style module>
  .icon {
    height: 24px;
    width: 24px;
    position: relative;
    min-height: 24px;
  }
  .brandname {
    position: relative;
    line-height: 150%;
    display: inline-block;
    min-width: 83px;
    white-space: nowrap;
  }
  .brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs);
    gap: var(--gap-5xs);
  }
  .placeholderText {
    position: relative;
    line-height: 150%;
    display: inline-block;
    min-width: 47px;
    white-space: nowrap;
  }
  .textContainer {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 3px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .inputForm {
    align-self: stretch;
    width: 909px;
    border-radius: var(--br-5xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-gainsboro);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) 7px;
    max-width: 100%;
    font-size: var(--font-size-sm);
    color: var(--color-dimgray);
    font-family: var(--font-inter);
  }
  .navLabel {
    position: relative;
    line-height: 160%;
    display: inline-block;
    min-width: 57px;
  }
  .smallIconIcon {
    height: 12px;
    width: 12px;
    position: relative;
  }
  .navLink {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-base);
    gap: var(--gap-5xs);
  }
  .cta {
    position: relative;
    line-height: 160%;
    display: inline-block;
    min-width: 55px;
  }
  .textContainer1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-9xs);
  }
  .button {
    border-radius: var(--br-5xs);
    background-color: var(--color-darkorange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px var(--padding-xl);
    text-align: center;
    color: var(--color-whitesmoke-100);
  }
  .navLinks {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-xs);
    font-size: var(--font-size-xs);
  }
  .typeheaderWithSearchbarAnd {
    align-self: stretch;
    background-color: var(--color-white);
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-5xs);
    box-sizing: border-box;
    top: 0;
    z-index: 99;
    position: sticky;
    max-width: 100%;
    gap: 0px;
    row-gap: 20px;
    text-align: left;
    font-size: 16px;
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }
  .aplicacinDeComidaQComemo {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-61xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
</style>
