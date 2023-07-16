<template>
  <div class="loginpage">
    <img class="x-circle-icon" alt="" src="/xcircle.svg" />
    <div class="rectangle-parent">
      <div class="frame-child" />
      <img
        class="water-drops-blue-background-e8-icon"
        alt=""
        src="/waterdropsbluebackgrounde8mjvls-1@2x.png"
      />
      <div class="frame-item" />
      <LoginFormComponent />
      <div class="wlcome-to-win">Wlcome to Win Store.com</div>
      <div class="vector-parent">
        <img class="frame-inner" alt="" src="/vector-1.svg" />
        <div class="ellipse-div" />
        <div class="frame-child1" />
        <div class="frame-child2" />
        <div class="storepk">store.pk</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import LoginFormComponent from "../components/LoginFormComponent.vue";

  export default defineComponent({
    name: "LoginPage",
    components: { LoginFormComponent },
  });
</script>
<style scoped>
  .x-circle-icon {
    position: absolute;
    top: 10px;
    left: 1031px;
    width: 28px;
    height: 28px;
    overflow: hidden;
    display: none;
  }
  .frame-child {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #c4c4c4;
    width: 1071px;
    height: 275.99px;
  }
  .water-drops-blue-background-e8-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1071px;
    height: 583.38px;
    object-fit: cover;
  }
  .frame-item {
    position: absolute;
    top: 222.48px;
    left: 0px;
    background-color: var(--color-white);
    width: 1071px;
    height: 390.52px;
  }
  .wlcome-to-win {
    position: absolute;
    top: 74.19px;
    left: 330px;
    display: inline-block;
    width: 400px;
    height: 31.53px;
  }
  .frame-inner {
    position: absolute;
    top: 8.63px;
    left: -2.5px;
    width: 92.5px;
    height: 26.79px;
  }
  .ellipse-div {
    position: absolute;
    top: 38.02px;
    left: 26.5px;
    border-radius: 50%;
    background-color: var(--color-white);
    width: 7px;
    height: 6.49px;
  }
  .frame-child1 {
    position: absolute;
    top: 38.02px;
    left: 43.5px;
    border-radius: 50%;
    background-color: var(--color-white);
    width: 7px;
    height: 6.49px;
  }
  .frame-child2 {
    position: absolute;
    top: 0px;
    left: 59.5px;
    border-radius: 50%;
    background-color: var(--color-white);
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
    position: absolute;
    top: 18.55px;
    left: 442px;
    width: 166.5px;
    height: 44.51px;
    font-size: 19px;
    font-family: var(--font-century-gothic);
  }
  .rectangle-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1071px;
    height: 613px;
  }
  .loginpage {
    position: relative;
    width: 100%;
    height: 613px;
    text-align: left;
    font-size: 32px;
    color: var(--color-white);
    font-family: var(--font-roboto);
  }
</style>
