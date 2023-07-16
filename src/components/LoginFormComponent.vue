<template>
  <form class="rectangle-group" method="post">
    <div class="rectangle-div" />
    <div class="frame-parent">
      <div class="sign-in-parent">
        <b class="sign-in">Sign in</b>
        <b class="register">Register</b>
      </div>
      <input class="frame-input" type="text" maxlength minlength required />
      <input class="frame-child3" type="password" maxlength minlength />
      <div class="frame-group">
        <div class="instance-parent">
          <input class="rectangle-input" type="checkbox" />
          <div class="remember-password">Remember password</div>
        </div>
        <div class="forget-password">Forget password</div>
      </div>
      <div class="or-connect-with">or connect with</div>
      <div class="facebook-1-parent">
        <img class="facebook-1-icon" alt="" src="/facebook-1.svg" />
        <img class="facebook-1-icon" alt="" src="/instagram-1.svg" />
        <img class="facebook-1-icon" alt="" src="/pinterest-1.svg" />
        <img class="facebook-1-icon" alt="" src="/linkedin-1.svg" />
      </div>
      <button class="login-wrapper">
        <div class="login">Login</div>
      </button>
    </div>
  </form>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "LoginFormComponent",
  });
</script>
<style scoped>
  .rectangle-div {
    align-self: stretch;
    position: relative;
    border-radius: var(--br-9xl);
    background-color: var(--color-white);
    height: 421px;
    z-index: 0;
  }
  .sign-in {
    position: relative;
    font-size: var(--font-size-mid);
    display: inline-block;
    font-family: var(--font-roboto);
    color: var(--color-gray);
    text-align: left;
    width: 55.29px;
    flex-shrink: 0;
  }
  .register {
    position: relative;
    font-size: var(--font-size-mid);
    display: inline-block;
    font-family: var(--font-roboto);
    color: var(--color-gray);
    text-align: left;
    width: 70px;
    flex-shrink: 0;
  }
  .sign-in-parent {
    width: 350.29px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 0;
  }
  .frame-input {
    border: none;
    font-weight: 300;
    font-family: var(--font-roboto);
    font-size: var(--font-size-mini);
    background-color: var(--color-white);
    border-radius: var(--br-4xs);
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
    width: 350px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs) var(--padding-mid);
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    z-index: 1;
  }
  .frame-child3 {
    border: none;
    font-weight: 300;
    font-family: var(--font-roboto);
    font-size: var(--font-size-mini);
    background-color: var(--color-white);
    position: relative;
    border-radius: var(--br-4xs);
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
    width: 350px;
    height: 45px;
    z-index: 2;
  }
  .rectangle-input {
    cursor: pointer;
    position: relative;
    border-radius: var(--br-11xs);
    border: 1px solid var(--color-silver-100);
    box-sizing: border-box;
    width: 23.91px;
    height: 23px;
  }
  .remember-password {
    flex: 1;
    position: relative;
    font-size: var(--font-size-sm);
    font-family: var(--font-roboto);
    color: var(--color-dimgray-200);
    text-align: left;
  }
  .instance-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .forget-password {
    flex: 1;
    position: relative;
    font-size: var(--font-size-sm);
    font-family: var(--font-roboto);
    color: var(--color-steelblue);
    text-align: left;
  }
  .frame-group {
    width: 357.62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-52xl);
    z-index: 3;
  }
  .or-connect-with {
    position: relative;
    font-size: var(--font-size-base);
    font-family: var(--font-roboto);
    color: var(--color-dimgray-100);
    text-align: center;
    display: inline-block;
    width: 161.7px;
    z-index: 4;
  }
  .facebook-1-icon {
    position: relative;
    width: 39px;
    height: 39px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .facebook-1-parent {
    width: 330.7px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-2xs);
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 5;
  }
  .login {
    position: relative;
    font-size: var(--font-size-mid);
    font-family: var(--font-trebuchet-ms);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    width: 54px;
    flex-shrink: 0;
  }
  .login-wrapper {
    cursor: pointer;
    border: none;
    padding: var(--padding-xs) var(--padding-125xl);
    background-color: var(--color-lightseagreen);
    margin: 0 !important;
    position: absolute;
    top: 246px;
    left: 4px;
    box-shadow: 1px 1px 2px rgba(255, 255, 36, 0.3) inset,
      -1px -1px 2px rgba(110, 75, 10, 0.5) inset,
      -9px 9px 18px rgba(110, 75, 10, 0.11),
      9px -9px 18px rgba(110, 75, 10, 0.02);
    width: 342px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 6;
  }
  .frame-parent {
    align-self: stretch;
    margin: 0 !important;
    position: absolute;
    top: 30.82px;
    left: 66px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    z-index: 1;
  }
  .rectangle-group {
    position: absolute;
    top: 138.18px;
    left: 285px;
    border-radius: var(--br-4xl);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.42);
    width: 478px;
    display: flex;
    flex-direction: column;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
</style>
