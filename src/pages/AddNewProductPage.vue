<script setup>
import {  reactive, ref } from "vue";
import Navigation1 from "../components/Navigation1.vue";
import Footers from "../components/Footers.vue";
import router from "../main";
import productAPI from "../api/product";
const userId = ref(localStorage.getItem("userId"));
const product = reactive({
  name: "",
  price: "",
  stock: "",
  description: "",
 // productImage: "",
});
const addNewProduct = async() => {
 try {
    await productAPI.addNewProduct(product);
    router.push({name : "ProductManagementPage"});
 } catch (error) {
    console.log(error);
 }
};
</script>
<template>
    <div class="add-new-production-page">
    <Navigation1/>
      <div class="forms">
        <div class="text-fields">
          <div class="input-field1">
            <div class="top-content">
              <div class="input-labels">
                <div class="label">Production Name</div>
              </div>
            </div>
            <input
            v-model="product.name"
              class="input-field-base"
              type="text"
              maxlength
              minlength
              required
            />
          </div>
          <div class="container">
            <div class="input-field2">
              <div class="top-content1">
                <div class="input-labels">
                  <div class="label">Price</div>
                </div>
              </div>
              <input
              v-model="product.price"
                class="input-field-base"
                type="text"
                maxlength
                minlength
                required
              />
            </div>
            <div class="input-field2">
              <div class="top-content">
                <div class="input-labels">
                  <div class="label">Stock</div>
                </div>
              </div>
              <input
              v-model="product.stock"
                class="input-field-base"
                type="text"
                maxlength
                minlength
                required
              />
            </div>
          </div>
          <div class="input-field1">
            <div class="top-content">
              <div class="input-labels">
                <div class="label">Description</div>
              </div>
            </div>
            <textarea
            v-model="product.description"
              class="input-field-base"
              type="text"
              maxlength
              minlength
              required
            />
          </div>
        </div>
        <div class="actions">
          <router-link :to="{name: 'ProductManagementPage'}" class="button">
            <div class="button-base">
              <div class="label4">Back</div>
            </div>
          </router-link>
          <button class="button1" @click="addNewProduct">
            <div class="button-base1">
              <div class="label5">Continue</div>
            </div>
          </button>
        </div>
      </div>
      <Footers/>
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
    .input-field {
      border: none;
      font-family: "Public Sans";
      font-size: 16px;
      background-color: transparent;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .userbutton-icon {
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
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
    }
    .label {
      flex: 1;
      position: relative;
      line-height: 20px;
      font-weight: 500;
    }
    .input-labels {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .top-content {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .input-field-base {
      border: 1.5px solid #cbd5e1;
      font-family: "Public Sans";
      font-size: 16px;
      background-color: transparent;
      align-self: stretch;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      padding: 10px 12px;
      align-items: center;
      justify-content: flex-start;
    }
    .input-field1 {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 4px;
    }
    .top-content1 {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .input-field2 {
      align-self: stretch;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 4px;
    }
    .container {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
    }
    .text-fields {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 16px;
    }
    .label4 {
      position: relative;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Public Sans";
      color: #070a13;
      text-align: left;
    }
    .button-base {
      align-self: stretch;
      height: 52px;
      display: flex;
      flex-direction: row;
      padding: 14px 24px;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
    }
    .button {
      cursor: pointer;
      border: 1.5px solid #cbd5e1;
      padding: 0;
      background-color: transparent;
      flex: 1;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .label5 {
      position: relative;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: "Public Sans";
      color: #fff;
      text-align: left;
    }
    .button-base1 {
      align-self: stretch;
      background-color: #7445ff;
      height: 52px;
      display: flex;
      flex-direction: row;
      padding: 14px 24px;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
    }
    .button1 {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: transparent;
      flex: 1;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .actions {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 24px;
    }
    .forms {
        flex:1;
      align-self: stretch;
      background-color: #fff;
      height: 387px;
      display: flex;
      flex-direction: column;
      padding: 32px 16px;
      box-sizing: border-box;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 24px;
      font-size: 14px;
      color: #070a13;
      font-family: "Public Sans";
    }
    .add-new-production-page {
      position: relative;
      background-color: #fff;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      text-align: left;
      font-size: 19px;
      color: #fff;
      font-family: "Century Gothic";
    }
  </style>
  