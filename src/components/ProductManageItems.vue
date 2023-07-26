<script setup>
  import {  ref, defineProps } from "vue";
  import format from "../helpers/format";
  import productAPI from "../api/product";
import router from "../main";
  const props = defineProps({
    id: { type: Number, default: 0 },
    productImage: { type: String, default: "/titan_shop_front_end/deafault.png" },
    productionName: { type: String, default: "production name" },
    productPrice: { type: String, default: "$0" },
    productAmout: { type: Number, default: 0 },
  });
  

    // delete product
    async function onDeleteClick() {
      try {
       await productAPI.deleteProductById(props.id);
       alert("Delete product successfully");
       window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    //Edit product
    async function onEditClick() {
      try {
      router.push({name : "EditProductPage", params : {id : props.id}});
      } catch (error) {
        console.log(error);
      }
    }
</script>
<template>
  <div class="productmanageitem3">
    <div class="button-group3">
      <button class="icon-page-edit3" @click="onEditClick">
        <img class="vector-icon7" alt="" src="/vector2.svg" />
        <img class="vector-icon8" alt="" src="/vector3.svg" />
        <img class="vector-icon9" alt="" src="/vector4.svg" />
        <img class="vector-icon10" alt="" src="/vector5.svg" />
      </button>
      <button class="icon-trash3" @click="onDeleteClick">
        <img class="vector-icon11" alt="" src="/vector6.svg" />
        <img class="vector-icon12" alt="" src="/vector7.svg" />
        <img class="vector-icon13" alt="" src="/vector8.svg" />
        <img class="vector-icon14" alt="" src="/vector9.svg" />
      </button>
    </div>
    <div class="prouction3">
      <img class="g92-2-500x500-1-icon3" alt="" :src="productImage" />
      <div class="production-name3">{{productionName}}</div>
    </div>
    <div class="productprice4">{{"$ " + format.priceFormat(productPrice)}}</div>
    <div class="production-name3">{{productAmout}}</div>
  </div>
</template>

<style scoped>
  .vector-icon7 {
    position: absolute;
    height: 108.22%;
    width: 104.85%;
    top: -4.21%;
    right: 0.15%;
    bottom: -4.01%;
    left: -5%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon8 {
    position: absolute;
    height: 48.34%;
    width: 57.43%;
    top: 15.75%;
    right: 23.86%;
    bottom: 35.91%;
    left: 18.71%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon9 {
    position: absolute;
    height: 40.5%;
    width: 48.11%;
    top: 63.71%;
    right: -5%;
    bottom: -4.21%;
    left: 56.89%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon10 {
    position: absolute;
    height: 28.38%;
    width: 33.71%;
    top: -4.21%;
    right: 0.15%;
    bottom: 75.83%;
    left: 66.14%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .icon-page-edit3 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    width: 20px;
    height: 23.76px;
  }
  .vector-icon11 {
    position: absolute;
    height: 65.56%;
    width: 87.78%;
    top: 39.44%;
    right: 6.11%;
    bottom: -5%;
    left: 6.11%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon12 {
    position: absolute;
    height: 43.33%;
    width: 10%;
    top: 39.44%;
    right: 56.11%;
    bottom: 17.22%;
    left: 33.89%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon13 {
    position: absolute;
    height: 43.33%;
    width: 10%;
    top: 39.44%;
    right: 33.89%;
    bottom: 17.22%;
    left: 56.11%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon14 {
    position: absolute;
    height: 32.22%;
    width: 110%;
    top: -5%;
    right: -5%;
    bottom: 72.78%;
    left: -5%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .icon-trash3 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .button-group3 {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 19px 22px;
    align-items: center;
    justify-content: center;
    gap: 17px;
  }
  .g92-2-500x500-1-icon3 {
    position: relative;
    width: 48.88px;
    height: 42.22px;
    object-fit: cover;
  }
  .production-name3 {
    flex: 1;
    position: relative;
    font-weight: 500;
  }
  .prouction3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .productprice4 {
    flex: 1;
    position: relative;
    line-height: 24px;
  }
  .productmanageitem3 {
    align-self: stretch;
    border-bottom: 2px solid #e4e4e4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 15px 0px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 16px;
    color: #000;
    font-family: Poppins;
  }
</style>
