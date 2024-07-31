<template>
  <div class="random"><img :src="getRandom(photos)" alt="" /></div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
const photos = ref([
  "http://placehold.co/400/F00/FFF",
  "http://placehold.co/400/00F/FFF",
  "http://placehold.co/400/080/FFF",
  "http://placehold.co/400/000/FFF",
  "http://placehold.co/400/AAA/FFF",
]);
const randomPhoto = ref("");
function getRandom(imgs) {
  return imgs[Math.floor(Math.random() * photos.value.length)];
}
</script>
