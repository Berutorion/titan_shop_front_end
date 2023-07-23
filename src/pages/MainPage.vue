
<script setup>
  import { ref , onMounted} from "vue";
  import ProductCards from "../components/ProductCards.vue";
  import Pagination from "../components/Pagination.vue";
  import Footers from "../components/Footers.vue";
  import productAPI from "../api/product";
  import Navigation1 from "../components/Navigation1.vue";

  const productList = ref([]);
  onMounted(async () => {
    try {
      const response = await productAPI.getProducts();
      productList.value = response;
    } catch (error) {
      console.log(error);
    }
   
  });

</script>
<template>
  <div class="mainpage">
     <Navigation1/>
    <div class="productContainer">
      <ProductCards
        v-for="product in productList"
        :productId="product.id"
        :productName=  "product.name"
        :productImage= "product.image"
        :productPrice= "product.price"
      />
    </div>
    <Pagination /><Footers />
  </div>
</template>

<style scoped>
  
  .productContainer {
    align-self: stretch;
    flex: 1;
    /* overflow: hidden; */
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
    height: 100dvh;
    /* overflow: hidden; */
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
  }
</style>
