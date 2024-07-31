<template>
  <header>
    <nav>
      <RouterLink to="/">ShowPass</RouterLink> |
      <RouterLink to="/about">TitleToSlug</RouterLink> |
      <RouterLink to="/color-change">ColorChange</RouterLink> |
      <RouterLink to="/product-price">ProductPrice</RouterLink> |
      <RouterLink to="/get-repos">GetRepos</RouterLink> |
      <RouterLink to="/form-validate">FormValidate</RouterLink> |
      <RouterLink to="/to-do-list">ToDoList</RouterLink> |
      <RouterLink to="/button-form">ButtonForm</RouterLink> |
      <RouterLink to="/gradient-generator">GradientGenerator</RouterLink> |
      <RouterLink to="/toggle-class">ToggleClass</RouterLink> |
      <RouterLink to="/create-tabs">CreateTabs</RouterLink> |
      <RouterLink to="/random-images">RandomImages</RouterLink> |
      <RouterLink to="/just-a-note">JustaNote</RouterLink> |
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="scss"></style>
