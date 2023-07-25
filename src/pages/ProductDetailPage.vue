<script setup>
  import { ref, onMounted } from "vue";
  import Navigation1 from "../components/Navigation1.vue";
  import Footers from "../components/Footers.vue";
  import productAPI from "../api/product";
  import cartAPI from "../api/cart";
  import Alert from "../helpers/Alerts";
  import { useRoute } from "vue-router";
  import auth from "../helpers/auth";
  import format from "../helpers/format";
  import router from "../main";
  const route = useRoute();
  const productId = ref(route.params.id);
  const product = ref({});
  const isSeller = ref(auth.isSeller());
  
  onMounted(async () => {
    try {
    const response = await productAPI.getProductById(productId.value);
    product.value = response;
    console.log(response);
    } catch (error) {
      console.log(error);
    }
    
  });

  async function addToCart() {
    if(auth.isLogin()) {
      try {
       const res = await cartAPI.addToCart(productId.value,1);
      Alert.toast(res.message, "success", "top-end");
      } catch (error) {
      Alert.toast(error.message, "error", "top-end");
      }
    } else {
      Alert.toast("請先登入", "error", "top-end");
      router.push({ name: "LoginPage" });
    }
  }
 

</script>
<template>
  <div class="productdetailpage">
    <Navigation1 />
    <div class="product-detail">
      <div class="imagecontainer">
        <img class="image-63-icon" alt="" src="/image-63@2x.png" />
      </div>
      <div class="detailcontainer">
        <div class="detail">
          <div class="havic-hv-g-92">{{ product?.name }}</div>
          <div class="div13">{{"$ " + format.priceFormat(product?.price)}}</div>
          <div class="playstation-5-controller">
            {{ product?.description  }}
          </div>
          <img class="underline-icon1" alt="" src="/underline1.svg" />
        </div>
        <div class="buttongroup2">
          <div class="picker" v-if="isBuyer">
            <button class="left-icon6">
              <img class="maths-minus-m2" alt="" src="/maths--minus-m1.svg" />
            </button>
            <div class="time1">
              <div class="value1">{{product?.stock}}</div>
            </div>
            <button class="right-icon6">
              <img class="maths-minus-m2" alt="" src="/maths--plus-m1.svg" />
            </button>
          </div>
          <div class="button" v-if="!isSeller" @click="addToCart">
            <button class="button-base3">
              <div class="text5">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footers />
  </div>
</template>

<style scoped>
  .image-63-icon {
    position: relative;
    width: 446px;
    height: 315px;
    object-fit: cover;
  }
  .imagecontainer {
    border-radius: 4px;
    background-color: #f5f5f5;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 131px 27px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .havic-hv-g-92 {
    position: relative;
    letter-spacing: 0.03em;
    line-height: 24px;
    font-weight: 600;
  }
  .div13 {
    position: relative;
    letter-spacing: 0.03em;
    line-height: 24px;
  }
  .playstation-5-controller {
    align-self: stretch;
    position: relative;
    font-size: 14px;
    line-height: 21px;
    font-family: Poppins;
  }
  .underline-icon1 {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 1px;
    flex-shrink: 0;
    opacity: 0.5;
  }
  .detail {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 34px;
  }
  .maths-minus-m2 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .left-icon6 {
    cursor: pointer;
    border: 1px solid #cbd5e1;
    padding: 8px;
    background-color: transparent;
    border-radius: 4px 0px 0px 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .value1 {
    position: relative;
    line-height: 150%;
  }
  .time1 {
    border: 1px solid #cbd5e1;
    display: flex;
    flex-direction: row;
    padding: 8px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: -1px;
  }
  .right-icon6 {
    cursor: pointer;
    border: 1px solid #cbd5e1;
    padding: 8px;
    background-color: transparent;
    border-radius: 0px 4px 4px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: -1px;
  }
  .picker {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .text5 {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    font-family: Inter;
    color: #fff;
    text-align: left;
  }
  .button-base3 {
    cursor: pointer;
    border: 1px solid #15adb7;
    padding: 10px 16px;
    background-color: #15adb7;
    border-radius: 8px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .button {
    flex: 1;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .buttongroup2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    font-size: 16px;
    color: #070a13;
    font-family: "Nunito Sans";
  }
  .detailcontainer {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 123px;
  }
  .product-detail {
    align-self: stretch;
    flex: auto;
    display: flex;
    flex-direction: row;
    padding: 5px 0px;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;
  }
  .productdetailpage {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    text-align: left;
    font-size: 24px;
    color: #000;
    font-family: Inter;
  }

  @media screen and (max-width: 1200px) {
    .product-detail {
      flex-direction: row;
      gap: 70px;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 420px) {
    .product-detail {
      flex-direction: column;
      gap: 50px;
      align-items: flex-start;
      justify-content: center;
    }
  }
</style>
