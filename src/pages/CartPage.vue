<template>
    <div class="cart-page">
      <div class="navigation">
        <div class="logo">
          <div class="logo-child" />
          <img class="logo-item" alt="" src="/vector-1.svg" />
          <div class="storepk">store.pk</div>
          <div class="logo-child" />
          <div class="logo-child" />
        </div>
        <div class="input-field">
          <div class="input-field-base">
            <div class="input-labels">
              <div class="typed">Search</div>
            </div>
            <img class="right-icon" alt="" src="/right-icon.svg" />
          </div>
        </div>
        <div class="buttongroup">
          <img class="right-icon" alt="" src="/userbutton.svg" />
          <div class="cartbutton">
            <div class="shopping-cart-wrapper">
              <img class="right-icon" alt="" src="/shoppingcart.svg" />
            </div>
            <div class="cart">Cart</div>
          </div>
        </div>
      </div>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="cart-main-section-parent">
            <div class="cart-main-section">
              <div class="product-parent">
                <div class="typed">Product</div>
                <div class="typed">Price</div>
                <div class="typed">Quantity</div>
                <div class="typed">Subtotal</div>
              </div>
            </div>
            <div class="cart-section">
              <div class="div">$650</div>
              <div class="div1">$650</div>
              <div class="quantity1">
                <select class="quantity-child" required />
              </div>
              <div class="monitor-cart-small">
                <img
                  class="g27cq4-500x500-1-icon"
                  alt=""
                  src="/g27cq4500x500-1@2x.png"
                />
              </div>
              <div class="lcd-monitor">LCD Monitor</div>
              <img class="icon-cancel" alt="" src="/iconcancel.svg" />
            </div>
            <div class="cart-section">
              <div class="div">$550</div>
              <div class="div1">$1100</div>
              <div class="quantity1">
                <div class="parent">
                  <div class="typed">02</div>
                  <div class="drop-up-small-parent">
                    <img
                      class="drop-up-small-icon"
                      alt=""
                      src="/dropupsmall.svg"
                    />
                    <img
                      class="drop-up-small-icon"
                      alt=""
                      src="/dropdownsmall.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="monitor-cart-small">
                <img
                  class="g92-2-500x500-1-icon"
                  alt=""
                  src="/g922500x500-1@2x.png"
                />
              </div>
              <div class="lcd-monitor">H1 Gamepad</div>
            </div>
          </div>
          <div class="frame-child" />
        </div>
        <div class="instance-wrapper">
          <div class="cart-total-parent">
            <div class="cart-total">Cart Total</div>
            <div class="subtotal-parent">
              <div class="typed">Subtotal:</div>
              <div class="typed">$1750</div>
            </div>
            <div class="shipping-parent">
              <div class="typed">Shipping:</div>
              <div class="typed">Free</div>
            </div>
            <div class="total-parent">
              <div class="typed">Total:</div>
              <div class="typed">$1750</div>
            </div>
            <button class="button">
              <div class="view-all-products">Procees to checkout</div>
            </button>
            <img class="underline-icon" alt="" src="/underline.svg" />
            <img class="underline-icon1" alt="" src="/underline1.svg" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="stratus99-e-commerce-inc">
          © 2021 Winstore. All Rights Reserved.
        </div>
      </div>
    </div>
  </template>
  <script>
    import { defineComponent, ref } from "vue";
  
    export default defineComponent({
      name: "CartPage",
    });
  </script>
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
      background-color: #03484d;
      width: 1190px;
      display: flex;
      flex-direction: row;
      padding: 10px 60px;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    .product-parent {
      position: absolute;
      top: 24px;
      left: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .cart-main-section {
      align-self: stretch;
      position: relative;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
      height: 72px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .div {
      position: absolute;
      top: 39px;
      left: 387px;
      line-height: 24px;
    }
    .div1 {
      position: absolute;
      top: 39px;
      left: 1063px;
      line-height: 24px;
    }
    .quantity-child {
      position: absolute;
      top: 6px;
      left: 12px;
      width: 48px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
    .quantity1 {
      position: absolute;
      top: 27.5px;
      left: 708.5px;
      border-radius: 4px;
      border: 1.5px solid rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      width: 75px;
      height: 47px;
      overflow: hidden;
    }
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
      position: absolute;
      top: calc(50% - 27px);
      left: calc(50% - 545px);
      width: 54px;
      height: 54px;
      overflow: hidden;
    }
    .lcd-monitor {
      position: absolute;
      top: 39px;
      left: 114px;
      line-height: 24px;
    }
    .icon-cancel {
      position: absolute;
      top: 20px;
      left: 30px;
      width: 24px;
      height: 24px;
      overflow: hidden;
    }
    .cart-section {
      align-self: stretch;
      position: relative;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
      height: 102px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .drop-up-small-icon {
      position: relative;
      width: 16px;
      height: 16px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .drop-up-small-parent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .parent {
      position: absolute;
      top: 6px;
      left: 12px;
      width: 48px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }
    .g92-2-500x500-1-icon {
      position: absolute;
      height: 78.19%;
      width: 90.53%;
      top: 11.11%;
      right: 3.92%;
      bottom: 10.7%;
      left: 5.56%;
      max-width: 100%;
      overflow: hidden;
      max-height: 100%;
      object-fit: cover;
    }
    .cart-main-section-parent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 40px;
    }
    .frame-child {
      align-self: stretch;
    }
    .frame-group {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 24px;
    }
    .cart-total {
      position: absolute;
      top: 32px;
      left: 24px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
    }
    .subtotal-parent {
      position: absolute;
      top: 84px;
      left: 24px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    .shipping-parent {
      position: absolute;
      top: 140px;
      left: 24px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    .total-parent {
      position: absolute;
      top: 196px;
      left: 24px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    .view-all-products {
      position: relative;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-family: Poppins;
      color: #fafafa;
      text-align: left;
    }
    .button {
      cursor: pointer;
      border: none;
      padding: 16px 48px;
      background-color: #15adb7;
      position: absolute;
      top: 236px;
      left: 89px;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .underline-icon {
      position: absolute;
      top: 123px;
      left: 24px;
      width: 422px;
      height: 1px;
      opacity: 0.4;
    }
    .underline-icon1 {
      position: absolute;
      top: 179px;
      left: 24px;
      width: 422px;
      height: 1px;
      opacity: 0.4;
    }
    .cart-total-parent {
      position: relative;
      border-radius: 4px;
      border: 1.5px solid #000;
      box-sizing: border-box;
      width: 470px;
      height: 324px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .instance-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
    .frame-parent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      align-items: flex-end;
      justify-content: center;
      gap: 80px;
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
    .footer {
      background-color: #000;
      width: 1190px;
      display: flex;
      flex-direction: row;
      padding: 21px 124px;
      box-sizing: border-box;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      font-size: 18px;
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
      font-family: "Century Gothic";
    }
  </style>
  