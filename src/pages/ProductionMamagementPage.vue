<template>
  <div class="productionmamagementpage">
    <div class="navigation1">
      <button class="logo2" @click="onLogoClick">
        <div class="logo-child5" />
        <img class="logo-child6" alt="" src="/vector-13.svg" />
        <div class="storepk3">store.pk</div>
        <div class="logo-child5" />
        <div class="logo-child5" />
      </button>
      <div class="input-field1">
        <div class="top-content2">
          <div class="input-labels10">
            <div class="label5">Label</div>
          </div>
          <div class="input-labels11">
            <div class="label5">Label</div>
          </div>
        </div>
        <div class="input-field-base2">
          <img class="left-icon5" alt="" src="/left-icon6.svg" />
          <img class="processorvisa-icon4" alt="" src="/processorvisa3.svg" />
          <input class="input-labels12" type="text" maxlength minlength />
          <img class="right-icon5" alt="" src="/right-icon3.svg" />
        </div>
        <div class="input-labels13">
          <div class="label5">Description</div>
        </div>
      </div>
      <div class="buttongroup1">
        <button class="userbutton">
          <img class="vector-icon1" alt="" src="/vector.svg" />
          <img class="vector-icon2" alt="" src="/vector1.svg" />
        </button>
        <img class="heart-icon1" alt="" src="/heart1.svg" />
        <button class="cartbutton2">
          <div class="shopping-cart-container">
            <img class="right-icon5" alt="" src="/shoppingcart1.svg" />
          </div>
          <div class="cart1">Cart</div>
        </button>
      </div>
    </div>
    <div class="production-manager">
      <div class="title1">
        <div class="production-mamagement">Production Mamagement</div>
        <button class="newbutton">
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
        productImage="/defaultImage.png"
        productionName="production name"
        productPrice="$650"
        productAmout="10"
      />
      <div class="productmanageitem1">
        <div class="button-group1">
          <img class="icon-page-edit1" alt="" src="/-icon-page-edit1.svg" />
          <img class="icon-trash1" alt="" src="/-icon-trash1.svg" />
        </div>
        <div class="prouction1">
          <img
            class="g92-2-500x500-1-icon1"
            alt=""
            src="/g922500x500-12@2x.png"
          />
          <div class="production-name1">production name</div>
        </div>
        <div class="productprice2">$650</div>
        <div class="production-name1">10</div>
      </div>
      <div class="productmanageitem1">
        <div class="button-group1">
          <img class="icon-page-edit1" alt="" src="/-icon-page-edit2.svg" />
          <img class="icon-trash1" alt="" src="/-icon-trash2.svg" />
        </div>
        <div class="prouction1">
          <img
            class="g92-2-500x500-1-icon1"
            alt=""
            src="/g922500x500-13@2x.png"
          />
          <div class="production-name1">production name</div>
        </div>
        <div class="productprice2">$650</div>
        <div class="production-name1">10</div>
      </div>
    </div>
    <Footers />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import ProductManageItems from "../components/ProductManageItems.vue";
  import Footers from "../components/Footers.vue";

  export default defineComponent({
    name: "ProductionMamagementPage",
    components: { ProductManageItems, Footers },
    methods: {
      onLogoClick() {
        this.$router.push("/mainpage");
      },
    },
  });
</script>
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
    position: relative;
    width: 100px;
    height: 26px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .production {
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .inventory {
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
