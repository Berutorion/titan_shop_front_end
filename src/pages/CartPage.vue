<script setup>
  import { defineComponent, ref, onMounted } from 'vue'
  import Navigation1 from '../components/Navigation1.vue';
  import Footers from '../components/Footers.vue';
  import CartItem from '../components/CartItem.vue';
  import cartAPI from '../api/cart';
  import format from '../helpers/format';

  const cartList = ref([]);
  const total = ref(0);

  onMounted(async () => {
    try {
      const res = await cartAPI.getCartByUserId();
      cartList.value = res;
      total.value = cartList.value.reduce((acc, cur) => {
        return acc + cur.Product.price * cur.quantity;
      }, 0);
    } catch (error) {
      console.log(error);
    }
  })
</script>
<template>
  <div class="cart-page">
      <Navigation1 />
      <div class="maincontainer">
          <div class="cart-main-section">
              <div class="typed">Product</div>
              <div class="typed">Price</div>
              <div class="typed">Quantity</div>
              <div class="typed">Subtotal</div>
          </div>
          <CartItem
          v-for="cart in cartList"
          :id="cart.id"
          :productName="cart.Product.name"
          :productPrice="cart.Product.price"
          :quantity="cart.quantity"
          :stock="cart.Product.stock"
          :productImage="cart.Product.productImage"
           />
          <div class="totalcard">
              <div class="container">
                  <div class="cart-total">Cart Total</div>
                  <div class="subtotal-parent">
                      <div class="typed">Subtotal: </div>
                      <div class="typed">{{" " + format.priceFormat(total) }}</div>
                  </div>
                  <!-- <img class="underline-icon" alt="" src="UnderLine.svg" />
                  <div class="subtotal-parent">
                      <div class="typed">Shipping:</div>
                      <div class="typed">Free</div>
                  </div> -->
                  <div class="underline"  />
                  <div class="subtotal-parent">
                      <div class="typed">Total: </div>
                      <div class="typed">{{" " + format.priceFormat(total) }}</div>
                  </div>
              </div>
              <div class="button">
                  <div class="button-base">
                      <div class="text">Purchase</div>
                  </div>
              </div>
          </div>
      </div>
      <Footers />
  </div>
</template>

<style scoped>

.typed {
    position: relative;
    line-height: 24px;
}

.cart-main-section {
    align-self: stretch;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 20px 40px;
    align-items: center;
    justify-content: space-between;
  }

.cart-total {
    position: relative;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
}
.subtotal-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}
.underline {
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: 10px 0px;
}
.container {
    border-radius: 4px;
    width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 3px 24px;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
}
.text {
    position: relative;
    line-height: 20px;
    font-weight: 600;
}
.button-base {
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
.button {
    border-radius: 8px;
    width: 110px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
    color: #fff;
    font-family: Inter;
}
.totalcard {
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    align-items: center;
    justify-content: center;
    width: 30%;
}
.maincontainer {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    font-size: 16px;
    color: #000;
    font-family: Poppins;
}
.stratus99-e-commerce-inc {
    flex: 1;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 17px;
}

.cart-page {
    position: relative;
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: left;
    font-size: 19px;
    color: #fff;
    font-family: 'Century Gothic';
}

</style>