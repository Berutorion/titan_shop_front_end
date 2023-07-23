
<script setup>
  import {  ref , onMounted} from "vue";
  import ProductManageItems from "../components/ProductManageItems.vue";
  import Footers from "../components/Footers.vue";
  import Navigation1 from "../components/Navigation1.vue";
  import productAPI from "../api/product";
  import router from "../main";
  const productList = ref([]);
  const userId = ref(localStorage.getItem("userId"));

  onMounted(async () => {
    try {
    const response = await productAPI.getProductsBySellerId(userId.value);
    productList.value = response;
    console.log(productList.value);
    } catch (error) {
      console.log(error);
    }
  });

  const addNewProduct = () => {
    router.push("/addNewProduct");
  };


</script>
<template>
  <div class="productionmamagementpage">
    <Navigation1 />
    <div class="production-manager">
      <div class="title1">
        <div class="production-mamagement">Production Mamagement</div>
        <button class="newbutton" @click="addNewProduct">
          <img class="plusicon" alt="" src="/plusicon.svg" />
          <div class="add-new-production">add new production</div>
        </button>
      </div>
      <div class="tabletitle">
        <div class="tabletitle-child" />
        <div class="production">production</div>
        <div class="price-wrapper">
          <div class="price">price</div>
        </div>
        <div class="inventory">inventory</div>
      </div>
      <ProductManageItems
        v-for="product in productList"
        :id="product.id"
        :productImage="product.productImage"
        :productionName="product.name"
        :productPrice="product.price"
        :productAmout="product.stock"
      />
    </div>
    <Footers />
  </div>
</template>

<style scoped>
  .logo-child5 {
    position: relative;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 7px;
  }
  .logo-child6 {
    position: relative;
    width: 92.5px;
    height: 28.5px;
  }
  .storepk3 {
    position: relative;
    font-size: 19px;
    font-family: "Century Gothic";
    color: #fff;
    text-align: left;
  }
  .logo2 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .label5 {
    position: relative;
    line-height: 20px;
    font-weight: 500;
  }
  .input-labels10 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .input-labels11 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .top-content2 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }
  .left-icon5 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .processorvisa-icon4 {
    position: relative;
    width: 35px;
    height: 24px;
    display: none;
  }
  .input-labels12 {
    border: none;
    font-family: "Public Sans";
    font-size: 16px;
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .right-icon5 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .input-field-base2 {
    align-self: stretch;
    border-radius: 4px;
    background-color: #f1f5f9;
    display: none;
    flex-direction: row;
    padding: 10px 12px;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .input-labels13 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #64748b;
  }
  .input-field1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;
  }
  .vector-icon1 {
    position: absolute;
    height: 33.33%;
    width: 75%;
    top: 58.33%;
    right: 12.5%;
    bottom: 8.33%;
    left: 12.5%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon2 {
    position: absolute;
    height: 41.67%;
    width: 41.67%;
    top: 8.33%;
    right: 29.17%;
    bottom: 50%;
    left: 29.17%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .userbutton {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .heart-icon1 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .shopping-cart-container {
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cart1 {
    position: relative;
    font-size: 15px;
    text-transform: capitalize;
    font-family: "Century Gothic";
    color: #fff;
    text-align: center;
  }
  .cartbutton2 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .buttongroup1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
  }
  .navigation1 {
    align-self: stretch;
    background-color: #03484d;
    display: flex;
    flex-direction: row;
    padding: 10px 60px;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .production-mamagement {
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .plusicon {
    position: relative;
    width: 12px;
    height: 12px;
  }
  .add-new-production {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins;
    color: #4b86ff;
    text-align: center;
  }
  .newbutton {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 0;
  }
  .title1 {
    align-self: stretch;
    background-color: #fff;
    border-bottom: 1.5px solid #e4e4e4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 10px 0px;
    align-items: baseline;
    justify-content: space-between;
  }
  .tabletitle-child {
    flex: 1;
    position: relative;
    width: 100px;
    height: 26px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .production {
    flex:1;
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 157px;
    flex-shrink: 0;
  }
  .price {
    
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 93px;
    flex-shrink: 0;
  }
  .price-wrapper {
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .inventory {
    flex:1;
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 90px;
    flex-shrink: 0;
  }
  .tabletitle {
    align-self: stretch;
    border-bottom: 2px solid #e4e4e4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    align-items: flex-start;
    justify-content: space-between;
  }
  .icon-page-edit1 {
    position: relative;
    width: 22px;
    height: 25.76px;
  }
  .icon-trash1 {
    position: relative;
    width: 22px;
    height: 22px;
  }
  .button-group1 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 19px 22px;
    align-items: center;
    justify-content: center;
    gap: 17px;
  }
  .g92-2-500x500-1-icon1 {
    position: relative;
    width: 48.88px;
    height: 42.22px;
    object-fit: cover;
  }
  .production-name1 {
    position: relative;
    font-weight: 500;
  }
  .prouction1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .productprice2 {
    position: relative;
    line-height: 24px;
  }
  .productmanageitem1 {
    align-self: stretch;
    border-bottom: 2px solid #e4e4e4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 15px 0px;
    align-items: center;
    justify-content: space-between;
  }
  .production-manager {
    flex: 1;
    align-self: stretch;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 30px 16px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    text-align: center;
    font-size: 16px;
    color: #000;
    font-family: Poppins;
  }
  .productionmamagementpage {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100vdh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 14px;
    color: #070a13;
    font-family: "Public Sans";
  }

  @media screen and (max-width: 420px) {
    .logo2 {
      flex: unset;
      align-self: stretch;
    }

    .input-field1 {
      flex: unset;
      align-self: stretch;
    }

    .buttongroup1 {
      flex: unset;
      align-self: stretch;
    }

    .navigation1 {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .tabletitle {
      flex-direction: row;
      gap: 200px;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
</style>
