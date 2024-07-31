<template>
  <form action="">
    <input type="text" placeholder="Type Your Title" v-model="textInput" />
    <button @click.prevent="createSlug">
      {{ $capFirstChar("convert To Slug") }}
    </button>
  </form>
  <p class="slug-rezult">
    https://google.com/<span>{{ slug }}</span>
  </p>
</template>

<script setup>
import { ref } from "vue";
let textInput = ref("");
let slug = ref("");
function createSlug() {
  let theSlug = textInput.value;
  theSlug = theSlug.toLowerCase();
  // theSlug = theSlug.trim();
  theSlug = theSlug.replace(/^\s+|\s+$/g, "");
  theSlug = theSlug.replace(/\s+/g, "-");
  theSlug = theSlug.replace("&", "-and-");
  theSlug = theSlug.replace(/--and--/g, "-and-");
  slug.value = theSlug;
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
