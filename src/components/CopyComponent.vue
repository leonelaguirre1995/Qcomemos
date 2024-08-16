<template>
  <div :class="$style.copyComponent">
    <div :class="$style.heading">{{heading}}</div>
    <div :class="$style.itemText">
      <div :class="$style.subheading">{{subheading}}</div>
      <h3 :class="$style.subheading1">{{subheading1}}</h3>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CopyComponent",
    props: {
      heading: { type: String },
      subheading: { type: String },
      subheading1: { type: String },
    },
  });
</script>
<style module>
  .heading {
    flex: 1;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 119px;
    font-weight: 800;
    display: inline-block;
    min-width: 96px;
    max-width: 280px;
  }
  .subheading {
    align-self: stretch;
    position: relative;
    line-height: 150%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .subheading1 {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-3xl);
    line-height: 31px;
    font-weight: 400;
    font-family: inherit;
    color: var(--color-dimgray);
  }
  .itemText {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-base);
    min-width: 220px;
    max-width: 100%;
    font-size: var(--font-size-lg);
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }
  .copyComponent {
    align-self: stretch;
    border-bottom: 1px solid var(--color-gainsboro);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-13xl) var(--padding-11xs) var(--padding-11xl) 0px;
    gap: 40px 38px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-89xl);
    color: var(--color-darkorange);
    font-family: var(--font-playfair-display);
  }

  @media screen and (max-width: 750px) {
    .heading {
      font-size: var(--font-size-35xl);
      line-height: 71px;
    }

    .copyComponent {
      gap: var(--gap-lgi);
    }
  }
  @media screen and (max-width: 450px) {
    .heading {
      font-size: var(--font-size-13xl);
      line-height: 48px;
      max-width: 100%;
    }

    .subheading1 {
      font-size: var(--font-size-lg);
      line-height: 25px;
    }
  }
</style>
