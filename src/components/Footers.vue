<template>
  <div class="footer1">
    <div class="stratus99-e-commerce-inc1">
      © 2021 Winstore. All Rights Reserved.
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Footers",
  });
</script>
<style scoped>
  .stratus99-e-commerce-inc1 {
    flex: 1;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 17px;
  }
  .footer1 {
    align-self: stretch;
    background-color: #000;
    display: flex;
    flex-direction: row;
    padding: 21px 124px;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-family: "Century Gothic";
  }
</style>
