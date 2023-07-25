<script setup>
  import { defineComponent, ref ,defineProps, computed} from "vue";
  import router from "../main";
  import auth from "../helpers/auth";
  import format from "../helpers/format";
  import Alert from "../helpers/Alerts";
  import cartAPI from "../api/cart";
  const containerCursor = ref("pointer");
  const props = defineProps({
    productName: { type: String , default: "Product Name"},
    productImage: { type: String, default: "/produuctimage1@2x.png"},
    productPrice: { type: String, default: "0" },
    productId: { type: Number, default: "0" },
  });
  const iSeller = ref(auth.isSeller());
  const productId = props.productId;
  const containerStyle = computed(() => {
    return {
      cursor: containerCursor.value,
    };
  });

  function onContainerClick() {
    console.log("Product ID", productId);
   router.push({ name: "ProductDetailPage", params: { id: productId } });
  }

  async function addToCart() {
    if(auth.isLogin()) {
      try {
       const res = await cartAPI.addToCart(productId,1);
      Alert.toast(res.message, "success", "top-end");
      } catch (error) {
       console.log(error); 
      }
    } else {
      Alert.toast("請先登入", "error", "top-end");
      router.push({ name: "LoginPage" });
    }
  }
 
</script>
<template>
  <div class="product-card1">
    <div class="container1" @click="onContainerClick" :style="containerStyle">
      <div class="productname1">{{productName}}</div>
      <img class="productImage-icon1" alt="" :src="productImage" />
      <div class="productprice5">
        <div class="productname1">{{"$ " + format.priceFormat(productPrice)}}</div>
      </div>
    </div>
    <button class="cartbutton5" @click="addToCart" v-if="!iSeller">
      <div class="button-base5">
        <div class="text7">Add to Cart</div>
      </div>
    </button>
  </div>
</template>

<style scoped>
  .productname1 {
    position: relative;
  }
  .productImage-icon1 {
    position: relative;
    width: 70%;
    height: 50%;
    object-fit: cover;
  }
  .productprice5 {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    color: #0aaeb9;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
    cursor: pointer;
  }
  .text7 {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    font-family: Inter;
    color: #fff;
    text-align: left;
  }
  .button-base5 {
    border-radius: 8px;
    background-color: #15adb7;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border: 1px solid #15adb7;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 8px 14px;
    align-items: center;
    justify-content: center;
  }
  .cartbutton5 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .product-card1 {
    border-radius: 8px;
    background-color: #f3f3f3;
    border: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    padding: 14px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    text-align: left;
    font-size: 15px;
    color: #000;
    font-family: "Century Gothic";
  }
</style>
