<template>
  <div class="app">
    <div :class="addClass" @click="firstMethod">First Method</div>
    <div :class="{ selected: isSelected }" @click="isSelected = !isSelected">
      Second Method
    </div>
    <div @click="toggle">Third Method</div>
    <div @click="toggleAdvanced($event, 'selected')">Fourth Method</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const addClass = ref("");
const isSelected = ref(false);
function firstMethod() {
  addClass.value = addClass.value ? "" : "selected";
}
function toggle(e) {
  e.target.classList.toggle("selected");
}
function toggleAdvanced(e, className) {
  e.target.classList.toggle(className);
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  gap: 10px;
  margin: 20px auto;
  width: fit-content;

  div {
    padding: 15px 20px;
    background-color: aqua;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    &.selected {
      background-color: green;
      color: white;
    }
  }
}
</style>
