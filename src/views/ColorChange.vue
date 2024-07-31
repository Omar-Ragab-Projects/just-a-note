<template>
  <div class="color" :style="{ '--mainColor': mainC }">
    <ul>
      <li
        v-for="item in colors"
        :data-color="item.color"
        :style="{ 'background-color': item.color }"
        @click="changeColor"
      ></li>
    </ul>
    <div class="test"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let mainC = ref("red");
let colors = ref([
  { color: "red" },
  { color: "orange" },
  { color: "gold" },
  { color: "silver" },
]);
function changeColor(e) {
  mainC.value = e.target.getAttribute("data-color");
}
</script>

<style scoped>
ul {
  display: flex;
  gap: 10px;
}
li {
  list-style: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
div.test {
  width: 50px;
  height: 30px;
  background-color: var(--mainColor);
}
</style>
