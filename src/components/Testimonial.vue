<template>
  <div :class="$style.testimonial">
    <img
      :class="$style.imageLummiCategoryavata"
      loading="lazy"
      alt=""
      :src="imageLummiCategoryavatars"
    />
    <div :class="$style.name">{{name1}}</div>
    <blockquote :class="$style.shortTestimonial">
      {{shortTestimonial}}
    </blockquote>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Testimonial",
    props: {
      imageLummiCategoryavatars: { type: String },
      name1: { type: String },
      shortTestimonial: { type: String },
    },
  });
</script>
<style module>
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
    line-height: 160%;
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
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 1100px) {
    .testimonial {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .shortTestimonial {
      font-size: var(--font-size-lg);
      line-height: 25px;
    }
  }
</style>
