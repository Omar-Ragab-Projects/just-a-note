<template>
  <div class="get-repos">
    <input type="text" v-model="username" />
    <button @click="getRepos">Get</button>
    <div v-for="repo in repos">{{ repo.name }}</div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const username = ref("");
const repos = ref();
function getRepos() {
  return axios
    .get(`https://api.github.com/users/${username.value}/repos`)
    .then((response) => {
      repos.value = response.data;
    })
    .catch((error) => console.log(error.message));
}
</script>
