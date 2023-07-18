<template>
  <div class="loginpage">
    <div class="title">
      <div class="vector-parent">
        <img class="frame-child" alt="" src="/vector-1.svg" />
        <div class="frame-item" />
        <div class="frame-inner" />
        <div class="ellipse-div" />
        <div class="storepk">store.pk</div>
      </div>
      <div class="wlcome-to-win">Wlcome to Win Store.com</div>
    </div>
    <LoginForm />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import LoginForm from "../components/LoginForm.vue";

  export default defineComponent({
    name: "LoginPage",
    components: { LoginForm },
  });
</script>
<style scoped>
  .frame-child {
    position: absolute;
    top: 8.63px;
    left: -2.5px;
    width: 92.5px;
    height: 26.79px;
  }
  .frame-item {
    position: absolute;
    top: 38.02px;
    left: 26.5px;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 6.49px;
  }
  .frame-inner {
    position: absolute;
    top: 38.02px;
    left: 43.5px;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 6.49px;
  }
  .ellipse-div {
    position: absolute;
    top: 0px;
    left: 59.5px;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 6.49px;
  }
  .storepk {
    position: absolute;
    top: 9.27px;
    left: 93.5px;
    display: flex;
    align-items: center;
    width: 73px;
    height: 21.33px;
  }
  .vector-parent {
    position: relative;
    width: 166.5px;
    height: 44.51px;
  }
  .wlcome-to-win {
    position: relative;
    font-size: 32px;
    font-family: Roboto;
    display: inline-block;
    width: 400px;
    height: 31.53px;
    flex-shrink: 0;
  }
  .title {
    align-self: stretch;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
  .loginpage {
    position: relative;
    width: 100%;
    height: 1024px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: 83px;
    background-image: url("/public/loginpage@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    text-align: left;
    font-size: 19px;
    color: #fff;
    font-family: "Century Gothic";
  }
</style>
