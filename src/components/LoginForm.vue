<template>
  <div class="form-title-parent">
    <div class="form-title">
      <b class="sign-in">Sign in</b>
    </div>
    <div class="email-input">
      <div class="top-content1">
        <div class="input-labels5">
          <div class="label3">Label</div>
        </div>
        <div class="input-labels6">
          <div class="label3">Label</div>
        </div>
      </div>
      <div class="input-field-base1">
        <img class="left-icon2" alt="" src="/left-icon2.svg" />
        <img class="processorvisa-icon2" alt="" src="/processorvisa.svg" />
        <input
          class="input-labels7"
          type="email"
          placeholder="Email Adress"
          maxlength
          minlength
          required
        />
        <img class="right-icon2" alt="" src="/right-icon1.svg" />
      </div>
      <div class="input-labels8">
        <div class="label3">Description</div>
      </div>
    </div>
    <div class="email-input">
      <div class="top-content1">
        <div class="input-labels5">
          <div class="label3">Label</div>
        </div>
        <div class="input-labels6">
          <div class="label3">Label</div>
        </div>
      </div>
      <div class="input-field-base2">
        <img class="left-icon3" alt="" src="/left-icon3.svg" />
        <img class="processorvisa-icon2" alt="" src="/processorvisa.svg" />
        <input
          class="input-labels7"
          type="password"
          placeholder="Password"
          maxlength
          minlength
          required
        />
        <button class="right-button">
          <img class="icon" alt="" src="/icon.svg" />
        </button>
      </div>
      <div class="input-labels8">
        <div class="label3">Description</div>
      </div>
    </div>
    <button class="button">
      <div class="button-base1">
        <div class="text2">Login</div>
      </div>
    </button>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "LoginForm",
  });
</script>
<style scoped>
  .sign-in {
    flex: 1;
    position: relative;
  }
  .form-title {
    width: 342px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-gray);
    font-family: var(--font-roboto);
  }
  .label3 {
    position: relative;
    line-height: 20px;
    font-weight: 500;
  }
  .input-labels5 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .input-labels6 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .top-content1 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-45xl);
  }
  .left-icon2 {
    position: relative;
    width: 25.04px;
    height: 24px;
  }
  .processorvisa-icon2 {
    position: relative;
    width: 35px;
    height: 24px;
    display: none;
  }
  .input-labels7 {
    border: none;
    font-family: var(--public-sans-text-md-regular);
    font-size: var(--public-sans-text-md-regular-size);
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .right-icon2 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .input-field-base1 {
    align-self: stretch;
    border-radius: var(--br-9xs);
    border: 1.5px solid var(--light-neutrals-400);
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs) var(--padding-xs);
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .input-labels8 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--light-type-medium);
  }
  .email-input {
    width: 342px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .left-icon3 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .icon {
    position: absolute;
    height: 68.75%;
    width: 86.57%;
    top: 15.63%;
    right: 6.72%;
    bottom: 15.63%;
    left: 6.71%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .right-button {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    width: 24px;
    height: 24px;
  }
  .input-field-base2 {
    align-self: stretch;
    border-radius: var(--br-9xs);
    border: 1.5px solid var(--light-neutrals-400);
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs) var(--padding-xs);
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .text2 {
    flex: 1;
    position: relative;
    font-size: var(--text-sm-semibold-size);
    line-height: 20px;
    font-weight: 600;
    font-family: var(--text-sm-semibold);
    color: var(--white);
    text-align: center;
  }
  .button-base1 {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-lightseagreen);
    box-shadow: var(--shadow-xs);
    border: 1px solid var(--color-lightseagreen);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs) var(--padding-base);
    align-items: center;
    justify-content: center;
  }
  .button {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    border-radius: var(--br-5xs);
    width: 342px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .form-title-parent {
    border-radius: var(--br-4xl);
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    width: 372px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: var(--padding-xl) var(--padding-3xs);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-31xl);
    text-align: left;
    font-size: var(--text-sm-semibold-size);
    color: var(--light-type-high);
    font-family: var(--public-sans-text-md-regular);
  }
</style>
