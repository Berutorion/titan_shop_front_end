<template>
  <div class="mainpage">
    <div class="navigation2">
      <div class="logo3">
        <div class="logo-child9" />
        <img class="logo-child10" alt="" src="/vector-15.svg" />
        <div class="storepk4">store.pk</div>
        <div class="logo-child9" />
        <div class="logo-child9" />
      </div>
      <div class="input-field2">
        <div class="top-content3">
          <div class="input-labels14">
            <div class="label7">Label</div>
          </div>
          <div class="input-labels15">
            <div class="label7">Label</div>
          </div>
        </div>
        <div class="input-field-base3">
          <img class="left-icon7" alt="" src="/left-icon8.svg" />
          <img class="processorvisa-icon5" alt="" src="/processorvisa3.svg" />
          <input
            class="input-labels16"
            type="text"
            placeholder="Search"
            maxlength
            minlength
          />
          <button class="right-icon7">
            <img class="vector-icon3" alt="" src="/vector14.svg" />
            <img class="vector-icon4" alt="" src="/vector15.svg" />
          </button>
        </div>
        <div class="input-labels17">
          <div class="label7">Description</div>
        </div>
      </div>
      <div class="buttongroup3">
        <button class="userbutton1">
          <img class="vector-icon5" alt="" src="/vector.svg" />
          <img class="vector-icon6" alt="" src="/vector1.svg" />
        </button>
        <img class="heart-icon2" alt="" src="/heart3.svg" />
        <button class="cartbutton3">
          <div class="shopping-cart-frame">
            <img class="shopping-cart-icon2" alt="" src="/shoppingcart1.svg" />
          </div>
          <div class="cart2">Cart</div>
        </button>
      </div>
    </div>
    <div class="productcontainer">
      <ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        :onContainerClick="onContainerClick"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      /><ProductCards
        productName="Haier HSU-12HFMAC.."
        produuctImage="/produuctimage1@2x.png"
        productPrice="RS 56.000"
        containerCursor="unset"
      />
    </div>
    <Pagination /><Footers />
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";
  import ProductCards from "../components/ProductCards.vue";
  import Pagination from "../components/Pagination.vue";
  import Footers from "../components/Footers.vue";

  export default defineComponent({
    name: "MainPage",
    components: { ProductCards, Pagination, Footers },
    methods: {
      onContainerClick() {
        this.$router.push("/productdetailpage");
      },
    },
  });
</script>
<style scoped>
  .logo-child9 {
    position: relative;
    border-radius: 50%;
    background-color: #fff;
    width: 7px;
    height: 7px;
  }
  .logo-child10 {
    position: relative;
    width: 92.5px;
    height: 28.5px;
  }
  .storepk4 {
    position: relative;
  }
  .logo3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .label7 {
    position: relative;
    line-height: 20px;
    font-weight: 500;
  }
  .input-labels14 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .input-labels15 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: right;
  }
  .top-content3 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }
  .left-icon7 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .processorvisa-icon5 {
    position: relative;
    width: 35px;
    height: 24px;
    display: none;
  }
  .input-labels16 {
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
  .vector-icon3 {
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
  .vector-icon4 {
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
  .right-icon7 {
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
  .input-field-base3 {
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
  .input-labels17 {
    align-self: stretch;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #64748b;
  }
  .input-field2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4px;
    font-size: 14px;
    color: #070a13;
    font-family: "Public Sans";
  }
  .vector-icon5 {
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
  .vector-icon6 {
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
  .userbutton1 {
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
  .userbutton1:hover {
    display: flex;
  }
  .heart-icon2 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
  }
  .shopping-cart-icon2 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .shopping-cart-frame {
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cart2 {
    position: relative;
    font-size: 15px;
    text-transform: capitalize;
    font-family: "Century Gothic";
    color: #fff;
    text-align: center;
  }
  .cartbutton3 {
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
  .buttongroup3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
  }
  .navigation2 {
    align-self: stretch;
    background-color: #03484d;
    display: flex;
    flex-direction: row;
    padding: 10px 60px;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .productcontainer {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .mainpage {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 812px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 31px;
    text-align: left;
    font-size: 19px;
    color: #fff;
    font-family: "Century Gothic";
  }

  @media screen and (max-width: 1200px) {
    .logo3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }

    .input-field-base3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
    }

    .buttongroup3 {
      flex-direction: row;
      gap: 24px;
      align-items: center;
      justify-content: flex-start;
    }

    .navigation2 {
      flex-direction: row;
      gap: 40px;
      align-items: center;
      justify-content: center;
    }

    .productcontainer {
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 960px) {
    .logo3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }

    .input-field-base3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
    }

    .buttongroup3 {
      flex-direction: row;
      gap: 24px;
      align-items: center;
      justify-content: flex-start;
    }

    .navigation2 {
      flex-direction: row;
      gap: 40px;
      align-items: center;
      justify-content: center;
    }

    .productcontainer {
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 420px) {
    .logo3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: center;
      flex: unset;
      align-self: stretch;
    }

    .input-field-base3 {
      flex-direction: row;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
    }

    .input-field2 {
      flex: unset;
      align-self: stretch;
    }

    .buttongroup3 {
      flex-direction: row;
      gap: 24px;
      align-items: center;
      justify-content: flex-start;
      flex: unset;
      align-self: stretch;
    }

    .navigation2 {
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .productcontainer {
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
  }
</style>
