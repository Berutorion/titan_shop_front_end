<template>
  <div class="pagination-wrapper">
    <div class="pagination">
      <div class="pagination-arrows2">
        <div class="paginationr-chevrondefault5">
          <img
            class="arrow-chevron-left-l2"
            alt=""
            src="/arrow--chevron-left-l1.svg"
          />
        </div>
        <div class="prev2">Prev</div>
      </div>
      <button class="pagination-numbers10">
        <div class="div14">1</div>
      </button>
      <button class="pagination-numbers10">
        <div class="div14">2</div>
      </button>
      <div class="pagination-numbers12">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers13">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers13">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers13">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers13">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers13">
        <div class="prev2">3</div>
      </div>
      <div class="pagination-numbers18">
        <div class="div22">...</div>
      </div>
      <button class="pagination-numbers19">
        <div class="div23">10</div>
      </button>
      <div class="pagination-arrows3">
        <div class="prev2">Next</div>
        <div class="paginationr-chevrondefault5">
          <img
            class="arrow-chevron-left-l2"
            alt=""
            src="/arrow--chevron-right-l2.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Pagination",
  });
</script>
<style scoped>
  .arrow-chevron-left-l2 {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .paginationr-chevrondefault5 {
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .prev2 {
    position: relative;
    line-height: 150%;
  }
  .pagination-arrows2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0px 8px 0px 0px;
    align-items: center;
    justify-content: flex-start;
  }
  .div14 {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    font-family: "Nunito Sans";
    color: #070a13;
    text-align: left;
  }
  .pagination-numbers10 {
    cursor: pointer;
    border: none;
    padding: 8px;
    background-color: transparent;
    flex: 1;
    border-radius: 1000px;
    height: 44px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .pagination-numbers12 {
    flex: 1;
    border-radius: 1000px;
    height: 44px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .pagination-numbers13 {
    flex: 1;
    border-radius: 1000px;
    height: 44px;
    display: none;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .div22 {
    position: relative;
    letter-spacing: 0.15px;
    line-height: 140%;
  }
  .pagination-numbers18 {
    flex: 1;
    border-radius: 4px;
    height: 44px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .div23 {
    position: relative;
    font-size: 16px;
    line-height: 150%;
    font-family: "Nunito Sans";
    color: #fff;
    text-align: left;
  }
  .pagination-numbers19 {
    cursor: pointer;
    border: none;
    padding: 8px;
    background-color: #15adb7;
    flex: 1;
    border-radius: 1000px;
    height: 44px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .pagination-arrows3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0px 0px 0px 8px;
    align-items: center;
    justify-content: flex-start;
  }
  .pagination {
    width: 392px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
  }
  .pagination-wrapper {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: 16px;
    color: #070a13;
    font-family: "Nunito Sans";
  }
</style>
