<script setup>
import { defineProps, onMounted, ref } from 'vue';
import format from '../helpers/format';
import Alert from '../helpers/Alerts';
import cartAPI from '../api/cart';
const props = defineProps({
  id: {Number, default: 0},
  productName: {String, default: "product name"},
  productPrice: {Number, default: 0},
  quantity: {Number, default: 1},
  stock: {Number, default: 0},
  productImage: {String, default: "/titan_shop_front_end/deafault.png"},
});
const quantity = ref(props.quantity);
const totalPrice = ref(props.productPrice * props.quantity);

async function onQuantityChange(e) {
  const newQuantity = Number.parseInt(quantity.value)
  try{
    if(newQuantity > props.stock) {
    Alert.toast("超過庫存", "error", "top-end");
    quantity.value = props.stock;
    await cartAPI.updateCart(props.id, quantity.value);
    totalPrice.value = props.productPrice * props.stock;
  } else {
    quantity.value = newQuantity;
    await cartAPI.updateCart(props.id, quantity.value);
    totalPrice.value = props.productPrice * newQuantity;
  }
  Alert.toast("更新成功", "success", "top-end");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
  }catch(error) {
  Alert.toast(error.message, "error", "top-end");
  }
  
}

onMounted(() => {
  quantity.value = props.quantity;
  totalPrice.value = props.productPrice * props.quantity;
})
</script>
<template>
<div class="cart-section">
              <div class="product1">
                  <div class="monitor-cart-small">
                      <img class="g27cq4-500x500-1-icon" alt="" :src="productImage" />
                  </div>
                  <div class="typed">{{ productName }}</div>
              </div>
              <div class="price">
                  <div class="typed">{{ "$ " + format.priceFormat(productPrice)}}</div>
              </div>
              <div class="stock">
                  <select class="quantity-child"
                  v-model="quantity"
                  @change="onQuantityChange"
                   required>
                   <option 
                   v-for="option in stock" 
                   :selected="option === quantity"
                   :value="option">
                   {{ option }}
                   </option>
                  </select>
              </div>
              <div class="price">
                  <div class="typed">{{ "$ " + format.priceFormat(totalPrice)}}</div>
              </div>
          </div>
</template>
<style scoped>
  .g27cq4-500x500-1-icon {
    position: absolute;
    height: 72.22%;
    width: 92.59%;
    top: 14.81%;
    right: 3.7%;
    bottom: 12.96%;
    left: 3.7%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
}
.monitor-cart-small {
    position: relative;
    width: 54px;
    height: 54px;
    overflow: hidden;
    flex-shrink: 0;
}
.product1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.stock {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.quantity-child {
    width: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.quantity1 {
    border-radius: 4px;
    border: 1.5px solid rgba(0, 0, 0, 0.4);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
    align-items: center;
    justify-content: flex-start;
}
.price {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.cart-section {
    align-self: stretch;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 24px 40px;
    align-items: center;
    justify-content: space-between;
}
</style>