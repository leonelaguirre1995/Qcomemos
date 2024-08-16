<template>
  <footer :class="$style.footer">
    <div :class="$style.footerContent">
      <div :class="$style.content">
        <div :class="$style.column">
          <div :class="$style.brandname">QComemos</div>
          <div :class="$style.content1">
            <div :class="$style.content2">
              <div :class="$style.heading">Dirección:</div>
              <div :class="$style.heading">
                Nivel 1, 12 Calle Ejemplo, Ciudad, País
              </div>
            </div>
            <div :class="$style.content2">
              <div :class="$style.heading">Contacto:</div>
              <div :class="$style.heading">
                <p :class="$style.p">1800 123 4567</p>
                <p :class="$style.p">info@qcomemos.com</p>
              </div>
            </div>
            <div :class="$style.socialLinks">
              <img
                :class="$style.iconFacebook"
                loading="lazy"
                alt=""
                src="/icon--facebook.svg"
              />
              <img
                :class="$style.iconFacebook"
                loading="lazy"
                alt=""
                src="/icon--instagram.svg"
              />
              <img
                :class="$style.iconFacebook"
                loading="lazy"
                alt=""
                src="/icon--x.svg"
              />
              <img
                :class="$style.iconFacebook"
                loading="lazy"
                alt=""
                src="/icon--linkedin.svg"
              />
              <img
                :class="$style.iconFacebook"
                loading="lazy"
                alt=""
                src="/icon--youtube.svg"
              />
            </div>
          </div>
        </div>
        <div :class="$style.column1">
          <div :class="$style.linkList">
            <div :class="$style.heading">Enlace Uno</div>
            <div :class="$style.heading">Enlace Dos</div>
            <div :class="$style.heading">Enlace Tres</div>
            <div :class="$style.heading">Enlace Cuatro</div>
          </div>
          <div :class="$style.linkList">
            <div :class="$style.heading">Enlace Cinco</div>
            <div :class="$style.heading">Enlace Seis</div>
            <div :class="$style.heading">Enlace Siete</div>
            <div :class="$style.heading">Enlace Ocho</div>
          </div>
        </div>
      </div>
      <div :class="$style.footerLegal">
        <div :class="$style.divider" />
        <div :class="$style.row">
          <div :class="$style.brandNameAll">
            © 2024 QComemos. Todos los derechos reservados.
          </div>
          <div :class="$style.footerLinks">
            <div :class="$style.link8">Política de Privacidad</div>
            <div :class="$style.link8">Términos de Servicio</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Footer",
  });
</script>
<style module>
  .brandname {
    align-self: stretch;
    position: relative;
    line-height: 150%;
  }
  .heading {
    align-self: stretch;
    position: relative;
    line-height: 160%;
  }
  .content2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .p {
    margin: 0;
  }
  .iconFacebook {
    height: 24px;
    width: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 24px;
  }
  .socialLinks {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .content1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--font-size-sm);
  }
  .column {
    width: 864px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    max-width: 100%;
  }
  .linkList {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .column1 {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    min-width: 146px;
    font-size: var(--font-size-sm);
  }
  .content {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-45xl);
    max-width: 100%;
  }
  .divider {
    align-self: stretch;
    height: 1px;
    position: relative;
    background-color: var(--color-gray-100);
  }
  .brandNameAll {
    position: relative;
    line-height: 160%;
    display: inline-block;
    max-width: 100%;
  }
  .link8 {
    position: relative;
    line-height: 160%;
  }
  .footerLinks {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .row {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .footerLegal {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
  .footerContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-61xl);
    max-width: 100%;
  }
  .footer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-45xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 1275px) {
    .content {
      gap: var(--gap-13xl);
    }

    .footerContent {
      gap: var(--gap-21xl);
    }
  }
  @media screen and (max-width: 750px) {
    .content {
      gap: var(--gap-base);
    }

    .row {
      flex-wrap: wrap;
    }

    .footerLegal {
      gap: var(--gap-base);
    }

    .footerContent {
      gap: var(--gap-xl);
    }

    .footer {
      padding-left: var(--padding-13xl);
      padding-right: var(--padding-13xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .column {
      gap: var(--gap-base);
    }
  }
</style>
