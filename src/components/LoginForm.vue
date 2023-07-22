<script setup>
  import { reactive } from "vue";
  import userAPI from "../api/user";
  import router from "../main";

  const loginData = reactive({
    account: "",
    password: "",
  });


 async function login() {
  try {
    await userAPI.login(loginData);
    router.push({name: "MainPage"}); 
  } catch (error) {
    console.log(error);
  }
   
  }
</script>
<template>
  <div class="form-title-parent">
    <div class="form-title">
      <b class="sign-in">Sign in</b>
    </div>
    <div class="email-input">
      <div class="top-content4">
        <div class="input-labels18">
          <div class="label9">Label</div>
        </div>
        <div class="input-labels19">
          <div class="label9">Label</div>
        </div>
      </div>
      <div class="input-field-base4">
        <img class="left-icon8" alt="" src="/left-icon2.svg" />
        <img class="processorvisa-icon6" alt="" src="/processorvisa.svg" />
        <input
          class="input-labels20"
          type="email"
          placeholder="Email Address"
          v-model.trim="loginData.account"
          maxlength
          minlength
          required
        />
        <img class="right-icon8" alt="" src="/right-icon1.svg" />
      </div>
      <div class="input-labels21">
        <div class="label9">Description</div>
      </div>
    </div>
    <div class="email-input">
      <div class="top-content4">
        <div class="input-labels18">
          <div class="label9">Label</div>
        </div>
        <div class="input-labels19">
          <div class="label9">Label</div>
        </div>
      </div>
      <div class="input-field-base5">
        <img class="left-icon9" alt="" src="/left-icon3.svg" />
        <img class="processorvisa-icon6" alt="" src="/processorvisa.svg" />
        <input
          class="input-labels20"
          type="password"
          placeholder="Password"
          v-model.trim="loginData.password"
          maxlength
          minlength
          required
        />
        <button class="right-button">
          <img class="icon" alt="" src="/icon.svg" />
        </button>
      </div>
      <div class="input-labels21">
        <div class="label9">Description</div>
      </div>
    </div>
    <button class="button1" @click="login">
      <div class="button-base4">
        <div class="text6">Login</div>
      </div>
    </button>
  </div>
</template>

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
    font-size: 20px;
    color: #899095;
    font-family: Roboto;
  }
  .label9 {
    position: relative;
    line-height: 20px;
    font-weight: 500;
  }
  .input-labels18 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .input-labels19 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .top-content4 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }
  .left-icon8 {
    position: relative;
    width: 25.04px;
    height: 24px;
  }
  .processorvisa-icon6 {
    position: relative;
    width: 35px;
    height: 24px;
    display: none;
  }
  .input-labels20 {
    border: none;
    font-family: "Public Sans";
    font-size: 16px;
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .right-icon8 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .input-field-base4 {
    align-self: stretch;
    border-radius: 4px;
    border: 1.5px solid #cbd5e1;
    display: flex;
    flex-direction: row;
    padding: 10px 12px;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .input-labels21 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #64748b;
  }
  .email-input {
    width: 342px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;
  }
  .left-icon9 {
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
  .input-field-base5 {
    align-self: stretch;
    border-radius: 4px;
    border: 1.5px solid #cbd5e1;
    display: flex;
    flex-direction: row;
    padding: 10px 12px;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .text6 {
    flex: 1;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    font-family: Inter;
    color: #fff;
    text-align: center;
  }
  .button-base4 {
    flex: 1;
    border-radius: 8px;
    background-color: #15adb7;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border: 1px solid #15adb7;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 10px 16px;
    align-items: center;
    justify-content: center;
  }
  .button1 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    border-radius: 8px;
    width: 342px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .form-title-parent {
    border-radius: 23px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
    width: 372px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: 50px;
    text-align: left;
    font-size: 14px;
    color: #070a13;
    font-family: "Public Sans";
  }
</style>
