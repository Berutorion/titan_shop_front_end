<script setup>
import { onMounted, ref } from "vue";
import Navigation1 from "../components/Navigation1.vue";
import Footers from "../components/Footers.vue";
import { useRoute } from "vue-router";
import orderAPI from "../api/order";
import format from "../helpers/format";
const route = useRoute();
const order = ref({});

onMounted (async () => {
  try {
    const response = await orderAPI.getOrder(route.params.orderId);
    order.value = response;
    console.log(order.value);
  } catch (error) {
    console.log(error);
  }
})

</script>
<template>
    <div class="purchase-success-page">
      <Navigation1 />
      <div class="receipt">
        <div class="receipt-card">
          <div class="header-text">
            <div class="payment-success">Payment Success!</div>
            <div class="your-payment-has">
              Your payment has been successfully done.
            </div>
          </div>
          <div class="line" />
          <div class="amount">
            <div class="total-payment">Total Payment</div>
            <div class="idr-1000000">{{format.priceFormat(order.totalPrice)  }}</div>
          </div>
          <div class="payment-details">
            <div class="row-1">
              <div class="payment-detail">
                <div class="ref-number">Ref Number</div>
                <div class="div">{{ order.id }}</div>
              </div>
              <div class="payment-detail">
                <div class="ref-number">Payment Time</div>
                <div class="div">{{ format.dateFormat(order.createdAt) }}</div>
              </div>
            </div>
            <div class="row-2">
              <div class="payment-detail">
                <div class="ref-number">Payment Method</div>
                <div class="bank-transfer">Bank Transfer</div>
              </div>
              <div class="payment-detail">
                <div class="ref-number">Sender Name</div>
                <div class="bank-transfer">Antonio Roberto</div>
              </div>
            </div>
          </div>
          <img class="success-icon" alt="" src="/success-Icon.png" />
        </div>
        <router-link :to="{name: 'MainPage'}" class="button" >
        <div class="button-base">
          <div class="text">go to Home page</div>
        </div>
      </router-link>
      </div>
     
    <Footers />
    </div>
  </template>
 
  <style scoped>
    .logo-child {
      position: relative;
      border-radius: 50%;
      background-color: #fff;
      width: 7px;
      height: 7px;
    }
    .logo-item {
      position: relative;
      width: 92.5px;
      height: 28.5px;
    }
    .storepk {
      position: relative;
    }
    .logo {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .typed {
      position: relative;
      line-height: 24px;
    }
    .input-labels {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .right-icon {
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .input-field-base {
      align-self: stretch;
      border-radius: 4px;
      background-color: #f1f5f9;
      display: flex;
      flex-direction: row;
      padding: 10px 12px;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
    .input-field {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 16px;
      color: #64748b;
      font-family: "Public Sans";
    }
    .shopping-cart-wrapper {
      height: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .cart {
      position: relative;
      text-transform: capitalize;
    }
    .cartbutton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
    .buttongroup {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;
      text-align: center;
      font-size: 15px;
    }
    .navigation {
      align-self: stretch;
      background-color: #03484d;
      display: flex;
      flex-direction: row;
      padding: 10px 60px;
      align-items: center;
      justify-content: center;
      gap: 40px;
      text-align: left;
    }
    .payment-success {
      align-self: stretch;
      position: relative;
      line-height: 28px;
      font-weight: 600;
    }
    .your-payment-has {
      align-self: stretch;
      position: relative;
      font-size: 14px;
      line-height: 22px;
      color: #474747;
    }
    .header-text {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 6px;
      z-index: 0;
    }
    .line {
      align-self: stretch;
      position: relative;
      border-top: 1px solid #e8eaed;
      box-sizing: border-box;
      height: 1px;
      z-index: 1;
    }
    .total-payment {
      align-self: stretch;
      position: relative;
      line-height: 22px;
    }
    .idr-1000000 {
      align-self: stretch;
      position: relative;
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      color: #121212;
    }
    .amount {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 6px;
      z-index: 2;
      font-size: 14px;
      color: #474747;
    }
    .ref-number {
      align-self: stretch;
      position: relative;
      line-height: 16px;
    }
    .div {
      align-self: stretch;
      position: relative;
      font-size: 13px;
      line-height: 18px;
      font-weight: 500;
      color: #121212;
    }
    .payment-detail {
      flex: 1;
      border-radius: 6px;
      border: 1px solid #ededed;
      display: flex;
      flex-direction: column;
      padding: 12px;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 4px;
    }
    .row-1 {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
    }
    .bank-transfer {
      position: relative;
      font-size: 13px;
      line-height: 18px;
      font-weight: 500;
      color: #121212;
      text-align: center;
    }
    .row-2 {
      align-self: stretch;
      display: none;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
    }
    .payment-details {
      width: 313px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
      z-index: 3;
      text-align: left;
      font-size: 12px;
      color: #707070;
    }
    .success-icon {
      position: absolute;
      margin: 0 !important;
      top: -38px;
      left: 128px;
      width: 88px;
      height: 88px;
      z-index: 4;
    }
    .receipt-card {
      align-self: stretch;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      padding: 48px 16px 32px;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 24px;
    }
    .receipt {
      width: 345px;
      flex:1;
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 20px;
      color: #121212;
      font-family: Poppins;
      background-image: -moz-element(#receipt);
    }
    .text {
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      font-family: Inter;
      color: #fff;
      text-align: left;
    }
    .button-base {
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
    .button {
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
    .stratus99-e-commerce-inc {
      flex: 1;
      position: relative;
      letter-spacing: 0.2px;
      line-height: 17px;
    }
    .footer {
      align-self: stretch;
      background-color: #000;
      display: flex;
      flex-direction: row;
      padding: 21px 124px;
      align-items: center;
      justify-content: flex-start;
      font-size: 18px;
    }
    .purchase-success-page {
      background-color: #fff;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      text-align: center;
      font-size: 19px;
      color: #fff;
      font-family: "Century Gothic";
    }
  </style>
  