<template>
  <form action="">
    <input type="text" placeholder="Type Name" v-model="name" />
    <input type="text" placeholder="Type Email" v-model="mail" />
    <input type="text" placeholder="Type Msg" v-model="msg" />
    <button
      @click.prevent
      :disabled="!name.length || !mail.length || !msg.length"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
const name = ref("");
const mail = ref("");
const msg = ref("");
</script>

<style scoped>
form {
  margin: auto;
  width: fit-content;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
