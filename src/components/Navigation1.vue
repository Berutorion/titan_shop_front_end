<script setup>
  import { defineProps, ref } from "vue";
  import router from "../main";
  import auth from "../helpers/auth";
  import Alert from "../helpers/Alerts";
  import productAPI from "../api/product";
  const props = defineProps({
    onSearchClick: Function,
  });
  const isSeller = ref(auth.isSeller());
  const isLogin = ref(auth.isLogin());
  const isMainPage = ref(router.currentRoute.value.name === "MainPage");
  function onLogoClick() {
    router.push({ name: "MainPage" });
  }

  function onLogOutClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.reload();
    // Alert.toast("登出成功", "success", "top-end");
  }

  function onLoginClick() {
    router.push({ name: "LoginPage" });
  }
  // search
  const searchInput = ref("");
  const maxPrice = ref("");
  const minPrice = ref("");
  function onSearchClick() {
    props.onSearchClick(searchInput.value, minPrice.value, maxPrice.value);
  }
</script>
<template>
  <div class="navigation3">
    <button class="logo4" @click="onLogoClick">
      <div class="logo-child13" />
      <img class="logo-child14" alt="" src="/vector-14.svg" />
      <div class="storepk5">store.pk</div>
      <div class="logo-child13" />
      <div class="logo-child13" />
    </button>
    <div class="input-field3" v-if="isMainPage">
      <div class="input-field-base6">
        <img class="left-icon10" alt="" src="/left-icon7.svg" />
        <img class="processorvisa-icon8" alt="" src="/processorvisa4.svg" />
        <input
          class="input-labels28"
          type="text"
          v-model.trim="searchInput"
          placeholder="Search"
          maxlength
          minlength
        />
        <button class="right-icon9" @click="onSearchClick">
          <img class="vector-icon15" alt="" src="/vector10.svg" />
          <img class="vector-icon16" alt="" src="/vector11.svg" />
        </button>
      </div>
    <div class="priceFilter">
      <span style="color: aliceblue;">價格範圍: </span>
      <input
     placeholder="0"
     v-model="minPrice"
     />
     <span style="color: aliceblue;"> ~ </span>
     <input
     placeholder="1000"
      v-model="maxPrice"
     />
    </div>
    
    </div>
    <div class="buttongroup4">
      <router-link :to="{name: 'ProductManagementPage'}" class="userbutton2" v-if="isSeller" >
        <img class="vector-icon17" alt="" src="/vector12.svg" />
        <img class="vector-icon18" alt="" src="/vector13.svg" />
      </router-link>
      <img class="heart-icon3" alt="" src="/heart2.svg" />
      <router-link :to="{name: 'CartPage'}" class="cartbutton4" v-if="!isSeller">
        <div class="frame-div">
          <img class="shopping-cart-icon3" alt="" src="/shoppingcart2.svg" />
        </div>
        <div class="cart3">Cart</div>
      </router-link>
      <button class="cartbutton4" v-if="isLogin" @click="onLogOutClick">
        <div class="frame-div">
        </div>
        <div class="cart3">LogOut</div>
      </button>
      <button class="cartbutton4" v-else @click="onLoginClick">
        <div class="frame-div">
        </div>
        <div class="cart3">Login</div>
      </button>

    </div>
  </div>
</template>

<style scoped>
.priceFilter {
  width: 100%;
}
  .logo-child13 {
    position: relative;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 7px;
  }
  .logo-child14 {
    position: relative;
    width: 92.5px;
    height: 28.5px;
  }
  .storepk5 {
    position: relative;
    font-size: 19px;
    font-family: "Century Gothic";
    color: #fff;
    text-align: left;
  }
  .logo4 {
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
  .label13 {
    position: relative;
    line-height: 20px;
    font-weight: 500;
  }
  .input-labels26 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .input-labels27 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .top-content6 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }
  .left-icon10 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .processorvisa-icon8 {
    position: relative;
    width: 35px;
    height: 24px;
    display: none;
  }
  .input-labels28 {
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
  .vector-icon15 {
    position: absolute;
    height: 75%;
    width: 75%;
    top: 8.33%;
    right: 16.67%;
    bottom: 16.67%;
    left: 8.33%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-icon16 {
    position: absolute;
    height: 26.46%;
    width: 26.46%;
    top: 65.21%;
    right: 8.33%;
    bottom: 8.33%;
    left: 65.21%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .right-icon9 {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: #fff;
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .input-field-base6 {
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
  .input-labels29 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #64748b;
  }
  .input-field3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;
  }
  .vector-icon17 {
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
  .vector-icon18 {
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
  .userbutton2 {
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
  .heart-icon3 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .shopping-cart-icon3 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .frame-div {
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cart3 {
    position: relative;
    font-size: 15px;
    text-transform: capitalize;
    font-family: "Century Gothic";
    color: #fff;
    text-align: center;
  }
  .cartbutton4 {
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
  .buttongroup4 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
  }
  .navigation3 {
    align-self: stretch;
    background-color: #03484d;
    display: flex;
    flex-direction: row;
    padding: 10px 60px;
    align-items: center;
    justify-content: center;
    gap: 40px;
    text-align: left;
    font-size: 14px;
    color: #070a13;
    font-family: "Public Sans";
  }

  @media screen and (max-width: 420px) {
    .logo4 {
      flex: unset;
      align-self: stretch;
    }

    .input-field-base6 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
    }

    .input-field3 {
      flex: unset;
      align-self: stretch;
    }

    .buttongroup4 {
      flex: unset;
      align-self: stretch;
    }

    .navigation3 {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
  }
</style>
