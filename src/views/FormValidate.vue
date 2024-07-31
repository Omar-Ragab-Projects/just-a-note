<template>
  <div class="validate">
    <div class="errors">
      <div class="error" v-for="error in errors">{{ error }}</div>
    </div>
    <form action="post" method="send">
      <div class="form-input">
        <label for="">Username</label>
        <input type="text" v-model="username" class="form-input" />
      </div>
      <div class="form-input">
        <label for="">Subject</label>
        <input type="text" v-model="subject" class="form-input" />
      </div>
      <div class="form-input">
        <label for="">Message</label>
        <textarea class="form-input" v-model="message"></textarea>
      </div>
      <input type="submit" value="Send" @click="validateForm" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref();
const subject = ref();
const message = ref();
const errors = ref([]);
function validateForm(e) {
  errors.value = [];
  if (!username.value) {
    errors.value.push("Username Can't Be Empty");
  }
  if (!subject.value) {
    errors.value.push("Subject Can't Be Empty");
  }
  if (!message.value) {
    errors.value.push("Message Can't Be Empty");
  }
  if (username.value && username.value.length > 10) {
    errors.value.push("Username Must Be Lower Than 10 Chars");
  }
  if (errors.value.length == 0) {
    return true;
  }
  e.preventDefault();
}
</script>

<style lang="scss" scoped>
.errors {
  margin-bottom: 10px;

  .error {
    margin-bottom: 5px;
    padding: 4px;
    background-color: #ffcdd2;
    color: rgb(0, 0, 0);
  }
}
.validate {
  box-shadow: 0 0 10px #ddd;
  margin: 20px auto;
  width: fit-content;
  padding: 20px 40px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      display: inline-block;
      width: 100px;
    }
    .form-input {
      display: flex;
      width: 100%;
    }
  }
}
</style>
