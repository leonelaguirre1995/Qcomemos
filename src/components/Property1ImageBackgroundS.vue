<template>
  <section :class="$style.property1imageBackgroundS">
    <img :class="$style.imageLummi" alt="" src="/image--lummi-1@2x.png" />
    <div :class="$style.copyComponent">
      <div :class="$style.signupHeadingContainer">
        <h1 :class="$style.signUpHeading">Regístrate</h1>
        <div :class="$style.subheading">¡Empieza ahora!</div>
      </div>
      <button :class="$style.googleLogin" @click="onGoogleLoginClick">
        <img :class="$style.googleIcon" alt="" src="/google-icon.svg" />
        <div :class="$style.continueWithGoogleWrapper">
          <div :class="$style.continueWithGoogle">Continuar con Google</div>
        </div>
      </button>
      <div :class="$style.signupDivider">
        <div :class="$style.lineWrapper">
          <div :class="$style.line" />
        </div>
        <div :class="$style.or">or</div>
        <div :class="$style.lineWrapper">
          <div :class="$style.line" />
        </div>
      </div>
      <div :class="$style.form">
        <div :class="$style.input">
          <div :class="$style.label">Correo electrónico</div>
          <div :class="$style.inputForm">
            <input
              :class="$style.textContainer"
              placeholder="Contraseña"
              type="text"
            />
          </div>
        </div>
        <button :class="$style.button">
          <div :class="$style.textContainer1">
            <div :class="$style.cta">Continuar con Email</div>
          </div>
        </button>
      </div>
      <div :class="$style.byContinuingYou">
        Al continuar, aceptas nuestros Términos de Servicio y Política de
        Privacidad
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1ImageBackgroundS",
    methods: {
      onGoogleLoginClick() {
        window.open("https://myaccount.google.com/");
      },
    },
  });
</script>
<style module>
  .imageLummi {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .signUpHeading {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    line-height: 47px;
    font-weight: 800;
    font-family: inherit;
  }
  .subheading {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-lg);
    line-height: 150%;
    font-family: var(--font-fira-sans);
    color: var(--color-dimgray);
  }
  .signupHeadingContainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    font-size: var(--font-size-17xl);
    font-family: var(--font-playfair-display);
  }
  .googleIcon {
    height: 24px;
    width: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 24px;
  }
  .continueWithGoogle {
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 160%;
    font-family: var(--font-fira-sans);
    color: var(--color-gray-100);
    text-align: center;
  }
  .continueWithGoogleWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .googleLogin {
    cursor: pointer;
    border: 1px solid var(--color-gainsboro);
    padding: var(--padding-sm) var(--padding-xl);
    background-color: var(--color-whitesmoke-100);
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-xs);
  }
  .line {
    align-self: stretch;
    height: 1px;
    position: relative;
    background-color: var(--color-gainsboro);
    overflow: hidden;
    flex-shrink: 0;
  }
  .lineWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
    min-width: 116px;
  }
  .or {
    position: relative;
    line-height: 160%;
    display: inline-block;
    min-width: 12px;
  }
  .signupDivider {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-5xl);
    color: var(--color-dimgray);
  }
  .label {
    align-self: stretch;
    position: relative;
    line-height: 160%;
  }
  .textContainer {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    height: 22px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
    font-family: var(--font-fira-sans);
    font-size: var(--font-size-sm);
    color: var(--color-dimgray);
    min-width: 230px;
    max-width: 100%;
  }
  .inputForm {
    align-self: stretch;
    border-radius: var(--br-9xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-gainsboro);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-mini);
    max-width: 100%;
  }
  .input {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-9xs);
    max-width: 100%;
  }
  .cta {
    flex: 1;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 160%;
    font-family: var(--font-fira-sans);
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    max-width: 100%;
  }
  .textContainer1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .button {
    cursor: pointer;
    border: none;
    padding: var(--padding-base) var(--padding-5xl);
    background-color: var(--color-darkorange);
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100%;
  }
  .form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
  }
  .byContinuingYou {
    align-self: stretch;
    position: relative;
    line-height: 160%;
    color: var(--color-dimgray);
  }
  .copyComponent {
    width: 480px;
    border-radius: var(--br-13xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl);
    box-sizing: border-box;
    gap: var(--gap-base);
    max-width: 480px;
    z-index: 1;
  }
  .property1imageBackgroundS {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-101xl) var(--padding-xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-xs);
    color: var(--color-gray-100);
    font-family: var(--font-fira-sans);
  }

  @media screen and (max-width: 750px) {
    .signUpHeading {
      font-size: var(--font-size-10xl);
      line-height: 37px;
    }

    .copyComponent {
      max-width: 100%;
    }

    .property1imageBackgroundS {
      padding-top: var(--padding-59xl);
      padding-bottom: var(--padding-59xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .signUpHeading {
      font-size: var(--font-size-3xl);
      line-height: 28px;
    }

    .or {
      width: 100%;
      height: 12px;
    }

    .copyComponent {
      padding-top: var(--padding-2xl);
      padding-bottom: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
</style>
