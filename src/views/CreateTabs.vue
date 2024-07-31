<template>
  <div class="tabs">
    <ul>
      <li @click="active = '1'" :class="active === '1' ? 'focus' : ''">
        Tab One
      </li>
      <li @click="active = '2'" :class="active === '2' ? 'focus' : ''">
        Tab Two
      </li>
      <li @click="active = '3'" :class="active === '3' ? 'focus' : ''">
        Tab Three
      </li>
      <li @click="active = '4'" :class="active === '4' ? 'focus' : ''">
        Tab Four
      </li>
    </ul>
    <div class="tabs-content">
      <div v-if="active === '1'">Content One</div>
      <div v-if="active === '2'">Content Two</div>
      <div v-if="active === '3'">Content Three</div>
      <div v-if="active === '4'">Content Four</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const active = ref("1");
</script>

<style lang="scss" scoped>
.tabs {
  margin: 20px auto;
  width: fit-content;
  background-color: #eee;
  padding: 40px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    li {
      cursor: pointer;
      padding: 10px;
      background-color: #ddd;
      opacity: 0.3;
      &.focus {
        opacity: 1;
      }
    }
  }
  .tabs-content {
    margin: 50px 0;
  }
}
</style>
