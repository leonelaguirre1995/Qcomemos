<template>
  <div :class="$style.feature">
    <div :class="$style.iconContainer">
      <div :class="$style.bg" />
      <img :class="$style.iconIcon" loading="lazy" alt="" :src="iconIcon" />
    </div>
    <div :class="$style.textContainer">
      <div :class="$style.featureTitle">{{featureTitle}}</div>
      <div :class="$style.featureDescription" :style="featureDescriptionStyle">
        {{featureDescription}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Feature",
    props: {
      iconIcon: { type: String },
      featureTitle: { type: String },
      featureDescription: { type: String },
      propMinHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      featureDescriptionStyle() {
        return {
          minHeight: this.propMinHeight,
        };
      },
    },
  });
</script>
<style module>
  .bg {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 24px);
    left: calc(50% - 23.7px);
    border-radius: 50%;
    background-color: var(--color-papayawhip);
  }
  .iconIcon {
    height: 24px;
    width: 24px;
    position: relative;
    z-index: 1;
  }
  .iconContainer {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-xs);
  }
  .featureTitle {
    align-self: stretch;
    position: relative;
    line-height: 150%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .featureDescription {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 160%;
    color: var(--color-dimgray);
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .textContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .feature {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    min-width: 272px;
    max-width: 400px;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 1275px) {
    .feature {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1100px) {
    .feature {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    .feature {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .feature {
      max-width: 100%;
    }
  }
</style>
