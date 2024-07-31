<template>
  <div class="product-price">
    <div class="product-title">product-title</div>
    <div class="product-desc">product-desc</div>
    <div class="price">Price: ${{ price }}</div>
    <div class="amount"></div>
    <input type="range" min="1" max="20" step="1" v-model="inputValue" />
    <div class="total-price">
      <span class="total-amount">Amount: {{ inputValue }}</span
      ><br />
      <span class="total-amount-price">${{ total }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
let inputValue = ref(1);
let price = ref(50);
let total = computed(() => {
  return price.value * inputValue.value;
});
</script>
