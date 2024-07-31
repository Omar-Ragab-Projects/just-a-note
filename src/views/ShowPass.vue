<template>
  <input :type="currentType" />
  <button @click="showHide">{{ btnText }}</button>

  <div class="alert">
    <button @click="message = !message">
      {{ message ? "Hide Msg" : "Show Msg" }}
    </button>
    <transition name="slide-fade">
      <div v-if="message">This Is Your Cart</div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
let currentType = ref("password");
let btnText = ref("Show");
let message = ref(false);
function showHide() {
  currentType.value = currentType.value === "password" ? "text" : "password";
  btnText.value = btnText.value === "Show" ? "Hide" : "Show";
}
</script>
